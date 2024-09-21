import React, { useState } from "react";
import InputField from "../components/InputField";
import { signUp } from "../services/userApi";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import { createDestination } from "../services/destinationApi";
import ReactQuill from "react-quill";
const CreateDestinations = () => {
  const [destination, setDestination] = useState("");
  const [historicalBackground, setHistoricalBackground] = useState("");
  const [culturalSignificance, setCulturalSignificance] = useState("");
  const [touristAttractions, setTouristAttractions] = useState("");
  const [localCuisines, setLocalCuisines] = useState("");
  const [travelTips, setTravelTips] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createDestination({
        destination,
        historicalBackground,
        culturalSignificance,
        touristAttractions,
        localCuisines,
        travelTips,
        image,
      });
      setDestination("");
      setHistoricalBackground("");
      setCulturalSignificance("");
      setTouristAttractions("");
      setLocalCuisines("");
      setTravelTips("");
      setImage("");
      toast.success(response?.message);
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Destinations
          </h2>
        </div>

        <div className="mt-10  ">
          <form onSubmit={handleSubmit} className="space-y-2">
            <InputField
              label="Destination"
              type="text"
              name="destination"
              required
              onChange={(e) => setDestination(e.target.value)}
              value={destination}
            />
            <InputField
              label="Image"
              type="text"
              name="image"
              required
              onChange={(e) => setImage(e.target.value)}
              value={image}
            />
            <div className="flex flex-col gap-14 mb-20">
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-700">
                    Historical Background
                  </label>
                  <ReactQuill
                    modules={{
                      toolbar: [
                        [{ header: [1, 2, false] }],
                        ['bold', 'italic', 'underline', 'strike'],
                        [{ list: 'ordered' }, { list: 'bullet' }],
                        ['blockquote', 'code-block'],
                        [{ script: 'sub' }, { script: 'super' }],
                        [{ indent: '-1' }, { indent: '+1' }],
                        [{ direction: 'rtl' }],
                        [{ size: ['small', false, 'large', 'huge'] }],
                        [{ header: [1, 2, 3, 4, 5, 6, false] }],
                        [{ color: [] }, { background: [] }],
                        [{ font: [] }],
                        [{ align: [] }],
                        ['clean'],
                        ['image', 'video', 'link'],
                      ],
                    }}
                    theme="snow"
                    value={historicalBackground}
                    className="h-96 "
                    onChange={(value) => setHistoricalBackground(value)}
                  />
                </div>

                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-700">
                    Cultural Significance
                  </label>
                  <ReactQuill
                    modules={{
                      toolbar: [
                        [{ header: [1, 2, false] }],
                        ['bold', 'italic', 'underline', 'strike'],
                        [{ list: 'ordered' }, { list: 'bullet' }],
                        ['blockquote', 'code-block'],
                        [{ script: 'sub' }, { script: 'super' }],
                        [{ indent: '-1' }, { indent: '+1' }],
                        [{ direction: 'rtl' }],
                        [{ size: ['small', false, 'large', 'huge'] }],
                        [{ header: [1, 2, 3, 4, 5, 6, false] }],
                        [{ color: [] }, { background: [] }],
                        [{ font: [] }],
                        [{ align: [] }],
                        ['clean'],
                        ['image', 'video', 'link'],
                      ],
                    }}
                    theme="snow"
                    value={culturalSignificance}
                    className="h-96 "
                    onChange={(value) => setCulturalSignificance(value)}
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1/3">
                  <label className="block text-sm font-medium text-gray-700">
                    Tourist Attractions
                  </label>
                  <ReactQuill
                    modules={{
                      toolbar: [
                        [{ header: [1, 2, false] }],
                        ['bold', 'italic', 'underline', 'strike'],
                        [{ list: 'ordered' }, { list: 'bullet' }],
                        ['blockquote', 'code-block'],
                        [{ script: 'sub' }, { script: 'super' }],
                        [{ indent: '-1' }, { indent: '+1' }],
                        [{ direction: 'rtl' }],
                        [{ size: ['small', false, 'large', 'huge'] }],
                        [{ header: [1, 2, 3, 4, 5, 6, false] }],
                        [{ color: [] }, { background: [] }],
                        [{ font: [] }],
                        [{ align: [] }],
                        ['clean'],
                        ['image', 'video', 'link'],
                      ],
                    }}
                    theme="snow"
                    value={touristAttractions}
                    className="h-96 "
                    onChange={(value) => setTouristAttractions(value)}
                  />
                </div>
                <div className="w-1/3">
                  <label className="block text-sm font-medium text-gray-700">
                    Local Cuisines
                  </label>
                  <ReactQuill
                    modules={{
                      toolbar: [
                        [{ header: [1, 2, false] }],
                        ['bold', 'italic', 'underline', 'strike'],
                        [{ list: 'ordered' }, { list: 'bullet' }],
                        ['blockquote', 'code-block'],
                        [{ script: 'sub' }, { script: 'super' }],
                        [{ indent: '-1' }, { indent: '+1' }],
                        [{ direction: 'rtl' }],
                        [{ size: ['small', false, 'large', 'huge'] }],
                        [{ header: [1, 2, 3, 4, 5, 6, false] }],
                        [{ color: [] }, { background: [] }],
                        [{ font: [] }],
                        [{ align: [] }],
                        ['clean'],
                        ['image', 'video', 'link'],
                      ],
                    }}
                    theme="snow"
                    value={localCuisines}
                    className="h-96 "
                    onChange={(value) => setLocalCuisines(value)}
                  />
                </div>
                <div className="w-1/3">
                  <label className="block text-sm font-medium text-gray-700">
                    Travel Tips
                  </label>
                  <ReactQuill
                    modules={{
                      toolbar: [
                        [{ header: [1, 2, false] }],
                        ['bold', 'italic', 'underline', 'strike'],
                        [{ list: 'ordered' }, { list: 'bullet' }],
                        ['blockquote', 'code-block'],
                        [{ script: 'sub' }, { script: 'super' }],
                        [{ indent: '-1' }, { indent: '+1' }],
                        [{ direction: 'rtl' }],
                        [{ size: ['small', false, 'large', 'huge'] }],
                        [{ header: [1, 2, 3, 4, 5, 6, false] }],
                        [{ color: [] }, { background: [] }],
                        [{ font: [] }],
                        [{ align: [] }],
                        ['clean'],
                        ['image', 'video', 'link'],
                      ],
                    }}
                    theme="snow"
                    value={travelTips}
                    className="h-96 "
                    onChange={(value) => setTravelTips(value)}
                  />
                </div>
              </div>
            </div>

            <div className="p-14 flex justify-center">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add Destination
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateDestinations;
