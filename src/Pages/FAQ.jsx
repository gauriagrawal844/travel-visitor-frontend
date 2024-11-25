import React, { useState } from 'react';

const FAQItem = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700 last:border-b-0">
      <button
        className="flex items-center justify-between w-full p-5 font-medium text-left text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
        onClick={toggleOpen}
      >
        <span className="flex items-center text-lg">
          <svg className="w-6 h-6 mr-3 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd"></path>
          </svg>
          {question}
        </span>
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <div className="p-5 bg-gray-50 dark:bg-gray-800">
          <p className="text-gray-700 dark:text-gray-300">{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openItems, setOpenItems] = useState([]);

  const faqData = [
    {
      question: "What is TravelMate?",
      answer: "TravelMate is an innovative travel planning platform that helps you discover, plan, and book your perfect trip. We offer personalized recommendations, virtual tours, and seamless booking experiences to make your travel dreams a reality."
    },
    {
      question: "How does TravelMate work?",
      answer: "TravelMate uses advanced AI algorithms to analyze your preferences, budget, and travel style. We then provide tailored suggestions for destinations, accommodations, and activities. You can explore these options through our immersive virtual tours before making your final decisions and bookings."
    },
    {
      question: "Is TravelMate available worldwide?",
      answer: "Yes, TravelMate is available globally. We partner with travel providers and destinations worldwide to offer a comprehensive selection of travel options for our users, no matter where they're located or where they want to go."
    },
    {
      question: "How accurate are the virtual tours?",
      answer: "Our virtual tours are designed to provide a highly accurate representation of destinations and accommodations. We use a combination of 360-degree photography, 3D modeling, and real-time updates to ensure that what you see in the virtual tour closely matches the real-world experience."
    },
    {
      question: "Can I change or cancel my booking through TravelMate?",
      answer: "Yes, you can manage your bookings directly through the TravelMate platform. Depending on the specific terms of your booking, you may be able to change dates, modify services, or cancel reservations. We provide clear information about change and cancellation policies for each booking."
    },
    {
      question: "How does TravelMate ensure the safety of my personal and payment information?",
      answer: "At TravelMate, we take your privacy and security seriously. We use industry-standard encryption protocols to protect your personal and payment information. Our platform is regularly audited for security compliance, and we never share your sensitive data with third parties without your explicit consent."
    },
    {
      question: "Does TravelMate offer customer support?",
      answer: "We provide 24/7 customer support through various channels including live chat, email, and phone. Our dedicated support team is always ready to assist you with any questions, concerns, or issues you may have before, during, or after your trip."
    }
  ];

  const toggleItem = (index) => {
    setOpenItems(prevOpenItems =>
      prevOpenItems.includes(index)
        ? prevOpenItems.filter(item => item !== index)
        : [...prevOpenItems, index]
    );
  };

  return (
    <div className="max-w-4xl mx-auto mt-16 mb-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-5xl font-extrabold text-center mb-12 text-blue-900  dark:text-white">Frequently Asked Questions</h2>
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden">
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openItems.includes(index)}
            toggleOpen={() => toggleItem(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;