
import React from 'react';

interface TeamMember {
  name: string;
  title: string;
  pitch: string;
  imageUrl: string;
}

const teamMembersFull: TeamMember[] = [
  {
    name: 'Ing. Andrea Cristina Ballesteros',
    title: 'Calidad y Desarrollo Humano',
    pitch: 'Ingeniera Química especialista en calidad. Combino docencia, auditoría y liderazgo comercial para potenciar talentos.',
    imageUrl: 'https://i.pravatar.cc/150?u=andrea.ballesteros',
  },
  {
    name: 'Lic. Andrea Lorena Romero',
    title: 'Líder de Proyectos y Transformación',
    pitch: "Más de 20 años en IT liderando transformaciones. Especialista en alinear procesos y desarrollar equipos autónomos.",
    imageUrl: 'https://i.pravatar.cc/150?u=andrea.romero',
  },
   {
    name: 'Lic. Vanessa Carpio',
    title: 'Desarrolladora de IA y Automatización',
    pitch: "Infraestructura IT y Python. Experiencia en automatización industrial y MLOps para soluciones escalables.",
    imageUrl: 'https://i.pravatar.cc/150?u=vanessa.carpio',
  },
  {
    name: 'Lic. Emiliano Passarello',
    title: 'Especialista en IA Conversacional',
    pitch: 'Diseño de asistentes con RAG y agentes inteligentes. Experto en conectar conocimiento propio con respuestas confiables.',
    imageUrl: 'https://i.pravatar.cc/150?u=emiliano.passarello',
  },
  {
    name: 'Ing. Alfredo Pablo Lawler',
    title: 'Estratega en Tecnología e IA',
    pitch: 'Ingeniero con +25 años de experiencia. Uno gestión estratégica con innovación en IA para alto impacto.',
    imageUrl: 'https://i.pravatar.cc/150?u=alfredo.lawler',
  },
];


const TeamMemberCard: React.FC<TeamMember> = ({ name, title, pitch, imageUrl }) => (
  <div className="bg-slate-800/40 rounded-3xl p-6 border border-slate-700/50 flex flex-col items-center text-center hover:bg-slate-800 transition-all hover:-translate-y-1 hover:shadow-xl">
    <div className="relative w-24 h-24 mb-6">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-blue-500 rounded-full blur-md opacity-50"></div>
        <img className="relative w-full h-full rounded-full object-cover border-2 border-slate-700" src={imageUrl} alt={`Foto de ${name}`} />
    </div>
    
    <h3 className="text-lg font-bold text-white mb-1">{name}</h3>
    <p className="text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">{title}</p>
    <p className="text-slate-400 text-sm leading-relaxed">{pitch}</p>
  </div>
);

const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-3">Nuestro Equipo</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white">
            Profesionales <span className="text-slate-500">Apasionados</span>
          </h3>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
            Conocé a las mentes detrás de VAE AI Consulting.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {teamMembersFull.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
