import React, { useEffect, useState } from "react";
import CreateDestinations from "../components/CreateDestination";
import { deleteDestination, getDestinations } from "../services/destinationApi";
import { toast } from "sonner";

const DestinationCard = ({ destination,setDestinations }) => {
  const [showFull, setShowFull] = useState(false)
  const [isEditing,setIsEditing] = useState(false);
  const toggleShowFull = () => setShowFull(!showFull)

  const handleDelete=async(id)=>{
    try {
      const response = await deleteDestination(id);
      setDestinations(previous=>previous.filter(item=>item._id!==id))
      toast.success(response?.message);
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message);
    }
  }
  
  if(isEditing){
    return(
      <CreateDestinations setDestinations={setDestinations} destination={destination} isEditing={isEditing} setIsEditing={setIsEditing}/>
    )
  }

  return (
    <div className="w-full bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img
          src={destination.image}
          alt={destination.destination}
          className="w-full h-48 object-cover"
        />
        <h2 className="text-2xl font-bold capitalize p-4 bg-white bg-opacity-75 absolute bottom-0 left-0 right-0">
          {destination.destination}
        </h2>
      </div>
      <div className="p-4">
        <div className={`prose max-w-none ${showFull ? '' : 'line-clamp-3'}`}>
          <div dangerouslySetInnerHTML={{ __html: destination.about }} />
        </div>
      </div>
      <div className="px-4 pb-4 flex flex-col sm:flex-row gap-2 justify-between items-center">
        <button
          className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
          onClick={toggleShowFull}
        >
          {showFull ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              View Less
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              View More
            </>
          )}
        </button>
        <div className="flex gap-2 w-full sm:w-auto">
          <button onClick={()=>setIsEditing(true)} className="flex-1 sm:flex-none px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors duration-300 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
            Update
          </button>
          <button onClick={()=>handleDelete(destination._id)} class="flex-1 sm:flex-none px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors duration-300 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    const getTravelDestinations = async () => {
      const response = await getDestinations();
      setDestinations(response.data);
      console.log(response.data);
    };
    getTravelDestinations();
  }, []);

  return (
    <>
      <CreateDestinations setDestinations={setDestinations} />
      
      <div className="flex gap-2 flex-wrap p-10 justify-center">
        {destinations.map((destination) => (
          <DestinationCard destination={destination}
          setDestinations={setDestinations}

          />
        ))}
      </div>
    </>
  );
};

export default Destinations;



// react ui
