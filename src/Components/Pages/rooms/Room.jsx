import React, { useState, useEffect } from 'react';

const Room = () => {
    const [flats, setFlats] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/flats')
            .then((response) => {
                if (!response.ok) {
                    return response.text().then(text => {
                        throw new Error(text);
                    });
                }
                return response.json();
            })
            .then((data) => {
                setFlats(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="p-6 bg-gray-100">
            <h1 className="text-3xl font-extrabold mb-6 text-gray-800">Available Flats</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {flats.map((flat) => (
                    <div key={flat.id} className="bg-white border border-gray-300 rounded-lg p-4 shadow-md">
                        {flat.photos && (
                            <img
                                src={flat.photos}
                                alt={`Photo of ${flat.size}`}
                                className="w-full h-40 object-cover mb-4 rounded-lg"
                            />
                        )}

                        <h2 className="text-xl font-semibold mb-2 text-gray-800">{flat.size}</h2>
                        <p className="text-gray-600">Rent: ${flat.rent}</p>
                        <p className="text-gray-600">Light Bill: ${flat.light_bill}</p>
                        <p className="text-gray-600">Deposits: ${flat.deposits}</p>
                        <p className="text-gray-600">Brokerage: ${flat.brokerage}</p>

                        <p className="text-gray-600">Landmark: {flat.landmark}</p>
                        <p className="text-gray-600">Number of People: {flat.number_of_people}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Room;
