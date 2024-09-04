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
        <div className="container mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold mb-8">NoBroker services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Buy Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Buy</h2>
                    <div className="flex flex-wrap">
                        {servicesData.buy.map((service, index) => (
                            <span key={index} className="bg-gray-200 text-gray-700 px-3 py-2 m-1 rounded">
                                {service}
                            </span>
                        ))}
                    </div>
                </div>
                {/* Rent Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-4">Rent</h2>
                    <div className="flex flex-wrap">
                        {servicesData.rent.map((service, index) => (
                            <span key={index} className="bg-gray-200 text-gray-700 px-3 py-2 m-1 rounded">
                                {service}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
