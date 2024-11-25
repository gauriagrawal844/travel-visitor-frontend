import React, { useState } from 'react';

const TermsAndConditions = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "Welcome to TravelMate. By accessing or using our website, mobile application, or services, you agree to be bound by these Terms and Conditions. If you disagree with any part of the terms, you may not use our services."
    },
    {
      title: "2. Use of Services",
      content: (
        <>
          <p>When using TravelMate services:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>You must be at least 18 years old to use our services.</li>
            <li>You are responsible for maintaining the confidentiality of your account and password.</li>
            <li>You agree to provide accurate and complete information when creating an account.</li>
            <li>You may not use our services for any illegal or unauthorized purpose.</li>
          </ul>
        </>
      )
    },
    {
      title: "3. Booking and Cancellations",
      content: (
        <>
          <p>When making a booking through TravelMate:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>You agree to abide by the terms and conditions of the travel service providers.</li>
            <li>Cancellation policies vary by provider and are clearly stated at the time of booking.</li>
            <li>TravelMate reserves the right to cancel bookings in cases of suspected fraud or misuse.</li>
          </ul>
        </>
      )
    },
    {
      title: "4. Intellectual Property",
      content: "All content on the TravelMate platform, including text, graphics, logos, and software, is the property of TravelMate or its content suppliers and is protected by international copyright laws."
    },
    {
      title: "5. Limitation of Liability",
      content: "TravelMate is not liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of our services or any travel experiences booked through our platform."
    },
    {
      title: "6. User-Generated Content",
      content: (
        <>
          <p>By submitting content to TravelMate (such as reviews or photos):</p>
          <ul className="list-disc pl-5 mt-2">
            <li>You grant TravelMate a non-exclusive, worldwide, royalty-free license to use, reproduce, and display the content.</li>
            <li>You confirm that you have the right to share this content and that it doesn't violate any third-party rights.</li>
          </ul>
        </>
      )
    },
    {
      title: "7. Modifications to Terms",
      content: "TravelMate reserves the right to modify these Terms and Conditions at any time. We will notify users of any significant changes via email or through our platform."
    },
    {
      title: "8. Governing Law",
      content: "These Terms and Conditions are governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law principles."
    },
    {
      title: "9. Contact Information",
      content: (
        <>
          <p>If you have any questions about these Terms and Conditions, please contact us at:</p>
          <p className="mt-2">
            Email: legal@travelmate.com<br />
            Address: 123 TravelMate Lane, Adventure City, World 56789
          </p>
        </>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-blue-900 text-center mb-8">Terms and Conditions</h1>
        
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

export default TermsAndConditions;