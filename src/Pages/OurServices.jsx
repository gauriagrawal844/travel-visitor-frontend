import React from 'react';
import CustomizedTrip from '../components/CustomizedTrip';

const servicesData = [
  { title: 'Smart Contracts', description: 'Automates processes like booking, payment, and check-in through self-executing contracts on the blockchain.' },
  { title: 'Decentralized Identity', description: 'Users control their personal data using decentralized identity solutions, enhancing privacy and security.' },
  { title: 'Tokenization', description: 'Hotels can create tokens on the blockchain for payments or loyalty programs, representing ownership or access rights.' },
  { title: 'Transparency', description: 'Blockchain\'s transparent and immutable nature allows customers to verify details about the hotel.' },
  { title: 'Reviews and Reputation', description: 'Decentralized review systems ensure that reviews are authentic and not manipulated.' },
  { title: 'Interoperability', description: 'Enables seamless integration between different services, like hotel and flight bookings.' },
  { title: 'P2P Transactions', description: 'Guests can directly pay hosts, reducing fees and transaction times.' },
  { title: 'Supply Chain Management', description: 'Hotels can use blockchain to verify the authenticity of supplies, ensuring quality for guests.' },
];

const ServiceCard = ({ title, description }) => (
  <div className="bg-white rounded-lg p-6 shadow-md transform transition duration-500 hover:scale-105">
    <h3 className="text-2xl font-semibold text-blue-600 mb-3">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </div>
);

const OurService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <header className="bg-blue-600 p-4 rounded-lg text-center text-white mb-12">
          <h2 className="text-3xl font-bold">Our Services</h2>
        </header>

        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white shadow-lg rounded-xl p-8 border border-blue-100 transform transition duration-500 hover:scale-105">
              <h2 className="text-3xl font-bold text-blue-600 mb-4">VR Tours</h2>
              <img src="https://static.thenounproject.com/png/337515-200.png" alt="VR Tours" className="w-24 h-24 mx-auto mb-4" />
              <p className="text-gray-700 text-lg">
                Immerse users in the wonders of virtual reality (VR) tours by stepping into a whole new dimension of exploration as we bring destinations to life right in front of user eyes. With our VR tours, individuals can travel to iconic landmarks, bustling cities, serene landscapes, and cultural hotspots from the comfort of their own spaces.
              </p>
            </div>
            <div className="bg-white shadow-lg rounded-xl p-8 border border-blue-100 transform transition duration-500 hover:scale-105">
              <h2 className="text-3xl font-bold text-blue-600 mb-4">Africa's Cultural Education</h2>
              <img src="https://thumbs.dreamstime.com/b/teacher-teaching-presentation-icon-vector-design-template-white-background-191503749.jpg" alt="Cultural Education" className="w-24 h-24 mx-auto mb-4" />
              <p className="text-gray-700 text-lg">
                Incorporating Africa's rich cultures by creating immersive experiences that showcase diverse traditions, languages, arts, and history. By utilizing interactive elements like 3D models, virtual tours, and multimedia to engage users and educate them about the continent's heritage. Collaborate with local experts to ensure accurate representation and respect for cultural nuances.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex flex-col md:flex-row items-center mb-8">
            <img src="https://thumbs.dreamstime.com/z/office-building-icon-simple-illustration-128918760.jpg?ct=jpeg" alt="Hotel Icon" className="w-16 h-16 mr-4" />
            <div>
              <h2 className="text-3xl font-bold text-blue-800 mb-2">Website Integration in Hotel Services</h2>
              <p className="text-xl text-gray-600">
                Web3 refers to the next evolution of internet, where decentralized technologies like blockchain enable more secure, transparent and user-centric applications. When it comes to Hotel services, we wish to integrate in areas of:
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard key={index} title={service.title} description={service.description} />
            ))}
          </div>
        </section>

            <CustomizedTrip />
            
      </div>
    </div>
  );
};

export default OurService;