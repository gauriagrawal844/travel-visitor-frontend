import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDestination, getDestinations } from "../services/destinationApi";
import { FaStar, FaPlane, FaMapMarkerAlt, FaRegSmile } from "react-icons/fa";

const CardDetails = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState({});
  const [recommendedDestinations, setRecommendedDestinations] = useState([]);

  useEffect(() => {
    // Fetch the current destination based on the URL parameter
    const query = `?_id=${id}`;
    getDestination(query).then((response) => {
      setDestination(response.data);
    });

    // Fetch all destinations and filter out the current one
    getDestinations().then((response) => {
      const otherDestinations = response.data.filter((dest) => dest._id !== id);
      setRecommendedDestinations(otherDestinations);
    });
  }, [id]);

  return (
    <div className="min-h-screen bg-gray-100 pb-10">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-8 px-6 text-center">
        <h1 className="text-4xl font-bold">Destinations to Travel</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg">
          Discover breathtaking destinations around the world, perfect for your
          next adventure.
        </p>
        <button className="mt-6 px-6 py-3 bg-yellow-500 text-blue-900 font-semibold rounded-lg hover:bg-yellow-600 transition duration-200">
          Book Now
        </button>
      </header>

      {/* Main Destination Content */}
      <main className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden mt-10 mb-20">
        {destination.image && (
          <img
            src={destination.image}
            alt={destination.destination}
            className="w-full h-64 object-cover"
          />
        )}
        <div className="p-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            {destination.destination}
          </h2>
          <div
            className="prose max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: destination.about }}
          />
          <button className="mt-6 w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-200">
            Plan Your Trip
          </button>
        </div>
      </main>

      {/* Recommended Destinations Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Recommended Destinations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendedDestinations.map((dest) => (
            <div
              key={dest._id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className="relative">
                <img
                  src={dest.image}
                  alt={dest.destination}
                  className="w-full h-48 object-cover"
                />
                <h3 className="absolute bottom-0 left-0 right-0 text-white text-lg font-semibold p-4 bg-gradient-to-t from-gray-900 to-transparent">
                  {dest.destination}
                </h3>
              </div>
              <div className="p-4">
                <div
                  className="prose max-w-none text-gray-700 line-clamp-3"
                  dangerouslySetInnerHTML={{ __html: dest.about }}
                />
                <button className="mt-4 px-4 py-2 bg-indigo-500 text-white font-medium rounded-md hover:bg-indigo-600 transition duration-200">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-blue-50 py-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Why Choose Us
        </h2>
        <div className="flex flex-wrap justify-center gap-10 max-w-5xl mx-auto px-6">
          {[
            {
              icon: <FaStar className="text-yellow-500 text-3xl" />,
              title: "Top Destinations",
              description:
                "Handpicked locations and activities to make your trip unforgettable.",
            },
            {
              icon: <FaPlane className="text-blue-500 text-3xl" />,
              title: "Affordable Flights",
              description: "Get the best deals on flights worldwide.",
            },
            {
              icon: <FaMapMarkerAlt className="text-red-500 text-3xl" />,
              title: "Easy Booking",
              description: "Hassle-free booking with a few clicks.",
            },
            {
              icon: <FaRegSmile className="text-green-500 text-3xl" />,
              title: "24/7 Support",
              description: "We are here to help you at any time, day or night.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center w-64 hover:shadow-2xl transition-shadow duration-200"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          What Our Customers Say
        </h2>
        <div className="space-y-6">
          {[
            "Fantastic experience! Everything was perfectly organized.",
            "I loved every moment of my trip thanks to this travel service.",
            "Highly recommended for anyone looking for a hassle-free vacation.",
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 text-lg italic">"{testimonial}"</p>
              <p className="text-gray-500 text-sm mt-2">- Satisfied Customer</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CardDetails;
