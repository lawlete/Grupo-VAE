
import React from 'react';
import { CloudIcon, BrainIcon, ChartBarIcon } from './Icons';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden bg-slate-900">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] opacity-40"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[80px] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <div className="text-left space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-slate-800/50 rounded-full px-4 py-2 border border-slate-700/50 backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span className="text-sm font-medium text-cyan-300">Innovación en Consultoría</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
              Transformamos <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Datos en Valor
              </span>
            </h1>
            
            <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
              Combinamos estrategia, tecnología y creatividad para diseñar soluciones inteligentes que impulsan la transformación digital de tu empresa.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, 'contact')}
                className="inline-flex justify-center items-center px-8 py-4 text-base font-bold rounded-full text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-lg shadow-cyan-900/50 transition-all transform hover:-translate-y-1"
              >
                Comenzar Ahora
                <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </a>
              <a
                href="#services"
                onClick={(e) => handleScroll(e, 'services')}
                className="inline-flex justify-center items-center px-8 py-4 text-base font-bold rounded-full text-slate-300 bg-slate-800/50 hover:bg-slate-700 hover:text-white border border-slate-700 backdrop-blur-sm transition-all"
              >
                Explorar Servicios
              </a>
            </div>
            
            <div className="pt-8 flex items-center gap-6 text-slate-500">
                <div className="flex items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                        <BrainIcon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <span className="text-sm font-medium">IA <br/>Strategists</span>
                </div>
                <div className="w-px h-12 bg-slate-800"></div>
                <div className="flex items-center gap-2">
                    <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                        <CloudIcon className="w-6 h-6 text-blue-400" />
                    </div>
                    <span className="text-sm font-medium">Cloud <br/>Experts</span>
                </div>
            </div>
          </div>

          {/* Visual Content - Abstract Dashboard Card */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 blur-3xl opacity-20 transform rotate-6 rounded-[3rem]"></div>
            <div className="relative bg-slate-800/80 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 ease-out">
                {/* Mock UI Elements */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs text-slate-500 font-mono">VAE-AI-System v2.0</div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700/50">
                        <div className="text-slate-400 text-sm mb-1">Total Processed</div>
                        <div className="text-2xl font-bold text-white">2.4M</div>
                        <div className="text-xs text-green-400 mt-2 flex items-center">
                            <ChartBarIcon className="w-3 h-3 mr-1" /> +12.5% increase
                        </div>
                    </div>
                    <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-700/50">
                        <div className="text-slate-400 text-sm mb-1">Efficiency</div>
                        <div className="text-2xl font-bold text-white">98.2%</div>
                        <div className="text-xs text-cyan-400 mt-2">Optimized by AI</div>
                    </div>
                </div>

                <div className="space-y-3">
                    <div className="h-2 bg-slate-700 rounded-full w-3/4"></div>
                    <div className="h-2 bg-slate-700 rounded-full w-1/2"></div>
                    <div className="h-2 bg-slate-700 rounded-full w-5/6"></div>
                    <div className="mt-6 p-4 bg-gradient-to-r from-blue-900/40 to-cyan-900/40 rounded-xl border border-blue-800/30 flex items-center gap-3">
                        <div className="p-2 bg-blue-600 rounded-lg">
                            <BrainIcon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <div className="text-sm font-semibold text-white">Análisis Predictivo</div>
                            <div className="text-xs text-slate-400">Modelo ejecutándose...</div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
