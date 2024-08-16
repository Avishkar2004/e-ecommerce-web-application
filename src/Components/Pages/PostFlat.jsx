import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PostFlat = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        size: '',
        rent: '',
        lightBill: '',
        deposits: '',
        brokerage: '',
        photos: null,
        location: '',
        contactNumber: '',
        email: '',
        nu: "",
        contactTime: '',
        landmark: '',
        numberOfPeople: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData({
            ...formData,
            [name]: files ? files[0] : value, // Handle file input
        });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.size) newErrors.size = 'Size is required';
        if (!formData.rent || isNaN(formData.rent)) newErrors.rent = 'Valid rent amount is required';
        if (!formData.lightBill || isNaN(formData.lightBill)) newErrors.lightBill = 'Valid light bill amount is required';
        if (!formData.deposits || isNaN(formData.deposits)) newErrors.deposits = 'Valid deposit amount is required';
        if (!formData.brokerage || isNaN(formData.brokerage)) newErrors.brokerage = 'Valid brokerage amount is required';
        if (!formData.location) newErrors.location = 'Location is required';
        if (!formData.contactNumber || !/^\d{10}$/.test(formData.contactNumber)) newErrors.contactNumber = 'Valid contact number is required';
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Valid email is required';
        if (!formData.contactTime) newErrors.contactTime = 'Contact time is required';
        if (!formData.landmark) newErrors.landmark = 'Landmark is required';
        if (!formData.numberOfPeople || isNaN(formData.numberOfPeople) || formData.numberOfPeople <= 0) newErrors.numberOfPeople = 'Valid number of people is required';

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const formDataToSend = new FormData();
        for (const key in formData) {
            if (formData[key] !== null) {
                formDataToSend.append(key, formData[key]);
            }
        }

        try {
            const response = await fetch('http://localhost:5000/api/flats', {
                method: 'POST',
                body: formDataToSend
            });
            const data = await response.json();
            if (response.ok) {
                alert(data.message);
                navigate('/'); // Redirect to home screen after successful login
            } else {
                console.error(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="p-6 max-w-2xl mx-auto">
            <h1 className="text-2xl font-bold mb-6">Post About Your Flat/Room/Apartment</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Size and Rent Section */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="flex flex-col">
                        <label className="text-lg font-semibold mb-2" htmlFor="size">Size</label>
                        <select
                            id="size"
                            name="size"
                            value={formData.size}
                            onChange={handleChange}
                            className={`border border-gray-300 rounded-lg p-2 ${errors.size ? 'border-red-500' : ''}`}
                        >
                            <option value="">Select size</option>
                            <option value="1 BHK">1 BHK</option>
                            <option value="2 BHK">2 BHK</option>
                            <option value="3 BHK">3 BHK</option>
                            <option value="4 BHK">4 BHK</option>
                            <option value="1 RK">1 RK</option>
                            <option value="Other">Other</option>
                        </select>
                        {errors.size && <p className="text-red-500 text-sm">{errors.size}</p>}
                    </div>
                    <div className="flex flex-col">
                        <label className="text-lg font-semibold mb-2" htmlFor="rent">Rent / Month</label>
                        <input
                            type="text"
                            id="rent"
                            name="rent"
                            value={formData.rent}
                            onChange={handleChange}
                            className={`border border-gray-300 rounded-lg p-2 ${errors.rent ? 'border-red-500' : ''}`}
                            placeholder="Enter rent amount"
                        />
                        {errors.rent && <p className="text-red-500 text-sm">{errors.rent}</p>}
                    </div>
                </div>

                {/* Bills, Deposits, and Brokerage Section */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="flex flex-col">
                        <label className="text-lg font-semibold mb-2" htmlFor="lightBill">Light Bill</label>
                        <input
                            type="text"
                            id="lightBill"
                            name="lightBill"
                            value={formData.lightBill}
                            onChange={handleChange}
                            className={`border border-gray-300 rounded-lg p-2 ${errors.lightBill ? 'border-red-500' : ''}`}
                            placeholder="Enter light bill amount"
                        />
                        {errors.lightBill && <p className="text-red-500 text-sm">{errors.lightBill}</p>}
                    </div>
                    <div className="flex flex-col">
                        <label className="text-lg font-semibold mb-2" htmlFor="deposits">Deposits</label>
                        <input
                            type="text"
                            id="deposits"
                            name="deposits"
                            value={formData.deposits}
                            onChange={handleChange}
                            className={`border border-gray-300 rounded-lg p-2 ${errors.deposits ? 'border-red-500' : ''}`}
                            placeholder="Enter deposit amount"
                        />
                        {errors.deposits && <p className="text-red-500 text-sm">{errors.deposits}</p>}
                    </div>
                    <div className="flex flex-col">
                        <label className="text-lg font-semibold mb-2" htmlFor="brokerage">Brokerage</label>
                        <input
                            type="text"
                            id="brokerage"
                            name="brokerage"
                            value={formData.brokerage}
                            onChange={handleChange}
                            className={`border border-gray-300 rounded-lg p-2 ${errors.brokerage ? 'border-red-500' : ''}`}
                            placeholder="Enter brokerage amount"
                        />
                        {errors.brokerage && <p className="text-red-500 text-sm">{errors.brokerage}</p>}
                    </div>
                </div>

                {/* Location and Contact Information Section */}
                <div className="flex flex-col">
                    <label className="text-lg font-semibold mb-2" htmlFor="location">Location/Address</label>
                    <textarea
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className={`border border-gray-300 rounded-lg p-2 ${errors.location ? 'border-red-500' : ''}`}
                        placeholder="Enter location or address"
                        rows="4"
                    />
                    {errors.location && <p className="text-red-500 text-sm">{errors.location}</p>}
                </div>

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="flex flex-col">
                        <label className="text-lg font-semibold mb-2" htmlFor="contactNumber">Contact Number</label>
                        <input
                            type="text"
                            id="contactNumber"
                            name="contactNumber"
                            value={formData.contactNumber}
                            onChange={handleChange}
                            className={`border border-gray-300 rounded-lg p-2 ${errors.contactNumber ? 'border-red-500' : ''}`}
                            placeholder="Enter your contact number"
                        />
                        {errors.contactNumber && <p className="text-red-500 text-sm">{errors.contactNumber}</p>}
                    </div>
                    <div className="flex flex-col">
                        <label className="text-lg font-semibold mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`border border-gray-300 rounded-lg p-2 ${errors.email ? 'border-red-500' : ''}`}
                            placeholder="Enter your email"
                        />
                        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>
                </div>

                <div className="flex flex-col">
                    <label className="text-lg font-semibold mb-2" htmlFor="contactTime">Preferred Contact Time</label>
                    <input
                        type="text"
                        id="contactTime"
                        name="contactTime"
                        value={formData.contactTime}
                        onChange={handleChange}
                        className={`border border-gray-300 rounded-lg p-2 ${errors.contactTime ? 'border-red-500' : ''}`}
                        placeholder="Enter preferred contact time"
                    />
                    {errors.contactTime && <p className="text-red-500 text-sm">{errors.contactTime}</p>}
                </div>

                <div className="flex flex-col">
                    <label className="text-lg font-semibold mb-2" htmlFor="landmark">Landmark</label>
                    <input
                        type="text"
                        id="landmark"
                        name="landmark"
                        value={formData.landmark}
                        onChange={handleChange}
                        className={`border border-gray-300 rounded-lg p-2 ${errors.landmark ? 'border-red-500' : ''}`}
                        placeholder="Enter a nearby landmark"
                    />
                    {errors.landmark && <p className="text-red-500 text-sm">{errors.landmark}</p>}
                </div>

                <div className="flex flex-col">
                    <label className="text-lg font-semibold mb-2" htmlFor="numberOfPeople">Number of People</label>
                    <input
                        type="number"
                        id="numberOfPeople"
                        name="numberOfPeople"
                        value={formData.numberOfPeople}
                        onChange={handleChange}
                        className={`border border-gray-300 rounded-lg p-2 ${errors.numberOfPeople ? 'border-red-500' : ''}`}
                        placeholder="Enter number of people"
                    />
                    {errors.numberOfPeople && <p className="text-red-500 text-sm">{errors.numberOfPeople}</p>}
                </div>

                <div className="flex flex-col">
                    <label className="text-lg font-semibold mb-2" htmlFor="photos">Photos</label>
                    <input
                        type="file"
                        id="photos"
                        name="photos"
                        onChange={handleChange}
                        className={`border border-gray-300 rounded-lg p-2 ${errors.photos ? 'border-red-500' : ''}`}
                    />
                    {errors.photos && <p className="text-red-500 text-sm">{errors.photos}</p>}
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default PostFlat;
