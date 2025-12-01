
import React from 'react';
import { 
    CloudIcon, CogIcon, CodeIcon, ChatBubbleIcon, CubeIcon, FilmIcon, 
    ChartBarIcon, BrainIcon, TargetIcon, AcademicCapIcon, PuzzleIcon 
} from './Icons';

interface Service {
    icon: React.ElementType;
    title: string;
    description: string;
}

const services: Service[] = [
    { icon: CloudIcon, title: "Cloud Computing", description: "Infraestructura escalable y segura en AWS, Google Cloud y Azure." },
    { icon: CogIcon, title: "Automatización", description: "Digitalizamos flujos con IA para reducir tiempos y costos." },
    { icon: CodeIcon, title: "Desarrollo Web", description: "Sitios modernos con IA, asistentes virtuales y SEO inteligente." },
    { icon: ChatBubbleIcon, title: "Chatbots IA", description: "Asistentes personalizados entrenados con tus datos." },
    { icon: CubeIcon, title: "SaaS Development", description: "Aplicaciones SaaS escalables con IA integrada desde el núcleo." },
    { icon: FilmIcon, title: "Content AI", description: "Estrategias de monetización y generación de contenido." },
    { icon: ChartBarIcon, title: "Data & BI", description: "Dashboards predictivos para decisiones basadas en datos." },
    { icon: BrainIcon, title: "Consultoría IA", description: "Planes de adopción de IA con impacto medible." },
    { icon: PuzzleIcon, title: "Software a Medida", description: "Soluciones ágiles para logística, salud y agro." },
    { icon: TargetIcon, title: "Leads Automation", description: "Sistemas que atraen y califican leads automáticamente." },
    { icon: AcademicCapIcon, title: "Capacitación", description: "Mentorías prácticas para equipos técnicos y de gestión." },
];

const ServiceCard: React.FC<Service> = ({ icon: Icon, title, description }) => (
    <div className="group relative p-8 bg-slate-800/40 rounded-2xl border border-slate-700/50 hover:bg-slate-800 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-900/20 hover:-translate-y-2">
        <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <svg className="w-6 h-6 text-slate-600 group-hover:text-cyan-400 transform group-hover:rotate-45 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" /></svg>
        </div>
        <div className="w-14 h-14 rounded-xl bg-slate-900 border border-slate-700 group-hover:border-cyan-500/50 flex items-center justify-center mb-6 transition-colors shadow-lg">
            <Icon className="h-7 w-7 text-cyan-400 group-hover:text-white transition-colors" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">{title}</h3>
        <p className="text-slate-400 leading-relaxed text-sm">{description}</p>
    </div>
);

const Services: React.FC = () => {
    return (
        <section id="services" className="py-24 bg-slate-900 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-sm font-bold tracking-widest text-cyan-400 uppercase mb-3">Servicios</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-white">
                            Soluciones Inteligentes para tu <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Crecimiento Digital</span>
                        </h3>
                    </div>
                    <p className="text-slate-400 max-w-md text-right md:text-left">
                        Estrategia, tecnología y creatividad unidas para optimizar tus operaciones.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {services.map((service) => (
                        <ServiceCard key={service.title} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
