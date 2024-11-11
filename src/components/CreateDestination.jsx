import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { createDestination, updateDestination } from "../services/destinationApi";
import 'react-quill/dist/quill.snow.css';

export default function CreateDestinations({ setDestinations, destination: destinationToEdit, isEditing, setIsEditing }) {
  const [destination, setDestination] = useState("")
  const [about, setAbout] = useState("")
  const [image, setImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)

  const navigate = useNavigate()

  useEffect(() => {
    if (isEditing && destinationToEdit) {
      setDestination(destinationToEdit.destination)
      setAbout(destinationToEdit.about)
      setImagePreview(destinationToEdit.image)
    }
  }, [isEditing, destinationToEdit])

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImage(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (isEditing) {
        const response = await updateDestination(destinationToEdit._id, {
          destination,
          about,
          image
        })
        setDestinations(previous => previous.map(item => item._id === destinationToEdit._id ? response.data : item))
        setIsEditing(false)
        toast.success(response?.message)
      } else {
        const response = await createDestination({
          destination,
          about,
          image
        })
        setDestinations(previous => [...previous, response.data])
        setDestination("")
        setAbout("")
        setImage(null)
        setImagePreview(null)
        toast.success(response?.message)
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-4 py-5 sm:px-6">
          <img
            alt="Destination Logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5FtS5Nmw19_UejUFZJKSVuA_z517tSDaJ6g&s"
            className="h-12 w-auto mx-auto"
          />
          <h2 className="mt-4 text-center text-2xl font-bold text-gray-900">
            {isEditing ? 'Edit Destination' : 'Add New Destination'}
          </h2>
        </div>
        {
          isEditing &&
          <div className="mt-4 flex justify-center">
            <button
              type="button"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              onClick={() => setIsEditing(false)}
            >
              Close
            </button>
          </div>
        }
        <form onSubmit={handleSubmit} className="px-4 py-5 sm:p-6">
          <div className="space-y-6">
            <div>
              <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
                Destination Name
              </label>
              <input
                type="text"
                name="destination"
                id="destination"
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>

            <div>
              <div>
                <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                  Image
                </label>
                <div className="mt-1 flex items-center">
                  <input
                    type="file"
                    name="image"
                    id="image"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="sr-only"
                  />
                  <label
                    htmlFor="image"
                    className="relative cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("image").click(); // Explicitly trigger the file input
                    }}
                  >
                    <span>{image ? 'Change Image' : 'Upload Image'}</span>
                  </label>
                  {imagePreview && (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="ml-4 h-16 w-16 object-cover rounded-md"
                    />
                  )}
                </div>
              </div>

            </div>

            <div>
              <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                About
              </label>
              <div className="mt-1">
                <ReactQuill
                  theme="snow"
                  value={about}
                  onChange={setAbout}
                  className="h-64"
                  modules={{
                    toolbar: [
                      [{ 'header': [1, 2, false] }],
                      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                      ['link', 'image'],
                      ['clean']
                    ],
                  }}
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isEditing ? 'Update Destination' : 'Add Destination'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}


