import React from 'react';
import CustomizedTrip from '../components/CustomizedTrip';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Page Title */}
        <h1 className="text-5xl font-extrabold text-center text-blue-800 mb-6">Travelmate</h1>
        <p className="text-center text-xl text-gray-900 mb-12 max-w-3xl mx-auto">
          A travel, tourism, and education platform that connects users with the best virtual and physical travel experience of Africa across the world.
        </p>

        {/* Mission and Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white shadow-lg rounded-xl p-8 border border-blue-100 transform transition duration-500 hover:scale-105">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Mission</h2>
            <p className="text-gray-700 text-lg">
              Empowering today's travelers on a journey to discover African tourism attractions, cultures, and sustainable practices, as we pave the way for responsible and enriching adventures.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-8 border border-blue-100 transform transition duration-500 hover:scale-105">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Vision</h2>
            <p className="text-gray-700 text-lg">
              Envisioning a global community of informed travelers, we strive to revolutionize travel, tourism, and education by fostering cultural exchange, environmental stewardship, and lifelong learning. We shape future explorations that are ethical, enlightening, and empowering for all.
            </p>
          </div>
        </div>

        {/* Platform Description */}
        <div className="bg-white p-8 mb-16">
        <p className="text-center text-xl text-gray-900 mb-12 max-w-3xl mx-auto">
        A web3 platform dedicated to transforming the way people experience tourism, education, and travel.
        TravelMate seamlessly connects individuals with diverse cultures, unlocks immersive education experiences, and embarks on transformative journeys in the world of tourism, travel, and education.
        </p>
        </div>

        {/* Core Values Section */}
        <section className="bg-black-50 py-12 px-8 ">
          <h2 className="text-5xl font-bold text-blue-800 text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Transparency", description: "We believe in providing transparent information about destinations, experience, and educational opportunities, empowering users to make informed decisions." },
              { title: "Community", description: "Fostering a community of travelers and learners who can share their experience, knowledge, and insights, creating a supportive and collaborative environment." },
              { title: "Innovation", description: "Embracing the potential of web3 technology to revolutionize the way we explore the world and learn, by integrating blockchain, smart contracts, and decentralized applications." },
              { title: "Sustainability", description: "Promoting responsible travel practices and eco-friendly initiatives, while also encouraging sustainable approaches to education and personal growth." },
              { title: "Diversity and Inclusion", description: "Celebrating and respecting diverse cultures, backgrounds, and practices both in travel experiences we offer and the educational content we provide." },
              { title: "Personalization", description: "Tailoring travel recommendations and educational resources to individual preferences and learning styles, enhancing the overall user experience." },
              { title: "Empowerment", description: "Empowering travelers to take control of their journey and individuals to take charge of their learning paths, promoting self-discovery and growth." },
              { title: "Quality", description: "Ensuring the highest quality in travel services and education contents, partnering with reputable institutions and experts to deliver exceptional experiences." },
              { title: "Security", description: "Prioritizing the security and privacy of user data, transactions, and personal information through the use of cutting-edge web3 security measures." },
              { title: "Global Citizenship", description: "Encouraging a sense of global citizenship among users, fostering cross-cultural understanding and promoting responsible engagement with different communities." }
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md transform transition duration-500 hover:scale-105">
                <h3 className="text-2xl font-semibold text-blue-600 mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      <CustomizedTrip/>

    </div>
  );
};

export default AboutPage;