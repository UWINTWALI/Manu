import React from 'react';

const ItemCard = ({ item }) => {
  return (
    <div className="border rounded p-4 shadow-md">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-48 object-cover rounded"
      />
      <h2 className="text-xl font-bold mt-2">{item.name}</h2>
      <p className="text-gray-600">{item.description}</p>
      <p className="text-green-500 font-bold">${item.price}</p>
    </div>
  );
};

export default ItemCard;
