
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
    { icon: CloudIcon, title: "Cloud Computing & Soluciones en la Nube", description: "Infraestructura escalable, segura y accesible en AWS, Google Cloud y Azure." },
    { icon: CogIcon, title: "Automatización de Procesos", description: "Digitalizamos tus flujos de trabajo con IA para reducir tiempos, errores y costos." },
    { icon: CodeIcon, title: "Desarrollo Web Inteligente", description: "Sitios modernos con IA, asistentes virtuales y SEO inteligente." },
    { icon: ChatBubbleIcon, title: "Chatbots & Asistentes Virtuales", description: "Diseñamos chatbots personalizados entrenados con los datos de tu negocio." },
    { icon: CubeIcon, title: "Desarrollo de SaaS con IA", description: "Convertimos tus ideas en aplicaciones SaaS escalables con IA integrada." },
    { icon: FilmIcon, title: "Monetización de Contenido con IA", description: "Estrategias con IA para doblajes, traducciones, guiones y SEO automatizado." },
    { icon: ChartBarIcon, title: "Análisis de Datos & BI", description: "Dashboards y modelos predictivos para tomar decisiones basadas en datos reales." },
    { icon: BrainIcon, title: "Consultoría Estratégica en IA", description: "Diseñamos un plan de adopción de IA con impacto medible para tu organización." },
    { icon: PuzzleIcon, title: "Desarrollo de Software Inteligente", description: "Soluciones a medida con metodologías ágiles para logística, salud, agro y más." },
    { icon: TargetIcon, title: "Automatización de Leads y Ventas", description: "Sistemas de IA que atraen, califican y gestionan leads automáticamente." },
    { icon: AcademicCapIcon, title: "Mentorías & Capacitación en IA", description: "Mentorías y formación práctica para equipos técnicos y de gestión." },
];

const ServiceCard: React.FC<Service> = ({ icon: Icon, title, description }) => (
    <div className="relative p-6 bg-slate-800/50 rounded-lg shadow-lg border border-slate-700/50 transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-2 hover:shadow-cyan-500/10">
        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gradient-to-br from-blue-500 to-cyan-400 text-white">
            <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <div className="mt-5">
            <h3 className="text-lg font-medium text-white">{title}</h3>
            <p className="mt-2 text-base text-slate-400">{description}</p>
        </div>
    </div>
);

const Services: React.FC = () => {
    return (
        <section id="services" className="py-20 sm:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold tracking-wider text-cyan-400 uppercase">Nuestros Servicios</h2>
                    <p className="mt-2 text-3xl font-extrabold text-white tracking-tight sm:text-4xl">
                        Soluciones Inteligentes para tu Crecimiento
                    </p>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-300">
                        En VAE, combinamos estrategia, tecnología y creatividad para diseñar soluciones que optimizan tus operaciones y potencian tus resultados.
                    </p>
                </div>

                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <ServiceCard key={service.title} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
