import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/authContext"; // Adjust the path

const Header = () => {
    const { user, logout } = useContext(AuthContext); // Access user and logout

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
                                <div className="flex items-center space-x-2">
                                    <span className="text-gray-800 font-medium">{user.username}</span>
                                    <button
                                        onClick={logout}
                                        className="text-gray-600 hover:text-gray-800 font-medium"
                                    >
                                        Logout
                                    </button>
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
