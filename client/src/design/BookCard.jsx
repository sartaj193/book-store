import React from 'react';

const BookCard = ({ title, author, price, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{author}</p>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-lg font-bold text-indigo-600">₹{price}</span>
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;