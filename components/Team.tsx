
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
    title: 'Calidad y Desarrollo Humano',
    pitch: 'Ingeniera Química con especialización en calidad y una profunda vocación por el desarrollo de personas. He combinado docencia, auditoría y liderazgo comercial, y ahora integro la IA para mejorar la comunicación y optimizar resultados.',
    imageUrl: 'https://i.pravatar.cc/150?u=andrea.ballesteros',
  },
  {
    name: 'Lic. Andrea Lorena Romero',
    title: 'Líder de Proyectos y Transformación',
    pitch: 'Con más de 20 años en IT, lidero transformaciones digitales complejas. Me especializo en alinear procesos, anticipar riesgos y desarrollar equipos autónomos para lograr resultados sostenibles y escalables. Cada entrega es mi firma profesional.',
    imageUrl: 'https://i.pravatar.cc/150?u=andrea.romero',
  },
  {
    name: 'Lic. Vanessa Carpio',
    title: 'Desarrolladora de IA y Automatización',
    pitch: 'Con base en infraestructura IT y Python, desarrollo soluciones de IA. Mi experiencia en automatización industrial, ciencia de datos y MLOps me permite crear soluciones escalables y eficientes para diversos sectores.',
    imageUrl: 'https://i.pravatar.cc/150?u=vanessa.carpio',
  },
  {
    name: 'Lic. Emiliano Passarello',
    title: 'Especialista en IA Conversacional',
    pitch: 'Diseño e implemento asistentes conversacionales con RAG y agentes que conectan conocimiento propio con respuestas confiables: preparación y chunking, embeddings, retrieval/re-ranking, guardrails y citación de fuente.',
    imageUrl: 'https://i.pravatar.cc/150?u=emiliano.passarello',
  },
  {
    name: 'Ing. Alfredo Pablo Lawler',
    title: 'Estratega en Tecnología e IA',
    pitch: 'Ingeniero con +25 años de experiencia en tech. Lideré transformaciones en Telefónica y modernicé un centro de diagnóstico. Hoy uno la gestión estratégica con la innovación en IA para generar soluciones de alto impacto.',
    imageUrl: 'https://i.pravatar.cc/150?u=alfredo.lawler',
  },
];

const teamMembersFull: TeamMember[] = [
  {
    name: 'Ing. Andrea Cristina Ballesteros',
    title: 'Calidad y Desarrollo Humano',
    pitch: 'Soy Andrea Ballesteros, Ingeniera Química con especialización en calidad y una profunda vocación por el desarrollo de personas. A lo largo de mi trayectoria combiné la docencia, la auditoría y el liderazgo comercial, formando equipos, potenciando talentos y acompañando procesos de crecimiento personal y profesional. En los últimos años me capacité en Inteligencia Artificial, marketing y análisis de datos, integrando la tecnología como una herramienta para mejorar la comunicación, optimizar resultados y generar valor en cada proyecto.',
    imageUrl: 'https://i.pravatar.cc/150?u=andrea.ballesteros',
  },
  {
    name: 'Lic. Andrea Lorena Romero',
    title: 'Líder de Proyectos y Transformación',
    pitch: "Hola, soy Andrea Romero. Lidero con calma, ejecuto con precisión y transformo con impacto. Tengo más de 20 años de experiencia en IT, liderando proyectos de transformación digital, integraciones de sistemas y creación de áreas desde cero en entornos corporativos complejos. Me especializo en ordenar lo que está desalineado, anticipar riesgos y generar resultados sostenibles con equipos que crecen y se vuelven autónomos. Me apasiona crear entornos de trabajo donde las personas se alineen, colaboren y superen sus propios límites, mientras la operación se vuelve más eficiente, previsible y escalable. En cada proyecto, dejo capacidades instaladas, elevo el estándar de los equipos y aseguro que el negocio avance con foco y solidez. Porque para mí, cada entrega es más que un resultado: es mi firma profesional.",
    imageUrl: 'https://i.pravatar.cc/150?u=andrea.romero',
  },
   {
    name: 'Lic. Vanessa Carpio',
    title: 'Desarrolladora de IA y Automatización',
    pitch: "Soy Vanessa Carpio. Cuento con una sólida base en infraestructura IT, programación avanzada en Python y experiencia en automatización industrial. Actualmente estoy aplicando mis conocimientos en VAE, donde participo en el desarrollo de soluciones basadas en inteligencia artificial. Mi formación incluye el cursado avanzado de Ingeniería en Sistemas, complementado con implementación, diplomados y capacitaciones en automatización, ciencia de datos, visión por computadora y MLOps, lo que me permite integrar tanto la perspectiva técnica como la estratégica en los proyectos. Me caracterizo por una constante capacitación en nuevas tecnologías, la capacidad de adaptación a entornos complejos y una mirada analítica que conecta la infraestructura IT con el desarrollo de soluciones innovadoras de IA. Mi valor diferencial está en combinar experiencia práctica en proyectos industriales y de salud con una mentalidad de aprendizaje continuo, aportando soluciones escalables, eficientes y aplicables a distintos sectores.",
    imageUrl: 'https://i.pravatar.cc/150?u=vanessa.carpio',
  },
  {
    name: 'Lic. Emiliano Passarello',
    title: 'Especialista en IA Conversacional',
    pitch: 'Soy Emiliano Passarello. Diseño e implemento asistentes conversacionales con RAG y agentes que conectan conocimiento propio con respuestas confiables: preparación y chunking , embeddings, retrieval/re-ranking, guardrails , citación de fuente.',
    imageUrl: 'https://i.pravatar.cc/150?u=emiliano.passarello',
  },
  {
    name: 'Ing. Alfredo Pablo Lawler',
    title: 'Estratega en Tecnología e IA',
    pitch: 'Soy Alfredo Lawler, Ingeniero Electrónico con más de 25 años de experiencia liderando proyectos de tecnología en telecomunicaciones, salud e inteligencia artificial. Trabajé en Telefónica en posiciones regionales para Latinoamérica, gestionando equipos de más de 200 personas y grandes procesos de transformación digital. Luego, llevé adelante la modernización tecnológica de un centro de diagnóstico por imágenes durante más de una década. En paralelo, soy productor agropecuario, donde logré duplicar la producción de mi establecimiento aplicando gestión e innovación. Hoy me especializo en inteligencia artificial y machine learning, desarrollando aplicaciones con Python, LangChain y frameworks modernos, además de capacitar profesionales en IA aplicada. Mi propuesta es unir la experiencia de gestión estratégica con la innovación tecnológica, para generar soluciones de impacto en negocios y organizaciones.',
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
        
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {teamMembersFull.map((member) => (
            <TeamMemberCard key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
