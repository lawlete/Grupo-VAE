
import React, { useState } from 'react';
import { Logo } from './Icons';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href')?.substring(1);
        if (targetId) {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
        setIsMenuOpen(false); // Close mobile menu on click
    };

    const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsMenuOpen(false);
    };
    
    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-slate-900/70 border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="#" aria-label="Home" onClick={handleHomeClick}>
                            <Logo />
                        </a>
                    </div>
                    {/* Desktop Menu */}
                    <nav className="hidden md:flex md:items-center md:space-x-8">
                        <a href="#about" onClick={handleNavClick} className="text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors">Sobre Nosotros</a>
                        <a href="#services" onClick={handleNavClick} className="text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors">Servicios</a>
                        <a href="#team" onClick={handleNavClick} className="text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors">Equipo</a>
                        <a href="#contact" onClick={handleNavClick} className="text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors">Contacto</a>
                    </nav>
                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded={isMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state. */}
            {isMenuOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#about" onClick={handleNavClick} className="text-slate-300 hover:bg-slate-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Sobre Nosotros</a>
                        <a href="#services" onClick={handleNavClick} className="text-slate-300 hover:bg-slate-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Servicios</a>
                        <a href="#team" onClick={handleNavClick} className="text-slate-300 hover:bg-slate-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Equipo</a>
                        <a href="#contact" onClick={handleNavClick} className="text-slate-300 hover:bg-slate-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contacto</a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
