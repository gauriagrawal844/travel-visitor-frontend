import React, { useEffect, useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaBuilding, FaMapMarkerAlt } from "react-icons/fa";
import { getContactDetails } from "../services/contact"; // Import API call to fetch contact details
import { toast } from "sonner";

const ContactDetails = () => {
  const [contactDetails, setContactDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch contact details on component mount
  useEffect(() => {
    const fetchContactDetails = async () => {
      try {
        const response = await getContactDetails();
        console.log(response.data);
        setContactDetails(response.data); // Assuming response.data is an array
      } catch (err) {
        toast.error(err.message || "Failed to fetch contact details.");
      } finally {
        setLoading(false);
      }
    };

    fetchContactDetails();
  }, []);

  // Handle loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-gray-500">Loading contact details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 pb-10">
      {/* Header Section */}
      <header
        className="relative bg-cover bg-center h-64 flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYTP3Bdjox1jJ5OIC6LvH8Fo440G3oYYLXO7wUPLWS8yMWTSMCLeMPjQQP6T5o5EPR_qE&usqp=CAU')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
            Contact Details
          </h1>
          <p className="text-lg sm:text-xl text-gray-200">
            We're here to help you with any questions or inquiries.
          </p>
        </div>
      </header>

      {/* Contact Details Section */}
      <main className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mt-10 p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Contact Information</h2>
        <div className="space-y-8">
          {contactDetails.map((contact, index) => (
            <div key={contact._id} className="bg-gray-50 p-6 rounded-lg shadow-sm">
              {/* Contact Name */}
              <h3 className="text-xl font-semibold text-gray-700 mb-4">{contact.name}</h3>

              {/* Email Address */}
              <div className="flex items-center space-x-4 mb-4">
                <FaEnvelope className="text-green-500 text-2xl" />
                <div>
                  <p className="text-gray-800 font-medium">Email Address</p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-blue-500 hover:underline"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              {/* Subject */}
              <div className="flex items-center space-x-4 mb-4">
                <FaBuilding className="text-indigo-500 text-2xl" />
                <div>
                  <p className="text-gray-800 font-medium">Subject</p>
                  <p className="text-gray-600">{contact.subject}</p>
                </div>
              </div>

              {/* Message */}
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-red-500 text-2xl" />
                <div>
                  <p className="text-gray-800 font-medium">Message</p>
                  <p className="text-gray-600">{contact.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ContactDetails;
