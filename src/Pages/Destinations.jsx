import React, { useEffect, useState } from "react";
import CreateDestinations from "../components/CreateDestination";
import { getDestinations } from "../services/destinationApi";

const DestinationCard = ({ destination }) => {
  const [showFull, setShowFull] = useState(false);
  return (
    <div
      className={`flex border border-black rounded-lg p-4 w-full ${
        showFull ? "" : "max-h-96"
      }`}
    >
      {!showFull && (
        <div className="p-4 w-1/2">
          <img
            src={destination.image}
            alt="image"
            className="w-full h-full object-cover"
          />
        </div>
      )}
      <div
        className={`flex flex-col gap-2  p-4 ${showFull ? "w-full" : "w-1/2"}`}
      >
        <div>
          <h1 className="text-3xl font-bold capitalize">
            {destination.destination}
          </h1>
          <div
            dangerouslySetInnerHTML={{
              __html: showFull
                ? destination?.historicalBackground
                : destination?.historicalBackground?.split(0, 4),
            }}
          />
        </div>
        <button
          className={`flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${
            showFull ? "w-full" : "w-1/2"
          }`}
          onClick={() => setShowFull(!showFull)}
        >
          {showFull ? "View Less" : "View More"}
        </button>
      </div>
    </div>
  );
};

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
      <CreateDestinations />;
      <div className="flex gap-2 flex-wrap p-10 justify-center">
        {destinations.map((destination) => (
          <DestinationCard destination={destination} />
        ))}
      </div>
    </>
  );
};

export default Destinations;



// react ui
