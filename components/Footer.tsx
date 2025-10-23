
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-base text-slate-500">
          &copy; {new Date().getFullYear()} VAE AI Consulting Group. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
