import React from 'react';
import logo from '../assets/BRI White.png'; // Ganti dengan path logo Anda

const Navbar = () => {
    return (
        <nav className="fixed top-9 left-9 w-full bg-transparent p-4 z-50">
            <div className="container mx-auto flex items-center">
                <img src={logo} alt="Logo" className="w-12 h-10 md:w-12 md:h-5" />
            </div>
        </nav>
    );
};

export default Navbar;