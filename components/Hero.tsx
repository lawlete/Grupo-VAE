import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-800/[0.2] [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_70%)]"></div>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 pb-2">
          Transformamos Datos, Procesos y Negocios con IA
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-300">
          Somos un equipo de ingenieros, analistas y project managers dedicados a impulsar la transformación digital de tu empresa. Combinamos estrategia, tecnología y creatividad para diseñar soluciones inteligentes.
        </p>
        <div className="mt-10">
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
          >
            Descubrí cómo podemos ayudarte
          </a>
        </div>
      </div>
      {/* Fix: The 'jsx' prop is not a standard attribute for the <style> tag in React.
          It's part of Next.js's styled-jsx feature. Removing it resolves the TypeScript error. */}
      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 7s infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </section>
  );
};

export default Hero;
