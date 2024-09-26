import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
    const navigate = useNavigate(); // Correctly using useNavigate

    // Form data and loading state
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [loading, setLoading] = useState(false); // State to track if form is being submitted

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Start loading
        try {
            const res = await axios.post('http://localhost:5000/api/auth/signup', formData);
            alert(res.data.message);
            localStorage.setItem('token', res.data.token);
            setLoading(false); // Stop loading after success
            navigate('/'); // Use navigate instead of window reload
        } catch (err) {
            console.error(err.response.data.message);
            setLoading(false); // Stop loading after error
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://source.unsplash.com/featured/?nature,water)' }}>
            <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Create an Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Username"
                            className="p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            disabled={loading} // Disable input when loading
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            disabled={loading} // Disable input when loading
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            className="p-3 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            disabled={loading} // Disable input when loading
                        />
                    </div>
                    <button
                        type="submit"
                        className={`w-full p-3 ${loading ? 'bg-gray-500' : 'bg-blue-600'} text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500`}
                        disabled={loading} // Disable button when loading
                    >
                        {loading ? (
                            <div className="flex justify-center items-center">
                                <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                                </svg>
                                Processing...
                            </div>
                        ) : (
                            'Sign Up'
                        )}
                    </button>
                </form>
                <p className="mt-6 text-center text-gray-600">
                    Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Log in</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
