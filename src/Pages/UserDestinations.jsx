import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getDestinations } from '../services/destinationApi';
import { useSelector } from 'react-redux';
import CustomizedTrip from '../components/CustomizedTrip';

const carouselItems = [
  {
    src: "https://images.unsplash.com/photo-1727994193255-31518875b3ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVhY2hlc3xlbnwwfHwwfHx8MA%3D%3D",
    title: "Explore the Beaches",
    description: "Discover the serenity of oceanfront destinations.",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1676218968741-8179dd7e533f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW91bnRhaW5zfGVufDB8fDB8fHww&auto=format&fit=crop&w=1170",
    title: "Conquer the Mountains",
    description: "Adventure awaits in stunning mountain landscapes.",
  },
  {
    src: "https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=600&h=400",
    title: "Discover the Cities",
    description: "Experience the vibrant life of iconic cities.",
  },
];

const UserDestinations = () => {
  const navigate = useNavigate();
  const [destinations, setDestinations] = useState([]);
  const { user } = useSelector((state) => state.user);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleClick = (id) => {
    navigate(`/Details/${id}`);
  };

  useEffect(() => {
    getDestinations().then((response) => {
      setDestinations(response.data);
    });

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + carouselItems.length) % carouselItems.length);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <img
        src="https://travelmatevr.com/wp-content/uploads/2023/11/Screenshot-2023-11-03-at-13.20.20-1.png"
        alt="Welcome to TravelMate"
        className="w-full max-h-[450px] object-cover"
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Welcome to TravelMate</h2>
          <p className="text-lg text-gray-600">
            Your gateway to breathtaking destinations around the world! From serene beaches and rugged mountains to vibrant
            cityscapes, we're here to inspire your next great adventure. Dive into a world of travel possibilities and start
            planning your unforgettable journey today!
          </p>
        </div>

        <div className="relative overflow-hidden rounded-lg shadow-lg h-[400px] md:h-[500px]">
          {carouselItems.map((item, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
                <h3 className="text-3xl md:text-4xl font-bold mb-2 text-center">{item.title}</h3>
                <p className="text-lg md:text-xl text-center max-w-lg">{item.description}</p>
              </div>
            </div>
          ))}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 rounded-full p-2 focus:outline-none"
          >
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
  <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
    Explore Destinations
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {destinations.map((item) => (
      <div
        key={item._id}
        onClick={() => handleClick(item._id)}
        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105 hover:shadow-lg"
      >
        {/* Image Section */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={item.image}
            alt={item.destination}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>
        </div>

        {/* Content Section */}
        <div className="p-5">
          <h5 className="text-xl font-semibold text-blue-600 mb-3 truncate">
            {item.destination}
          </h5>
          <p
            className="text-gray-600 text-sm leading-relaxed line-clamp-3"
            dangerouslySetInnerHTML={{
              __html:item?.about?.slice(0,120),
            }}
            
          />
        </div>
      </div>
    ))}
  </div>
</div>
      <div className="mb-8">
        <CustomizedTrip />
      </div>

    </div>
  );
};

export default UserDestinations;
