import React from 'react';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import DescriptionIcon from '@mui/icons-material/Description';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import BrushIcon from '@mui/icons-material/Brush';
import PublicIcon from '@mui/icons-material/Public';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople'; // Icon for loan banner

const WhyUse = () => {
    return (
        <div>
            {/* Loan Banner */}
            <div className="bg-blue-900 py-2 px-4 flex items-center justify-center">
                <EmojiPeopleIcon style={{ color: 'white', marginRight: '8px' }} />
                <p className="text-white text-sm">
                    Do you know how much <strong>loan</strong> you can get? Get maximum with <strong>NoBroker</strong>
                </p>
                <button className="ml-4 text-white border border-white py-1 px-2 rounded hover:bg-white hover:text-blue-900 transition">
                    Check Eligibility
                </button>
            </div>

            {/* Why Use Section */}
            <div className="py-8">
                <div className="flex justify-center mb-6">
                    <h2 className="text-2xl text-gray-800 font-semibold">Why Use NoBroker</h2>
                </div>
                <div className="flex justify-around flex-wrap">
                    {[
                        { label: 'Lowest Price', icon: <LocalShippingIcon fontSize="large" />, text: 'Packers & Movers' },
                        { label: 'New Offers', icon: <AttachMoneyIcon fontSize="large" />, text: 'Pay Rent' },
                        { label: 'Flat 30% off', icon: <DescriptionIcon fontSize="large" />, text: 'Rental Agreement' },
                        { label: 'New', icon: <HomeRepairServiceIcon fontSize="large" />, text: 'Click & Earn' },
                        { label: 'New', icon: <BrushIcon fontSize="large" />, text: 'Painting & Cleaning' },
                        { label: '', icon: <PublicIcon fontSize="large" />, text: 'NoBroker For NRIs' }
                    ].map((item, index) => (
                        <div key={index} className="text-center p-4">
                            {item.label && (
                                <span className="mb-2 inline-block bg-yellow-400 text-white py-1 px-3 rounded">
                                    {item.label}
                                </span>
                            )}
                            <div className="text-4xl mb-2">{item.icon}</div>
                            <p className="mt-2 text-gray-700 font-medium">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Property Owner Section */}
            <div className="flex flex-col items-center justify-center p-4 my-4">
                <div className="flex items-center mb-2">
                    <hr className="w-16 border-gray-300" />
                    <span className="text-gray-600 text-lg font-medium mx-2">Are you a Property Owner?</span>
                    <hr className="w-16 border-gray-300" />
                </div>
                <button className="px-6 py-2 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-400">
                    Post Free Property Ad
                </button>
            </div>
        </div>
    );
};

export default WhyUse;
