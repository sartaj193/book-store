import React from 'react';
import Carousel from './Carousel';
import BookSection from './BookSection';

const OutLokk = () => {
  const topSellers = [
    {
      id: 1,
      title: 'Heer Ranjha',
      author: 'Waris Shah',
      price: 499,
      imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f',
    },
    {
      id: 2,
      title: 'Panj Pani',
      author: 'Nanak Singh',
      price: 399,
      imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794',
    },
    {
      id: 3,
      title: 'Pinjar',
      author: 'Amrita Pritam',
      price: 449,
      imageUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e',
    },
    {
      id: 4,
      title: 'Sufi Poetry Collection',
      author: 'Bulleh Shah',
      price: 599,
      imageUrl: 'https://images.unsplash.com/photo-1589998059171-988d887df646',
    },
  ];

  const popularBooks = [
    {
      id: 5,
      title: 'Punjab: A History',
      author: 'Rajmohan Gandhi',
      price: 799,
      imageUrl: 'https://images.unsplash.com/photo-1576872381149-7847515ce5d8',
    },
    {
      id: 6,
      title: 'The Sikhs',
      author: 'Patwant Singh',
      price: 649,
      imageUrl: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19',
    },
    {
      id: 7,
      title: 'Train to Pakistan',
      author: 'Khushwant Singh',
      price: 349,
      imageUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e',
    },
    {
      id: 8,
      title: 'Punjabi Kitchen',
      author: 'Amrita Sondhi',
      price: 549,
      imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f',
    },
  ];

  const punjabSpecial = [
    {
      id: 9,
      title: 'Folk Tales of Punjab',
      author: 'Flora Annie Steel',
      price: 299,
      imageUrl: 'https://images.unsplash.com/photo-1512820790803-83ca734da794',
    },
    {
      id: 10,
      title: "Punjab's War",
      author: 'Amandeep Sandhu',
      price: 699,
      imageUrl: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e',
    },
    {
      id: 11,
      title: 'Punjabi Poetry',
      author: 'Shiv Kumar Batalvi',
      price: 449,
      imageUrl: 'https://images.unsplash.com/photo-1589998059171-988d887df646',
    },
    {
      id: 12,
      title: 'Land of Five Rivers',
      author: 'Bhai Vir Singh',
      price: 549,
      imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-indigo-600 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Punjab BookStore</h1>
        </div>
      </header>

      <main className="container mx-auto px-4">
        <Carousel />
        <BookSection title="Top Sellers" books={topSellers} />
        <BookSection title="Popular Books" books={popularBooks} />
        <BookSection title="Punjab Special" books={punjabSpecial} />
      </main>

      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>© 2024 Punjab BookStore. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default OutLokk;
