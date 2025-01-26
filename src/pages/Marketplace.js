import React from 'react';
import ItemCard from '../components/ItemCard';

const Marketplace = () => {
  const items = [
    {
      id: 1,
      name: 'Cement Bags',
      description: 'Unused cement bags.',
      price: 50,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Bricks',
      description: 'High-quality bricks.',
      price: 30,
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Marketplace</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
