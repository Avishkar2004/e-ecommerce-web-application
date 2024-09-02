import React from 'react';
import BuildingPhoto from "../assets/photos/1.png";

const Business = () => {
  return (
    <div className='mt-4 pt-5 bg-gray-50'>
      {/* Title with Horizontal Borders and Circles */}
      <div className="flex items-center justify-center mb-6">
        {/* Left Line */}
        <div className="flex-grow border-t border-gray-300 relative">
          <div className="absolute right-0 top-[-6px] bg-white rounded-full w-4 h-4 border border-pink-300"></div>
        </div>

        {/* Title */}
        <h2 className="text-2xl text-[#787676] font-semibold mx-4">
          NoBroker Business Assist Plan For Builders
        </h2>

        {/* Right Line */}
        <div className="flex-grow border-t border-gray-300 relative">
          <div className="absolute left-0 top-[-6px] bg-white rounded-full w-4 h-4 border border-pink-300"></div>
        </div>
      </div>

      {/* Image and Text Section */}
      <div className="flex flex-col md:flex-row items-center justify-center mx-auto py-10 px-4 max-w-screen-lg">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img
            src={BuildingPhoto}
            alt="Building illustration"
            className="max-w-full h-auto"
          />
        </div>

        {/* Text and Button */}
        <div className="w-full md:w-1/2 md:pl-10 text-center md:text-left">
          <p className="text-gray-600 text-lg mb-4">
            Get in touch with us to Sell or Rent Your Projects
          </p>
          <button className="bg-pink-500 text-white py-2 px-6 rounded-md mb-4 hover:bg-pink-600 transition duration-200">
            Enquire Now
          </button>
          <p className="text-gray-600 text-sm">
            For Builder Enquiries: +91 91080 50400
          </p>
        </div>
      </div>

      {/* Second Title with Horizontal Borders and Circles */}
      <div className="flex items-center justify-center mt-8 mb-6">
        {/* Left Line */}
        <div className="flex-grow border-t border-gray-300 relative">
          <div className="absolute right-0 top-[-6px] bg-white rounded-full w-4 h-4 border border-pink-300"></div>
        </div>

        {/* Title */}
        <h2 className="text-2xl text-[#787676] font-semibold mx-4">
          We Make A Difference
        </h2>

        {/* Right Line */}
        <div className="flex-grow border-t border-gray-300 relative">
          <div className="absolute left-0 top-[-6px] bg-white rounded-full w-4 h-4 border border-pink-300"></div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="flex flex-col md:flex-row items-center justify-around mx-auto py-8 px-4 max-w-screen-lg">
        {/* Stat 1 */}
        <div className="text-center mb-8 md:mb-0">
          <div className="flex items-center justify-center border-2 border-pink-400 rounded-full w-32 h-32 mx-auto">
            <span className="text-pink-400 text-xl font-semibold">
              ₹130 cr+
            </span>
          </div>
          <p className="text-gray-600 text-sm mt-4">Brokerage saved monthly</p>
        </div>

        {/* Stat 2 */}
        <div className="text-center mb-8 md:mb-0">
          <div className="flex items-center justify-center border-2 border-pink-400 rounded-full w-32 h-32 mx-auto">
            <span className="text-pink-400 text-xl font-semibold">
              30 Lakh+
            </span>
          </div>
          <p className="text-gray-600 text-sm mt-4">Customers Connected Monthly</p>
        </div>

        {/* Stat 3 */}
        <div className="text-center">
          <div className="flex items-center justify-center border-2 border-pink-400 rounded-full w-32 h-32 mx-auto">
            <span className="text-pink-400 text-xl font-semibold">
              2 Lakh+
            </span>
          </div>
          <p className="text-gray-600 text-sm mt-4">New Listings Monthly</p>
        </div>
      </div>
    </div>
  );
};

export default Business;
