
import React, { useState, useEffect } from 'react';
import { Logo } from './Icons';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Function to handle smooth scrolling and prevent default navigation error
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setIsMenuOpen(false);
    };
    
    return (
        <header 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? 'py-4 bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-slate-800' : 'py-6 bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <a href="#" className="flex-shrink-0 flex items-center gap-2 cursor-pointer no-underline" onClick={handleHomeClick}>
                        <Logo className="h-10 w-auto" />
                        <span className="text-xl font-bold tracking-tight text-white hidden sm:block">VAE <span className="text-cyan-400">Consulting</span></span>
                    </a>

                    {/* Desktop Menu */}
                    <nav className="hidden md:flex md:items-center md:space-x-8">
                        {['About', 'Services', 'Team'].map((item) => (
                            <a 
                                key={item}
                                href={`#${item.toLowerCase()}`} 
                                onClick={(e) => handleScroll(e, item.toLowerCase())}
                                className="text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 px-3 py-2 rounded-lg transition-all"
                            >
                                {item === 'About' ? 'Nosotros' : item === 'Services' ? 'Servicios' : 'Equipo'}
                            </a>
                        ))}
                        <a 
                            href="#contact" 
                            onClick={(e) => handleScroll(e, 'contact')}
                            className="bg-cyan-500 hover:bg-cyan-400 text-white text-sm font-semibold py-2.5 px-6 rounded-full transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transform hover:-translate-y-0.5"
                        >
                            Contacto
                        </a>
                    </nav>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
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

            {/* Mobile menu */}
            <div 
                className={`md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 shadow-xl transition-all duration-300 overflow-hidden ${
                    isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`} 
                id="mobile-menu"
            >
                <div className="px-4 pt-4 pb-6 space-y-2">
                    {['About', 'Services', 'Team'].map((item) => (
                        <a 
                            key={item}
                            href={`#${item.toLowerCase()}`} 
                            onClick={(e) => handleScroll(e, item.toLowerCase())}
                            className="text-slate-300 hover:bg-slate-800 hover:text-white block px-4 py-3 rounded-lg text-base font-medium transition-colors"
                        >
                            {item === 'About' ? 'Nosotros' : item === 'Services' ? 'Servicios' : 'Equipo'}
                        </a>
                    ))}
                    <a 
                        href="#contact" 
                        onClick={(e) => handleScroll(e, 'contact')}
                        className="text-cyan-400 font-bold block px-4 py-3 rounded-lg text-base hover:bg-slate-800"
                    >
                        Contáctanos
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
