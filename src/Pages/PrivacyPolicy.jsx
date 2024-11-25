import React, { useState } from 'react';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const sections = [
    {
      title: "1. Introduction",
      content: "Welcome to TravelMate. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services."
    },
    {
      title: "2. Information We Collect",
      content: (
        <ul className="list-disc pl-5">
          <li>Personal information (e.g., name, email address, phone number)</li>
          <li>Payment information</li>
          <li>Travel preferences and history</li>
          <li>Device and usage information</li>
        </ul>
      )
    },
    {
      title: "3. How We Use Your Information",
      content: (
        <>
          <p>We use your information to:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Provide and improve our services</li>
            <li>Process transactions</li>
            <li>Personalize your experience</li>
            <li>Communicate with you</li>
            <li>Ensure the security of our platform</li>
          </ul>
        </>
      )
    },
    {
      title: "4. Information Sharing and Disclosure",
      content: (
        <>
          <p>We may share your information with:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Travel service providers to fulfill your bookings</li>
            <li>Third-party service providers who assist in our operations</li>
            <li>Legal authorities when required by law</li>
          </ul>
        </>
      )
    },
    {
      title: "5. Data Security",
      content: "We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction, or damage."
    },
    {
      title: "6. Your Rights",
      content: (
        <>
          <p>You have the right to:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Access and receive a copy of your personal data</li>
            <li>Rectify inaccurate personal data</li>
            <li>Request erasure of your personal data</li>
            <li>Object to the processing of your personal data</li>
            <li>Request restriction of processing your personal data</li>
          </ul>
        </>
      )
    },
    {
      title: "7. Changes to This Privacy Policy",
      content: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the \"Last updated\" date."
    },
    {
      title: "8. Contact Us",
      content: (
        <>
          <p>If you have any questions about this Privacy Policy, please contact us at:</p>
          <p className="mt-2">
            Email: privacy@travelmate.com<br />
            Address: 123 TravelMate Lane, Adventure City, World 56789
          </p>
        </>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-blue-900 text-center mb-8">Privacy Policy</h1>
        
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
          {sections.map((section, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0">
              <button
                className="w-full px-6 py-4 text-left focus:outline-none"
                onClick={() => toggleSection(index)}
              >
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
                  <svg
                    className={`w-5 h-5 text-blue-500 transform transition-transform duration-200 ${activeSection === index ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              {activeSection === index && (
                <div className="px-6 py-4 bg-gray-50">
  <div className="text-lg text-gray-700 leading-relaxed">
    {section.content}
  </div>
</div>

              )}
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-sm text-gray-600">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;