import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import playstore from "../assets/photos/googleplay.png";
import applestore from "../assets/photos/appstore.svg";

const Footer = () => {
    return (
        <footer className="bg-white py-8 mt-10">
            <div className="container mx-auto text-center space-y-6">
                {/* Footer Links */}
                <div className="flex flex-wrap justify-center space-x-4 text-gray-600">
                    <Link href="#" className="hover:text-gray-800">About Us</Link>
                    <Link href="#" className="hover:text-gray-800">Careers</Link>
                    <Link href="#" className="hover:text-gray-800">Terms & Conditions</Link>
                    <Link href="#" className="hover:text-gray-800">Privacy Policy</Link>
                    <Link href="#" className="hover:text-gray-800">Testimonials</Link>
                    <Link href="#" className="hover:text-gray-800">Sitemap</Link>
                    <Link href="#" className="hover:text-gray-800">FAQs</Link>
                </div>

                {/* App Download Links */}
                <div className="flex justify-center items-center">
                    <a href="https://play.google.com/store/apps" target="_blank" rel="noopener noreferrer">
                        <img
                            src={playstore}
                            alt="Google Play Store"
                            className="w-32 h-auto mr-4"
                        />
                    </a>
                    <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
                        <img
                            src={applestore}
                            alt="App Store"
                            className="w-32 h-auto"
                        />
                    </a>
                </div>

                {/* Social Media Icons */}
                <div className="flex justify-center space-x-6">
                    <Link href="#" className="text-gray-500 hover:text-gray-800">
                        <FaFacebookF className="w-8 h-8 p-2 bg-gray-200 rounded-full" />
                    </Link>
                    <Link href="#" className="text-gray-500 hover:text-gray-800">
                        <FaTwitter className="w-8 h-8 p-2 bg-gray-200 rounded-full" />
                    </Link>
                    <Link href="#" className="text-gray-500 hover:text-gray-800">
                        <FaInstagram className="w-8 h-8 p-2 bg-gray-200 rounded-full" />
                    </Link>
                    <Link href="#" className="text-gray-500 hover:text-gray-800">
                        <FaLinkedinIn className="w-8 h-8 p-2 bg-gray-200 rounded-full" />
                    </Link>
                    <Link href="#" className="text-gray-500 hover:text-gray-800">
                        <FaYoutube className="w-8 h-8 p-2 bg-gray-200 rounded-full" />
                    </Link>
                </div>

                {/* Copyright Text */}
                <div className="text-gray-500">
                    © 2013-24 NoBroker Technologies Solution Pvt. Ltd.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
