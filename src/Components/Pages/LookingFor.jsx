import React from 'react';
import { Link } from 'react-router-dom';
import { Room, Person, Apartment, Home, ApartmentOutlined, House } from '@mui/icons-material';

const LookingFor = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-4">
            <div className="p-6 bg-white text-center rounded-lg shadow-lg max-w-4xl w-full">
                <h1 className="text-3xl font-extrabold mb-6 text-gray-800">Focus on what's important and spend less on rent.</h1>
                <p className="text-xl mb-8 text-gray-600">I'm Looking For:</p>
                <div className="flex flex-wrap justify-center gap-6">
                    <Link to="/search/room">
                        <button className="flex flex-col items-center bg-white border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out w-40 h-40 flex items-center justify-center">
                            <Room fontSize="large" className="text-blue-500 mb-2" />
                            <span className="text-lg font-semibold text-gray-800">Room</span>
                        </button>
                    </Link>
                    <Link to="/search/roommate">
                        <button className="flex flex-col items-center bg-white border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out w-40 h-40 flex items-center justify-center">
                            <Person fontSize="large" className="text-blue-500 mb-2" />
                            <span className="text-lg font-semibold text-gray-800">Roommate</span>
                        </button>
                    </Link>
                    <Link to="/search/apartment">
                        <button className="flex flex-col items-center bg-white border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out w-40 h-40 flex items-center justify-center">
                            <Apartment fontSize="large" className="text-blue-500 mb-2" />
                            <span className="text-lg font-semibold text-gray-800">Apartment</span>
                        </button>
                    </Link>
                    <Link to="/search/flat">
                        <button className="flex flex-col items-center bg-white border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out w-40 h-40 flex items-center justify-center">
                            <ApartmentOutlined fontSize="large" className="text-blue-500 mb-2" />
                            <span className="text-lg font-semibold text-gray-800">Flat</span>
                        </button>
                    </Link>
                    <Link to="/search/flatmate">
                        <button className="flex flex-col items-center bg-white border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out w-40 h-40 flex items-center justify-center">
                            <Person fontSize="large" className="text-blue-500 mb-2" />
                            <span className="text-lg font-semibold text-gray-800">Flatmate</span>
                        </button>
                    </Link>
                    <Link to="/search/sublet">
                        <button className="flex flex-col items-center bg-white border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out w-40 h-40 flex items-center justify-center">
                            <Home fontSize="large" className="text-blue-500 mb-2" />
                            <span className="text-lg font-semibold text-gray-800">Sublet</span>
                        </button>
                    </Link>
                    <Link to="/search/house">
                        <button className="flex flex-col items-center bg-white border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out w-40 h-40 flex items-center justify-center">
                            <House fontSize="large" className="text-blue-500 mb-2" />
                            <span className="text-lg font-semibold text-gray-800">House</span>
                        </button>
                    </Link>
                    <Link to="/search/entire-place">
                        <button className="flex flex-col items-center bg-white border border-gray-300 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out w-40 h-40 flex items-center justify-center">
                            <Home fontSize="large" className="text-blue-500 mb-2" />
                            <span className="text-lg font-semibold text-gray-800">Entire Place</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LookingFor;
