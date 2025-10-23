
import React from 'react';
import { Logo } from './Icons';

const Header: React.FC = () => {
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href')?.substring(1);
        if (targetId) {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };
    
    return (
        <header className="sticky top-0 z-50 w-full backdrop-blur-lg bg-slate-900/70 border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <a href="#" aria-label="Home" onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}>
                            <Logo />
                        </a>
                    </div>
                    <nav className="hidden md:flex md:items-center md:space-x-8">
                        <a href="#about" onClick={handleNavClick} className="text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors">Sobre Nosotros</a>
                        <a href="#services" onClick={handleNavClick} className="text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors">Servicios</a>
                        <a href="#team" onClick={handleNavClick} className="text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors">Equipo</a>
                        <a href="#contact" onClick={handleNavClick} className="text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors">Contacto</a>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;