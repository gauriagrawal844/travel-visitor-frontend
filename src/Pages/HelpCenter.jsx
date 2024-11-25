import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Custom SVG components to replace Heroicons
const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
  </svg>
);

const popularTopics = [
  "Booking a Trip",
  "Cancellation Policy",
  "Virtual Tours",
  "Payment Methods",
  "Travel Insurance",
];

const helpCategories = [
  {
    title: "Getting Started",
    articles: [
      "Creating an Account",
      "Personalizing Your Profile",
      "Understanding TravelMate's AI",
      "Navigating the Platform",
    ],
  },
  {
    title: "Planning Your Trip",
    articles: [
      "Using the Trip Planner",
      "Exploring Destinations",
      "Reading and Writing Reviews",
      "Saving Favorite Places",
    ],
  },
  {
    title: "Bookings and Reservations",
    articles: [
      "Making a Reservation",
      "Modifying Your Booking",
      "Cancellation Process",
      "Refund Policy",
    ],
  },
  {
    title: "Virtual Experiences",
    articles: [
      "Accessing Virtual Tours",
      "VR Compatibility",
      "Interacting in Virtual Spaces",
      "Reporting Technical Issues",
    ],
  },
];

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-5xl font-extrabold text-blue-900 text-center mb-8">How can we help you?</h1>
        
        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              className="w-full p-6 pl-12 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Search for help..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              <SearchIcon />
            </div>
          </div>
        </div>

        {/* Popular Topics */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">Popular Topics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {popularTopics.map((topic, index) => (
              <a
                key={index}
                href="#"
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-between"
              >
                <span className="text-gray-800">{topic}</span>
                <div className="text-blue-500">
                  <ChevronRightIcon />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Help Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {helpCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.articles.map((article, articleIndex) => (
                  <li key={articleIndex}>
                    <Link
                      to="/sigup"
                      className="text-blue-600 hover:text-blue-800 hover:underline flex items-center"
                    >
                      <div className="h-4 w-4 mr-2 flex-shrink-0 text-blue-500">
                        <ChevronRightIcon />
                      </div>
                      <span>{article}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Can't find what you're looking for?</p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;