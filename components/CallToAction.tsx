import React from 'react';

const CallToAction: React.FC = () => {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-900">
      <div className="max-w-6xl mx-auto relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 transform rotate-1 rounded-[3rem] opacity-20 blur-xl"></div>
        
        <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-[2.5rem] p-8 md:p-16 text-center overflow-hidden shadow-2xl">
            {/* Decorative circles */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-500/10 rounded-full blur-2xl"></div>

            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
              Innová con Inteligencia.
            </h2>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-10">
                Cada empresa tiene su propio camino hacia la transformación digital. Te acompañamos con visión estratégica y soluciones reales.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                href="mailto:grupo.vae.app.developers@gmail.com"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-1 transition-all"
                >
                Contactar al Equipo
                </a>
                <a
                href="mailto:grupo.vae.app.developers@gmail.com?subject=Solicitud%20de%20Reunión"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-300 bg-slate-800/50 border border-slate-600 rounded-full hover:bg-slate-700 hover:text-white transition-all"
                >
                Agendar Reunión
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;