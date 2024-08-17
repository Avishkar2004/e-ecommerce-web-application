import React from 'react';

const reviews = [
    {
        id: 1,
        name: 'Alice Johnson',
        review: 'Amazing experience! The service was top-notch and the staff were very friendly. Highly recommend!',
        rating: 5
    },
    {
        id: 2,
        name: 'Bob Smith',
        review: 'Great value for money. The property was exactly as described and the process was smooth and hassle-free.',
        rating: 4
    },
    {
        id: 3,
        name: 'Charlie Brown',
        review: 'Overall a good experience. Some minor issues with the check-in process, but everything else was fine.',
        rating: 3
    }
];

const Reviews = () => {
    return (
        <div className="p-6 mt-4 text-center rounded-lg shadow-lg">
            <h1 className="text-3xl font-extrabold mb-6 text-gray-800">What Our Customers Are Saying</h1>
            <div className="flex justify-center space-x-6 overflow-x-auto">
                {reviews.map((review) => (
                    <div key={review.id} className="bg-white border border-gray-300 rounded-lg p-4 shadow-md w-80 flex-none">
                        <h2 className="text-xl font-semibold mb-2 text-gray-800">{review.name}</h2>
                        <p className="text-gray-600 mb-2">"{review.review}"</p>
                        <div className="flex items-center">
                            {[...Array(review.rating)].map((_, i) => (
                                <span key={i} className="text-yellow-500">&#9733;</span>
                            ))}
                            {[...Array(5 - review.rating)].map((_, i) => (
                                <span key={i} className="text-gray-300">&#9733;</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Reviews;
