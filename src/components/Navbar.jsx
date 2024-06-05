import React from 'react';
import logo from '../assets/logona.png'; // Ganti dengan path logo Anda

const Navbar = () => {
    return (
        <nav className="fixed left-5 md:left-12 w-full bg-transparent z-50">
            <div className="container mx-auto flex items-center">
                <img src={logo} alt="Logo" className="w-40 h-40 md:w-40 md:h-40" />
            </div>
        </nav>
    );
};

export default Navbar;