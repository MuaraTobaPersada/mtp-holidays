import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 text-center">
        <p className='text-sm md:text-base'>&copy; 2024 PT. Muara Toba Persada. All rights reserved.</p>
        <p className='text-sm md:text-base'>Email: <a href="mailto:admin@muaratobapersada.com" className="text-blue-400 hover:underline">admin@muaratobapersada.com</a></p>
      </div>
    </footer>
  );
};

export default Footer;