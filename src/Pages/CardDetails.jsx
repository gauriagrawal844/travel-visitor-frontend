import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getDestination, getDestinations } from "../services/destinationApi";
import { FaStar, FaPlane, FaMapMarkerAlt, FaRegSmile } from "react-icons/fa";
import CustomizedTrip from "../components/CustomizedTrip";

const CardDetails = () => {
  const { id } = useParams(); // Get the current ID from the route params
  const [destination, setDestination] = useState({});
  const [recommendedDestinations, setRecommendedDestinations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the current destination and recommended destinations in one effect
    const fetchDestinationData = async () => {
      try {
        const destinationResponse = await getDestination(`?_id=${id}`);
        setDestination(destinationResponse.data);

        const allDestinations = await getDestinations();
        const otherDestinations = allDestinations.data.filter((dest) => dest._id !== id);
        setRecommendedDestinations(otherDestinations);
      } catch (error) {
        console.error("Failed to fetch destination data", error);
      }
    };

    fetchDestinationData();
  }, [id]); // Re-run the effect whenever `id` changes

  const handleNavigate = (destinationId) => {
    navigate(`/details/${destinationId}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-10">
      {/* Header Section */}
      <header
        className="relative bg-cover bg-center h-96 flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
            Destinations to Travel
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl sm:text-2xl text-gray-200">
            Discover breathtaking destinations around the world, perfect for your
            next adventure.
          </p>
          <p className="mt-8 text-lg sm:text-xl text-yellow-300 font-semibold hover:text-yellow-400 transition duration-300">
            Start planning your journey today
          </p>
        </div>
      </header>

      {/* Main Destination Content */}
      <main className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-10 mb-20">
  <div className="relative">
    {destination.image && (
      <img
        src={destination.image}
        alt={destination.destination}
        className="aspect-auto w-full object-cover"
      />
    )}
    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-75"></div>
    <div className="absolute bottom-4 left-4 text-white space-y-2">
    <div class="flex justify-between w-full">
      <h2 className="text-3xl font-bold">{destination.destination}</h2>
      <h2 className="text-3xl font-bold relative left-[32rem]">PRICE : ₹ {destination.price}</h2>
      </div>
      <p className="text-sm opacity-90">
        {destination.tagline || "A beautiful destination awaits you!"}
      </p>
    </div>
  </div>
  <div className="p-8">
    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
      About the Destination
    </h3>
    <div
      className="prose max-w-none text-gray-700 ql-editor"
      dangerouslySetInnerHTML={{ __html: destination.about }}
    />
    <div className="mt-6 flex justify-center">
      <button
        onClick={() => navigate("/contact")}
        className="py-3 px-6 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300 shadow-lg"
      >
        Plan Your Trip
      </button>
    </div>
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
                <button
                  onClick={() => handleNavigate(dest._id)} // Navigate to the new destination
                  className="mt-4 px-4 py-2 bg-indigo-500 text-white font-medium rounded-md hover:bg-indigo-600 transition duration-200"
                >
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
              description: "Handpicked locations and activities to make your trip unforgettable.",
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
      
      <CustomizedTrip />
    </div>
  );
};

export default CardDetails;
