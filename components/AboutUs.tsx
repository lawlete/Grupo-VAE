
import React from 'react';
import { TargetIcon, PuzzleIcon } from './Icons';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
            <h2 className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-3">Sobre Nosotros</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white max-w-3xl">
                Impulsando Negocios <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Sostenibles y Escalables</span>
            </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Card */}
            <div className="bg-slate-800/30 rounded-3xl p-8 border border-slate-700/50 hover:border-slate-600 transition-colors">
                <div className="w-14 h-14 bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 text-blue-400">
                    <TargetIcon className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">Nuestro Propósito</h4>
                <p className="text-slate-400 text-lg leading-relaxed">
                    Ayudamos a las organizaciones a evolucionar, optimizando procesos, potenciando a las personas y aplicando tecnología e inteligencia artificial. Creemos en la tecnología como un habilitador del potencial humano.
                </p>
            </div>

            {/* Right Card */}
            <div className="bg-slate-800/30 rounded-3xl p-8 border border-slate-700/50 hover:border-slate-600 transition-colors">
                <div className="w-14 h-14 bg-cyan-900/30 rounded-2xl flex items-center justify-center mb-6 text-cyan-400">
                    <PuzzleIcon className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">Experiencia Integrada</h4>
                <p className="text-slate-400 text-lg leading-relaxed">
                    +20 años integrando dirección de proyectos, automatización industrial, infraestructura IT y análisis de datos. Nuestro valor diferencial es combinar la solidez técnica con una mirada estratégica y humana.
                </p>
            </div>
        </div>

        {/* Large Image/Banner Section */}
        <div className="mt-8 relative rounded-3xl overflow-hidden h-[300px] md:h-[400px] group">
            <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="Team Collaboration" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 md:p-12">
                <p className="text-white font-medium text-lg md:text-xl max-w-2xl border-l-4 border-cyan-500 pl-6">
                    "No solo implementamos tecnología. Creamos entornos donde los equipos se vuelven autónomos y el negocio avanza con solidez."
                </p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
