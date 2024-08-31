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
                            {item.label && (
                                <span className="mb-2 inline-block py-1 px-3 rounded">
                                    {item.label}
                                </span>
                            )}
                            <div className="text-4xl mb-2">{item.icon}</div>
                            <p className="mt-2 text-gray-700 font-medium">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center mb-6">
                <h2 className="text-2xl text-gray-800 font-semibold">Why Use NoBroker</h2>
            </div>
        </div>
    );
};

export default WhyUse;
