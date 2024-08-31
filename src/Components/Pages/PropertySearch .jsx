import React, { useState } from 'react';
import { Search as SearchIcon, Room as RoomIcon, AddHomeWork as AddHomeWorkIcon } from '@mui/icons-material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import DescriptionIcon from '@mui/icons-material/Description';
import HomeIcon from '@mui/icons-material/Home';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';

const PropertySearch = () => {
  const [value, setValue] = useState(0);
  const [propertyType, setPropertyType] = useState('Full House');

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handlePropertyTypeChange = (type) => {
    setPropertyType(type);
  };

  // Function to render buttons based on selected tab
  const renderButtons = () => {
    switch (value) {
      case 0: // Buy
        return (
          <div className="flex space-x-2 bg-[#fef0da] p-2 rounded shadow">
            <button className="flex items-center text-gray-800 hover:text-blue-500">
              <HomeIcon className="w-4 h-4 mr-1" />
              Home Interiors
            </button>
            <button className="flex items-center text-gray-800 hover:text-blue-500">
              <LocalShippingIcon className="w-4 h-4 mr-1" />
              45-Days Guarantee
            </button>
          </div>
        );
      case 1: // Rent
      case 2: // Commercial
        return (
          <div className="flex space-x-2 bg-[#fef0da] p-2 rounded shadow">
            <button className="flex items-center text-gray-800 hover:text-blue-500">
              <DescriptionIcon className="w-4 h-4 mr-1" />
              Rental Agreement
            </button>
            <button className="flex items-center text-gray-800 hover:text-blue-500">
              <DeliveryDiningIcon className="w-4 h-4 mr-1" />
              Next Day Delivery
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container max-w-3xl mx-auto mt-4 px-2">
      {/* Header Content */}
      <h1 className="text-[32px] text-center font-[400] pt-[40px] text-[#787676] mb-[15px]">
        World's Largest NoBrokerage Property Site
      </h1>

      {/* Conditionally Rendered Buttons */}
      <div className="flex justify-center mb-4">
        {renderButtons()}
      </div>

      {/* Tabs for Property Options */}
      <div className="text-center mb-4">
        <div className="flex justify-center space-x-2">
          <button
            className={`px-4 py-2 rounded font-medium ${value === 0 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white'}`}
            onClick={() => handleChange(0)}
          >
            Buy
          </button>
          <button
            className={`px-4 py-2 rounded font-medium ${value === 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white'}`}
            onClick={() => handleChange(1)}
          >
            Rent
          </button>
          <button
            className={`px-4 py-2 rounded font-medium ${value === 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white'}`}
            onClick={() => handleChange(2)}
          >
            Commercial
          </button>
        </div>
      </div>

      {/* Search and Filter Options */}
      <div className="bg-white shadow rounded p-4 mb-4">
        <div className="flex space-x-2 mb-4">
          <select
            className="w-32 p-2 border border-gray-300 rounded text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            defaultValue="Bangalore"
          >
            <option value="Bangalore">Bangalore</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
          </select>
          <div className="flex-grow relative">
            <input
              type="text"
              placeholder="Search up to 3 localities"
              className="w-full p-2 pl-8 border border-gray-300 rounded text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <RoomIcon className="w-4 h-4 absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded flex items-center hover:bg-blue-700">
            <SearchIcon className="w-4 h-4 mr-1" />
            Search
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={() => handlePropertyTypeChange('Full House')}
            className={`px-3 py-1 rounded font-medium ${propertyType === 'Full House' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white'}`}
          >
            Full House
          </button>
          <button
            onClick={() => handlePropertyTypeChange('PG/Hostel')}
            className={`px-3 py-1 rounded font-medium ${propertyType === 'PG/Hostel' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white'}`}
          >
            PG/Hostel
          </button>
          <button
            onClick={() => handlePropertyTypeChange('Flatmates')}
            className={`px-3 py-1 rounded font-medium ${propertyType === 'Flatmates' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-blue-600 hover:text-white'}`}
          >
            Flatmates
          </button>
          {/* Conditional Rendering for Property Type */}
          {propertyType === 'PG/Hostel' ? (
            <div className="flex space-x-2">
              <select className="w-32 p-2 border border-gray-300 rounded text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none" defaultValue="">
                <option value="">Tenant Type</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Anyone">Anyone</option>
              </select>
              <select className="w-32 p-2 border border-gray-300 rounded text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none" defaultValue="">
                <option value="">Room Type</option>
                <option value="Single">Single Room</option>
                <option value="Double">Double Sharing</option>
                <option value="Triple">Triple Sharing</option>
                <option value="Four">Four Sharing</option>
              </select>
            </div>
          ) : propertyType === 'Flatmates' ? (
            <div className="flex space-x-2">
              <select className="w-32 p-2 border border-gray-300 rounded text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none" defaultValue="">
                <option value="">Tenant Type</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <select className="w-32 p-2 border border-gray-300 rounded text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none" defaultValue="">
                <option value="">Room Type</option>
                <option value="Single Room">Single Room</option>
                <option value="Shared Room">Shared Room</option>
              </select>
            </div>
          ) : (
            <div className="flex space-x-2">
              <select className="w-32 p-2 border border-gray-300 rounded text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none" defaultValue="">
                <option value="">BHK Type</option>
                <option value="1 BHK">1 BHK</option>
                <option value="2 BHK">2 BHK</option>
                <option value="3 BHK">3 BHK</option>
              </select>
              <select className="w-32 p-2 border border-gray-300 rounded text-gray-700 focus:ring-2 focus:ring-blue-500 focus:outline-none" defaultValue="">
                <option value="">Availability</option>
                <option value="Immediate">Immediate</option>
                <option value="Within a Month">Within a Month</option>
              </select>
            </div>
          )}
        </div>
      </div>
      <div class="flex flex-col items-center justify-center space-y-4 p-4">
        <div class="flex items-center space-x-4">
          <hr class="w-16 border-gray-300" />
          <span class="text-gray-600 text-lg font-medium">Are you a Property Owner?</span>
          <hr class="w-16 border-gray-300" />
        </div>
        <button class="px-6 py-2 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400">
          Post Free Property Ad
        </button>
      </div>

    </div>
  );
};

export default PropertySearch;
