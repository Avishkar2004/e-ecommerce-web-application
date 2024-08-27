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
          <div className="flex space-x-4 bg-yellow-100 p-4 rounded-lg">
            <button className="flex items-center text-gray-800">
              <HomeIcon className="w-5 h-5 mr-2" />
              Home Interiors
            </button>
            <button className="flex items-center text-gray-800">
              <LocalShippingIcon className="w-5 h-5 mr-2" />
              45-Days Guarantee
            </button>
          </div>
        );
      case 1: // Rent
      case 2: // Commercial
        return (
          <div className="flex space-x-4 bg-yellow-100 p-4 rounded-lg">
            <button className="flex items-center text-gray-800">
              <DescriptionIcon className="w-5 h-5 mr-2" />
              Rental Agreement
            </button>
            <button className="flex items-center text-gray-800">
              <DeliveryDiningIcon className="w-5 h-5 mr-2" />
              Next Day Delivery
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container max-w-7xl mx-auto mt-5">
      {/* Header Content */}
      <h1 className="text-2xl font-bold text-center mb-3">
        World's Largest NoBrokerage Property Site
      </h1>

      {/* Conditionally Rendered Buttons */}
      <div className="flex justify-center mb-5">
        {renderButtons()}
      </div>

      {/* Tabs for Property Options */}
      <div className="text-center mb-5">
        <div className="flex justify-center space-x-4">
          <button
            className={`px-4 py-2 rounded-lg ${value === 0 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => handleChange(0)}
          >
            Buy
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${value === 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => handleChange(1)}
          >
            Rent
          </button>
          <button
            className={`px-4 py-2 rounded-lg ${value === 2 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => handleChange(2)}
          >
            Commercial
          </button>
        </div>
      </div>

      {/* Search and Filter Options */}
      <div className="bg-white shadow-md rounded-lg p-5">
        <div className="flex space-x-4 mb-4">
          <select
            className="w-40 p-2 border border-gray-300 rounded-lg"
            defaultValue="Bangalore"
          >
            <option value="Bangalore">Bangalore</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
          </select>
          <div className="flex-grow relative">
            <input
              type="text"
              placeholder="Search up to 3 localities or landmarks"
              className="w-full p-2 pl-10 border border-gray-300 rounded-lg"
            />
            <RoomIcon className="w-5 h-5 absolute top-1/2 left-3 transform -translate-y-1/2" />
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center">
            <SearchIcon className="w-5 h-5 mr-2" />
            Search
          </button>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={() => handlePropertyTypeChange('Full House')}
            className={`px-4 py-2 rounded-lg ${propertyType === 'Full House' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Full House
          </button>
          <button
            onClick={() => handlePropertyTypeChange('PG/Hostel')}
            className={`px-4 py-2 rounded-lg ${propertyType === 'PG/Hostel' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            PG/Hostel
          </button>
          <button
            onClick={() => handlePropertyTypeChange('Flatmates')}
            className={`px-4 py-2 rounded-lg ${propertyType === 'Flatmates' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            Flatmates
          </button>
        </div>

        {/* Conditional Rendering for Property Type */}
        {propertyType === 'PG/Hostel' ? (
          <div className="flex space-x-4 mb-4">
            <select className="w-40 p-2 border border-gray-300 rounded-lg" defaultValue="">
              <option value="">Tenant Type</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Anyone">Anyone</option>
            </select>
            <select className="w-40 p-2 border border-gray-300 rounded-lg" defaultValue="">
              <option value="">Room Type</option>
              <option value="Single">Single Room</option>
              <option value="Double">Double Sharing</option>
              <option value="Triple">Triple Sharing</option>
              <option value="Four">Four Sharing</option>
            </select>
          </div>
        ) : propertyType === 'Flatmates' ? (
          <div className="flex space-x-4 mb-4">
            <select className="w-40 p-2 border border-gray-300 rounded-lg" defaultValue="">
              <option value="">Tenant Type</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            <select className="w-40 p-2 border border-gray-300 rounded-lg" defaultValue="">
              <option value="">Room Type</option>
              <option value="Single Room">Single Room</option>
              <option value="Shared Room">Shared Room</option>
            </select>
          </div>
        ) : (
          <div className="flex space-x-4 mb-4">
            <select className="w-40 p-2 border border-gray-300 rounded-lg" defaultValue="">
              <option value="">BHK Type</option>
              <option value="1 BHK">1 BHK</option>
              <option value="2 BHK">2 BHK</option>
              <option value="3 BHK">3 BHK</option>
            </select>
            <select className="w-40 p-2 border border-gray-300 rounded-lg" defaultValue="">
              <option value="">Availability</option>
              <option value="Immediate">Immediate</option>
              <option value="Within a Month">Within a Month</option>
            </select>
          </div>
        )}
      </div>

      {/* Are You a Property Owner? Section */}
      <div className="text-center mt-5">
        <h2 className="text-xl font-semibold mb-2">
          Are you a Property Owner?
        </h2>
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg flex items-center mx-auto">
          <AddHomeWorkIcon className="w-5 h-5 mr-2" />
          Post Free Property
        </button>
      </div>
    </div>
  );
};

export default PropertySearch;
