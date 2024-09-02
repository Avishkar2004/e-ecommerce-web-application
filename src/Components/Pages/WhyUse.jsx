import React from 'react';
import ApartmentIcon from '@mui/icons-material/Apartment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
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
                <div className="flex justify-around flex-wrap">
                    {[
                        { label: 'New', icon: <ApartmentIcon fontSize="small" />, text: 'Builder Projects' },
                        { label: 'New', icon: <AttachMoneyIcon fontSize="small" />, text: 'Sale Agreement' },
                        { label: '', icon: <VolunteerActivismIcon fontSize="small" />, text: 'Home Loan' },
                        { label: '', icon: <HomeRepairServiceIcon fontSize="small" />, text: 'Property Legal Services' },
                        { label: 'Sale is Live', icon: <BrushIcon fontSize="small" />, text: 'Home Interiors' },
                        { label: '', icon: <PublicIcon fontSize="small" />, text: 'NoBroker For NRIs' }
                    ].map((item, index) => (
                        <div key={index} className="text-center p-4 cursor-pointer">
                            {item.label ? (
                                <div className="flex items-center justify-center mb-2">
                                    <span className="inline-block py-1 px-3 rounded bg-[#ffefd9] text-gray-700 font-semibold text-sm mr-2">
                                        {item.label}
                                    </span>
                                    <div className="text-4xl text-blue-500">{item.icon}</div>
                                </div>
                            ) : (
                                <div className="text-4xl mb-2 text-blue-500">{item.icon}</div>
                            )}
                            <p className="mt-2 text-gray-700 font-medium">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* Title with Horizontal Borders and Circles */}
            <div className="flex items-center justify-center mb-6">
                {/* Left Line */}
                <div className="flex-grow border-t border-gray-300 relative">
                    <div className="absolute right-0 top-[-6px] bg-white rounded-full w-4 h-4 border border-pink-300"></div>
                </div>

                {/* Title */}
                <h2 className="text-[32px] text-[#787676] font-[32px] mx-4">Why Use NoBroker</h2>

                {/* Right Line */}
                <div className="flex-grow border-t border-gray-300 relative">
                    <div className="absolute left-0 top-[-6px] bg-white rounded-full w-4 h-4 border border-pink-300"></div>
                </div>
            </div>
            <div className="py-8 ">
                <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
                    {[
                        { icon: <ApartmentIcon fontSize="inherit" />, title: 'Avoid Broker', text: "We directly connect you to verified owners to save brokerage" },
                        { icon: <AttachMoneyIcon fontSize="inherit" />, title: 'Sale Agreement', text: "We directly connect you to verified owners to save brokerage" },
                        { icon: <VolunteerActivismIcon fontSize="inherit" />, title: 'Home Loan', text: "We directly connect you to verified owners to save brokerage" },
                        { icon: <HomeRepairServiceIcon fontSize="inherit" />, title: 'Property Legal Services', text: "We directly connect you to verified owners to save brokerage" },
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center w-full max-w-[calc(20%)] mx-2">
                            <div className="text-blue-600 mb-4 text-4xl">
                                {item.icon}
                            </div>
                            <h3 className="text-md font-medium  text-gray-800 mb-2">{item.title}</h3>
                            <p className="text-sm">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyUse;
