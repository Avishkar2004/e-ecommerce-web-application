import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/authContext"; // Adjust the path

const Header = () => {
    const { user, logout } = useContext(AuthContext); // Access user and logout
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/" className="text-2xl font-bold text-gray-800">
                            ShopEase
                        </Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <nav className="hidden md:flex space-x-8">
                            <Link
                                to="/shop"
                                className="text-gray-600 hover:text-gray-800 font-medium"
                            >
                                Shop
                            </Link>
                            <Link
                                to="/about"
                                className="text-gray-600 hover:text-gray-800 font-medium"
                            >
                                About
                            </Link>
                            <Link
                                to="/contact"
                                className="text-gray-600 hover:text-gray-800 font-medium"
                            >
                                Contact
                            </Link>
                            <Link
                                to="/seller"
                                className="text-gray-600 hover:text-gray-800 font-medium"
                            >
                                Become a Seller
                            </Link>
                        </nav>
                        <div className="flex items-center space-x-4">
                            <Link
                                to="/cart"
                                className="text-gray-600 hover:text-gray-800 font-medium"
                            >
                                Cart
                            </Link>
                            {user ? (
                                <div className="relative">
                                    <button
                                        onClick={toggleDropdown}
                                        className="flex items-center space-x-2 focus:outline-none"
                                    >
                                        <span className="text-gray-600 font-medium">{user.username}</span>
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M19 9l-7 7-7-7"
                                            ></path>
                                        </svg>
                                    </button>
                                    {dropdownOpen && (
                                        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-md z-10">
                                            <Link
                                                to="/profile"
                                                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                            >
                                                Profile
                                            </Link>
                                            <div className="block px-4 py-2 text-gray-800">
                                                Phone: {user.phoneNumber}
                                            </div>
                                            <button
                                                onClick={logout}
                                                className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                                            >
                                                Logout
                                            </button>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <Link
                                    to="/signup"
                                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                                >
                                    Sign Up
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
