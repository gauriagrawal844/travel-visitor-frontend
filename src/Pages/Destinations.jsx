import React, { useEffect, useState } from "react";
import CreateDestinations from "../components/CreateDestination";
import { deleteDestination, getDestinations } from "../services/destinationApi";
import { toast } from "sonner";
import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const DestinationCard = ({
  destination,
  onEdit,
  onDelete,
  showFull,
  toggleShowFull,
}) => {
  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <div className="relative">
        <img
          src={destination.image}
          alt={destination.destination}
          className="w-full h-48 object-cover"
        />
        <h2 className="text-xl font-semibold capitalize p-4 bg-gradient-to-t from-gray-900 to-transparent text-white absolute bottom-0 w-full">
          {destination.destination}
        </h2>
      </div>
      <div className="p-5">
        <div className={`prose max-w-none ${showFull ? "" : "line-clamp-3"}`}>
          <div dangerouslySetInnerHTML={{ __html: destination.about }} />
        </div>
      </div>
      <div className="px-5 pb-5 flex flex-col sm:flex-row gap-3 justify-between items-center">
        <button
          className="w-full sm:w-auto px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center text-sm"
          onClick={toggleShowFull}
        >
          <AiOutlineEye className="mr-1" />
          {showFull ? "View Less" : "View More"}
        </button>
        <div className="flex gap-2 w-full sm:w-auto">
          <button
            onClick={onEdit}
            className="w-9 h-9 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-colors duration-300 flex items-center justify-center"
          >
            <AiOutlineEdit />
          </button>
          <button
            onClick={() => onDelete(destination._id)}
            className="w-9 h-9 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-300 flex items-center justify-center"
          >
            <AiOutlineDelete />
          </button>
        </div>
      </div>
    </div>
  );
};

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentDestination, setCurrentDestination] = useState(null); // Stores the destination to be edited
  const [showFull, setShowFull] = useState(false);

  useEffect(() => {
    const getTravelDestinations = async () => {
      const response = await getDestinations();
      setDestinations(response.data);
      console.log(response.data);
    };
    getTravelDestinations();
  }, []);

  const toggleShowFull = () => setShowFull(!showFull);

  const handleDelete = async (id) => {
    try {
      const response = await deleteDestination(id);
      setDestinations((previous) => previous.filter((item) => item._id !== id));
      toast.success(response?.message);
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  };

  const handleEdit = (destination) => {
    setIsEditing(true);
    setCurrentDestination(destination);
  };

  const handleCreate = () => {
    setIsEditing(true);
    setCurrentDestination(null); // null indicates a new destination
  };

  const handleComplete = () => {
    setIsEditing(false);
    setCurrentDestination(null);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      {/* Show either the form or the button for creating a new destination */}
      {!isEditing && (
        <button
          onClick={handleCreate}
          className="mx-auto mb-6 block px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-200 text-lg"
        >
          Add New Destination
        </button>
      )}

      {/* Render CreateDestinations only when creating or editing */}
      {isEditing ? (
        <CreateDestinations
          setDestinations={setDestinations}
          destination={currentDestination}
          isEditing={Boolean(currentDestination)}
          setIsEditing={setIsEditing}
          onComplete={handleComplete}
        />
      ) : (
        <div className="flex flex-grow gap-10 w-full flex-wrap mt-10 p-10">
          {destinations.map((destination) => (
            <DestinationCard
              key={destination._id}
              destination={destination}
              onEdit={() => handleEdit(destination)}
              onDelete={handleDelete}
              showFull={showFull}
              toggleShowFull={toggleShowFull}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Destinations;
