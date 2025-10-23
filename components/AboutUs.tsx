
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-32 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base font-semibold tracking-wider text-cyan-400 uppercase">Nuestro Propósito</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Impulsando Negocios Sostenibles y Escalables
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-300 lg:mx-auto">
            Ayudamos a las organizaciones a evolucionar, optimizando procesos, potenciando a las personas y aplicando tecnología e inteligencia artificial.
          </p>
        </div>

        <div className="mt-12 lg:mt-20 lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-center">
            <div className="relative">
                <h3 className="text-2xl font-bold text-white tracking-tight sm:text-3xl">Más de 20 años de experiencia integrada.</h3>
                <p className="mt-3 text-lg text-slate-300">
                    Integramos décadas de experiencia en dirección de proyectos, automatización industrial, infraestructura IT, análisis de datos, marketing y liderazgo de equipos, aplicando enfoques prácticos que generan resultados medibles y duraderos.
                </p>
                <p className="mt-4 text-lg text-slate-300">
                    Nuestro valor diferencial está en combinar la experiencia corporativa y técnica con una mirada humana y estratégica, promoviendo el desarrollo de equipos autónomos.
                </p>
            </div>
            <div className="mt-10 lg:mt-0 relative" aria-hidden="true">
                <img className="relative mx-auto rounded-xl shadow-2xl opacity-80" width={490} src="https://picsum.photos/490/400?grayscale" alt="Team working" />
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-900 via-transparent to-blue-900 mix-blend-multiply rounded-xl"></div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
