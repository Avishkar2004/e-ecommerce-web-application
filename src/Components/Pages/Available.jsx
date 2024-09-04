import React from 'react';
import { Link } from 'react-router-dom';

const Available = () => {
  return (
    <div className="bg-gray-100 py-6">
      {/* Header with categories */}
      <div className="bg-white shadow-md py-4">
        <div className="max-w-screen-xl mx-auto flex justify-between px-2 space-x-4">
          <Link href="#" className="text-sm font-medium hover:text-red-500 transition duration-300 ease-in-out">Properties & Flats for Sale</Link>
          <Link href="#" className="text-sm font-medium hover:text-red-500 transition duration-300 ease-in-out">Flats for Rent</Link>
          <Link href="#" className="text-sm font-medium hover:text-red-500 transition duration-300 ease-in-out">PG / Hostels</Link>
          <Link href="#" className="text-sm font-medium hover:text-red-500 transition duration-300 ease-in-out">Flatmates</Link>
          <Link href="#" className="text-sm font-medium hover:text-red-500 transition duration-300 ease-in-out">Miscellaneous</Link>
          <Link href="#" className="text-sm font-medium hover:text-red-500 transition duration-300 ease-in-out">Commercial</Link>
          <Link href="#" className="text-sm font-medium hover:text-red-500 transition duration-300 ease-in-out">New Projects & Plots</Link>
          <Link href="#" className="text-sm font-medium hover:text-red-500 transition duration-300 ease-in-out">Independent Houses & Villas</Link>
        </div>
      </div>

      {/* Content Grid */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2 mt-8">
        {/* Each column */}
        <div>
          <h3 className="text-base font-semibold mb-3">Flats for Sale in Bangalore</h3>
          <ul className="text-gray-700 space-y-1">
            <li><Link href="#" className="text-sm hover:text-red-500 transition duration-300 ease-in-out">Flats for Sale in Koramangala</Link></li>
            <li><Link href="#" className="text-sm hover:text-red-500 transition duration-300 ease-in-out">Flats for Sale in Marathahalli</Link></li>
            <li><Link href="#" className="text-sm hover:text-red-500 transition duration-300 ease-in-out">Flats for Sale in HSR Layout</Link></li>
            <li><Link href="#" className="text-sm hover:text-red-500 transition duration-300 ease-in-out">Flats for Sale in Whitefield</Link></li>
            {/* Add more listings as needed */}
          </ul>
        </div>

        <div>
          <h3 className="text-base font-semibold mb-3">Flats for Sale in Mumbai</h3>
          <ul className="text-gray-700 space-y-1">
            <li><Link href="#" className="text-sm hover:text-red-500 transition duration-300 ease-in-out">Flats for Sale in Andheri West</Link></li>
            <li><Link href="#" className="text-sm hover:text-red-500 transition duration-300 ease-in-out">Flats for Sale in Andheri East</Link></li>
            <li><Link href="#" className="text-sm hover:text-red-500 transition duration-300 ease-in-out">Flats for Sale in Malad West</Link></li>
            <li><Link href="#" className="text-sm hover:text-red-500 transition duration-300 ease-in-out">Flats for Sale in Navi Mumbai</Link></li>
            {/* Add more listings as needed */}
          </ul>
        </div>

        <div>
          <h3 className="text-base font-semibold mb-3">Flats for Sale in Chennai</h3>
          <ul className="text-gray-700 space-y-1">
            <li><Link href="#" className="text-sm hover:text-red-500 transition duration-300 ease-in-out">Flats for Sale in Velachery</Link></li>
            <li><Link href="#" className="text-sm hover:text-red-500 transition duration-300 ease-in-out">Flats for Sale in Thiruvanmiyur</Link></li>
            <li><Link href="#" className="text-sm hover:text-red-500 transition duration-300 ease-in-out">Flats for Sale in Adyar</Link></li>
            <li><Link href="#" className="text-sm hover:text-red-500 transition duration-300 ease-in-out">Flats for Sale in T Nagar</Link></li>
            {/* Add more listings as needed */}
          </ul>
        </div>

        <div>
          <h3 className="text-base font-semibold mb-3">Flats for Sale in Pune</h3>
          <ul className="text-gray-700 space-y-1">
            <li><Link href="#" className="text-sm hover:text-red-500 transition duration-300 ease-in-out">Flats for Sale in Wakad</Link></li>
            <li><Link href="#" className="text-sm hover:text-red-500 transition duration-300 ease-in-out">Flats for Sale in Kharadi</Link></li>
            <li><Link href="#" className="text-sm hover:text-red-500 transition duration-300 ease-in-out">Flats for Sale in Baner</Link></li>
            <li><Link href="#" className="text-sm hover:text-red-500 transition duration-300 ease-in-out">Flats for Sale in Hadapsar</Link></li>
            {/* Add more listings as needed */}
          </ul>
        </div>

        {/* Add more columns as needed */}
      </div>
    </div>
  );
};

export default Available;
