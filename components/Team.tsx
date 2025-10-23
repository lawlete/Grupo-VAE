
import React from 'react';

interface TeamMember {
  name: string;
  title: string;
  pitch: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Ing. Andrea Cristina Ballesteros',
    title: 'Software Engineer',
    pitch: 'Experta en el desarrollo de soluciones de software robustas y escalables que impulsan la eficiencia operativa.',
    imageUrl: 'https://i.pravatar.cc/150?u=andrea.ballesteros',
  },
  {
    name: 'Lic. Andrea Lorena Romero',
    title: 'Project Manager',
    pitch: 'Líder en la gestión de proyectos tecnológicos, asegurando entregas a tiempo y dentro del presupuesto con metodologías ágiles.',
    imageUrl: 'https://i.pravatar.cc/150?u=andrea.romero',
  },
  {
    name: 'Lic. Vanessa Carpio',
    title: 'Analista de Datos',
    pitch: 'Especialista en transformar datos complejos en insights accionables para la toma de decisiones estratégicas.',
    imageUrl: 'https://i.pravatar.cc/150?u=vanessa.carpio',
  },
  {
    name: 'Lic. Emiliano Passarello',
    title: 'Consultor Comercial',
    pitch: 'Apasionado por conectar las necesidades del cliente con soluciones de IA que generan un impacto real en el negocio.',
    imageUrl: 'https://i.pravatar.cc/150?u=emiliano.passarello',
  },
  {
    name: 'Ing. Alfredo Pablo Lawler',
    title: 'Infraestructura & Cloud',
    pitch: 'Arquitecto de soluciones en la nube, garantizando una infraestructura segura, escalable y de alto rendimiento.',
    imageUrl: 'https://i.pravatar.cc/150?u=alfredo.lawler',
  },
];

const TeamMemberCard: React.FC<TeamMember> = ({ name, title, pitch, imageUrl }) => (
  <div className="text-center p-6 bg-slate-800/50 rounded-lg shadow-lg border border-slate-700/50 flex flex-col items-center transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-2 hover:shadow-cyan-500/10">
    <img className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-cyan-400/50 group-hover:border-cyan-300 transition-colors" src={imageUrl} alt={`Foto de ${name}`} />
    <h3 className="text-lg font-medium text-white">{name}</h3>
    <p className="text-cyan-400 text-sm font-medium">{title}</p>
    <p className="mt-2 text-base text-slate-400 flex-grow">{pitch}</p>
  </div>
);

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 sm:py-32 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold tracking-wider text-cyan-400 uppercase">Nuestro Equipo</h2>
          <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
            Profesionales Apasionados
          </p>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-300">
            Conocé a las mentes detrás de VAE AI Consulting. Combinamos experiencia, estrategia y una visión humana para impulsar tu negocio.
          </p>
        </div>
        
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
