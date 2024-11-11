import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { toast } from "sonner";
import {
  createDestination,
  updateDestination,
} from "../services/destinationApi";
import "react-quill/dist/quill.snow.css";

export default function CreateDestinations({
  setDestinations,
  destination: destinationToEdit,
  isEditing,
  setIsEditing,
  onComplete,
}) {
  const [destination, setDestination] = useState("");
  const [about, setAbout] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    if (isEditing && destinationToEdit) {
      setDestination(destinationToEdit.destination);
      setAbout(destinationToEdit.about);
      setImage(null);
      setImagePreview(destinationToEdit.image);
    } else {
      resetForm();
    }
  }, [isEditing, destinationToEdit]);

  const resetForm = () => {
    setDestination("");
    setAbout("");
    setImage(null);
    setImagePreview(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        const response = await updateDestination(destinationToEdit._id, {
          destination,
          about,
          image,
        });
        setDestinations((previous) =>
          previous.map((item) =>
            item._id === destinationToEdit._id ? response.data : item
          )
        );
        setIsEditing(false);
        toast.success(response?.message);
        onComplete && onComplete();
      } else {
        const response = await createDestination({
          destination,
          about,
          image,
        });
        setDestinations((previous) => [...previous, response.data]);
        resetForm();
        toast.success(response?.message);
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-xl w-full bg-white rounded-3xl shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="flex justify-center mb-6">
            <img
              alt="Destination Logo"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5FtS5Nmw19_UejUFZJKSVuA_z517tSDaJ6g&s"
              className="h-14 w-auto"
            />
          </div>
          <h2 className="text-center text-2xl font-semibold text-gray-900 mb-4">
            {isEditing ? "Edit Destination" : "Add New Destination"}
          </h2>
          <div className="flex justify-between mb-6">
            {(!isEditing || destinationToEdit) && (
              <button
                type="button"
                className="py-2 px-4 text-sm font-semibold text-red-600 bg-red-100 rounded-full hover:bg-red-200 transition duration-200"
                onClick={() => {
                  setIsEditing(false);
                  onComplete && onComplete(); // Close the create form on cancel
                }}
              >
                Close
              </button>
            )}
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="destination"
                className="block text-sm font-medium text-gray-700"
              >
                Destination Name
              </label>
              <input
                type="text"
                name="destination"
                id="destination"
                required
                className="mt-2 block w-full rounded-lg border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-3 bg-gray-50"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                Image
              </label>
              <div className="mt-2 flex items-center space-x-4">
                <input
                  type="file"
                  name="image"
                  id="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
                <label
                  htmlFor="image"
                  className="cursor-pointer py-2 px-4 border border-gray-300 rounded-full shadow-sm text-sm text-gray-700 bg-white hover:bg-gray-100 transition duration-200"
                >
                  {image ? "Change Image" : "Upload Image"}
                </label>
                {imagePreview && (
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="h-16 w-16 object-cover rounded-lg shadow-lg border border-gray-200"
                  />
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor="about"
                className="block text-sm font-medium text-gray-700"
              >
                About
              </label>
              <div className="mt-2">
                <ReactQuill
                  theme="snow"
                  value={about}
                  onChange={setAbout}
                  className="bg-white shadow-sm rounded-lg h-64 overflow-hidden"
                  modules={{
                    toolbar: [
                      [{ header: [1, 2, false] }],
                      ["bold", "italic", "underline", "strike", "blockquote"],
                      [
                        { list: "ordered" },
                        { list: "bullet" },
                        { indent: "-1" },
                        { indent: "+1" },
                      ],
                      ["link", "image"],
                      ["clean"],
                    ],
                  }}
                />
              </div>
            </div>

            <div className="mt-10">
              <button
                type="submit"
                className="w-full py-3 px-4 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition duration-200"
              >
                {isEditing ? "Update Destination" : "Add Destination"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
