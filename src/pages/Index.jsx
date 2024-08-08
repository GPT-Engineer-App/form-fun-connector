import React from 'react';
import { Link } from 'react-router-dom';
import { navItems } from '../nav-items';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="bg-yellow-500 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black">MARCUS' BIKES</h1>
          <nav>
            <ul className="flex space-x-4">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-black hover:text-gray-800">
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <main className="container mx-auto mt-8 p-4">
        <h2 className="text-4xl font-bold mb-4">Welcome to Marcus' Bikes</h2>
        <p className="text-xl">Buy | Sell | Exchange</p>
        <p className="mt-4">
          This is the home page. You can navigate to other sections using the menu above.
        </p>
      </main>
    </div>
  );
};

export default Index;
