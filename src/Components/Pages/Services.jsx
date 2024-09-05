import React from 'react';

const servicesData = {
    buy: [
        'Property Legal Services', 'Interiors', 'Sale Agreement', 'NoBroker For NRI\'s', 'New Builder Project',
        'Home Loan EMI Calculator', 'Home Loan Balance Transfer', 'Home Loan Eligibility Calculator', 'Apply Home Loan',
        'Compare Home Loan Interest', 'Property Buyers Forum', 'Property Buyers Guide', 'Property Seller Guide',
        'Home Loan Guide', 'Home Loan Queries', 'Home Renovation Guide', 'Home Renovation Queries', 'Interior Design Tips',
        'Interior Design Queries', 'NRI RealEstate Guide', 'NRI RealEstate Queries', 'Realestate Vastu Guide',
        'Personal Loan Guide', 'Personal Loan Queries', 'Bill Payment Guide', 'Realestate Legal Guide', 'Realestate Legal Queries'
    ],
    rent: [
        'Rental Agreement', 'Pay Rent', 'Refer and Earn', 'Packers and Movers', 'Property Management in India',
        'Home Services Questions', 'Rent Services Questions', 'Rent Calculator', 'Property Rental Guide', 'Landlord Guide',
        'Tenant Guide', 'Packers and Movers Guide', 'Packers and Movers Queries', 'Home Services', 'Home Services Queries',
        'Painting Services', 'Home Painting Guide', 'Home Painting Queries', 'Cleaning Services', 'Kitchen Cleaning Services',
        'Bathroom Cleaning Services', 'Full House Cleaning Services', 'Sofa Cleaning Services', 'Home Cleaning Guide',
        'Home Cleaning Queries', 'AC Services', 'Carpentry Services', 'Carpentry Services Queries', 'Electrician Services',
        'Electrician Services Queries', 'Plumbing Services', 'Plumbing Services Queries'
    ]
};

const Services = () => {
    return (
        <div className="container mx-auto py-10 px-6">
            {/* Main Title */}
            <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">NoBroker Services</h1>
            {/* Service Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {/* Buy Section */}
                <div>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-6">Buy</h2>
                    <div className="flex flex-wrap">
                        {servicesData.buy.map((service, index) => (
                            <span key={index} className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-2 py-1 m-2 rounded-lg shadow transition-transform transform hover:scale-105 cursor-pointer">
                                {service}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Rent Section */}
                <div>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-6">Rent</h2>
                    <div className="flex flex-wrap">
                        {servicesData.rent.map((service, index) => (
                            <span key={index} className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-1 py-1 m-2 rounded-lg shadow transition-transform transform hover:scale-105 cursor-pointer">
                                {service}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center bg-gray-100 mt-4 p-6 rounded-lg shadow-md mb-10">
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-2xl font-semibold mb-2">Find Property</h2>
                    <p className="text-gray-600 mb-4">Select from thousands of options, without brokerage.</p>
                    <button className="bg-gray-700 text-white py-2 px-6 rounded-md hover:bg-gray-800 transition">Find Now</button>
                </div>
                <div className="flex flex-col items-center text-center">
                    <h2 className="text-2xl font-semibold mb-2">List Your Property</h2>
                    <p className="text-gray-600 mb-4">For Free. Without any brokerage.</p>
                    <button className="bg-gray-700 text-white py-2 px-6 rounded-md hover:bg-gray-800 transition">Free Posting</button>
                </div>
            </div>
        </div>
    );
};

export default Services;
