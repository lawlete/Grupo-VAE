import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section id="contact" className="bg-slate-800/50">
      <div className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
          <span className="block">Innová con Inteligencia.</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
            Llevá tu negocio al siguiente nivel.
          </span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-slate-300">
            Cada empresa tiene su propio camino hacia la transformación digital. En VAE AI Consulting, te acompañamos con visión estratégica, experiencia técnica y soluciones reales.
        </p>
        <a
          href="mailto:grupo.vae.app.developers@gmail.com"
          className="mt-8 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 sm:w-auto transform hover:-translate-y-1 transition-all duration-300 ease-in-out"
        >
          Contactanos hoy mismo
        </a>
      </div>
    </section>
  );
};

export default CallToAction;