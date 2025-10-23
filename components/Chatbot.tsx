
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI, Chat } from "@google/genai";
import { ChatBotIcon, CloseIcon } from './Icons';

const RAG_CONTEXT = `
Elevator Pitch General de VAE AI Consulting Group:
Somos un grupo de profesionales con trayectorias complementarias en ingeniería, tecnología, calidad, gestión y desarrollo humano. Nos une un propósito común: ayudar a las organizaciones a evolucionar, optimizando procesos, potenciando a las personas y aplicando tecnología e inteligencia artificial para impulsar negocios sostenibles y escalables.

Propósito y Experiencia (Sección "Sobre Nosotros"):
Nuestro propósito es impulsar negocios sostenibles y escalables. Ayudamos a las organizaciones a evolucionar, optimizando procesos, potenciando a las personas y aplicando tecnología e inteligencia artificial. Integramos más de 20 años de experiencia en dirección de proyectos, automatización industrial, infraestructura IT, análisis de datos, marketing y liderazgo de equipos, aplicando enfoques prácticos que generan resultados medibles y duraderos. Nuestro valor diferencial está en combinar la experiencia corporativa y técnica con una mirada humana y estratégica, promoviendo el desarrollo de equipos autónomos.

Listado de Servicios:
- Cloud Computing & Soluciones en la Nube: Infraestructura escalable, segura y accesible en AWS, Google Cloud y Azure.
- Automatización de Procesos: Digitalizamos tus flujos de trabajo con IA para reducir tiempos, errores y costos.
- Desarrollo Web Inteligente: Sitios modernos con IA, asistentes virtuales y SEO inteligente.
- Chatbots & Asistentes Virtuales: Diseñamos chatbots personalizados entrenados con los datos de tu negocio.
- Desarrollo de SaaS con IA: Convertimos tus ideas en aplicaciones SaaS escalables con IA integrada.
- Monetización de Contenido con IA: Estrategias con IA para doblajes, traducciones, guiones y SEO automatizado.
- Análisis de Datos & BI: Dashboards y modelos predictivos para tomar decisiones basadas en datos reales.
- Consultoría Estratégica en IA: Diseñamos un plan de adopción de IA con impacto medible para tu organización.
- Desarrollo de Software Inteligente: Soluciones a medida con metodologías ágiles para logística, salud, agro y más.
- Automatización de Leads y Ventas: Sistemas de IA que atraen, califican y gestionan leads automáticamente.
- Mentorías & Capacitación en IA: Mentorías y formación práctica para equipos técnicos y de gestión.

Información del Equipo:
- Ing. Andrea Cristina Ballesteros (Calidad y Desarrollo Humano): Ingeniera Química especialista en calidad y desarrollo de personas. Integra IA, marketing y análisis de datos para mejorar la comunicación y optimizar resultados.
- Lic. Andrea Lorena Romero (Líder de Proyectos y Transformación): Con más de 20 años en IT, lidera transformaciones digitales. Se especializa en alinear procesos, anticipar riesgos y desarrollar equipos autónomos para lograr resultados sostenibles y escalables.
- Lic. Vanessa Carpio (Desarrolladora de IA y Automatización): Con base en infraestructura IT y Python, desarrolla soluciones de IA, aplicando su experiencia en automatización industrial, ciencia de datos y MLOps para crear soluciones escalables.
- Lic. Emiliano Passarello (Especialista en IA Conversacional): Diseña e implementa asistentes conversacionales con RAG y agentes que conectan conocimiento propio con respuestas confiables usando técnicas como chunking, embeddings y guardrails.
- Ing. Alfredo Pablo Lawler (Estratega en Tecnología e IA): Ingeniero con más de 25 años de experiencia. Lideró grandes transformaciones digitales en Telefónica y modernizó un centro de diagnóstico. Une gestión estratégica con innovación en IA para generar soluciones de alto impacto.

Información de Contacto:
El correo electrónico para contactar al equipo es grupo.vae.app.developers@gmail.com.
`;

const systemInstruction = `Eres un asistente virtual amigable y profesional para VAE AI Consulting Group. Tu nombre es VAE-Bot. Tu objetivo es responder las preguntas del usuario sobre la empresa, sus servicios y su equipo. Basa tus respuestas ÚNICAMENTE en el siguiente contexto proporcionado. Si la respuesta a una pregunta no se encuentra en el contexto, responde amablemente que no tienes esa información y sugiere que contacten al equipo a través del correo electrónico. No inventes información. Sé conciso y directo. Responde siempre en español.

Contexto de VAE AI Consulting Group:
---
${RAG_CONTEXT}
---
`;

interface Message {
    sender: 'user' | 'bot';
    text: string;
}

const Chatbot: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { sender: 'bot', text: '¡Hola! Soy VAE-Bot, tu asistente virtual. ¿Cómo puedo ayudarte a conocer más sobre VAE AI Consulting?' }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [chat, setChat] = useState<Chat | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (isOpen && !chat) {
            try {
                const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
                const newChat = ai.chats.create({
                    model: 'gemini-2.5-flash',
                    config: {
                        systemInstruction: systemInstruction,
                    },
                });
                setChat(newChat);
            } catch (error) {
                console.error("Error initializing Gemini Chat:", error);
                setMessages(prev => [...prev, { sender: 'bot', text: 'Hubo un error al iniciar el chat. Por favor, intenta de nuevo más tarde.' }]);
            }
        }
    }, [isOpen, chat]);


    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading || !chat) return;

        const userMessage: Message = { sender: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await chat.sendMessage({ message: input });
            const botMessage: Message = { sender: 'bot', text: response.text };
            setMessages(prev => [...prev, botMessage]);
        } catch (error) {
            console.error("Error sending message to Gemini:", error);
            const errorMessage: Message = { sender: 'bot', text: 'Lo siento, no pude procesar tu solicitud en este momento. Inténtalo de nuevo.' };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Chat Bubble */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-500 to-cyan-400 text-white w-16 h-16 rounded-full shadow-lg flex items-center justify-center transform hover:scale-110 transition-transform duration-300 z-50"
                aria-label="Abrir chat"
            >
                {isOpen ? <CloseIcon className="w-8 h-8" /> : <ChatBotIcon className="w-8 h-8" />}
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 w-full max-w-sm h-[60vh] bg-slate-800/90 backdrop-blur-md rounded-xl shadow-2xl flex flex-col z-50 border border-slate-700">
                    {/* Header */}
                    <div className="p-4 border-b border-slate-700">
                        <h3 className="text-lg font-semibold text-white text-center">Asistente Virtual VAE</h3>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 p-4 overflow-y-auto space-y-4">
                        {messages.map((msg, index) => (
                            <div key={index} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[80%] rounded-lg px-3 py-2 ${msg.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-200'}`}>
                                    <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                                </div>
                            </div>
                        ))}
                        {isLoading && (
                             <div className="flex justify-start">
                                <div className="bg-slate-700 text-slate-200 rounded-lg px-3 py-2">
                                    <p className="text-sm animate-pulse">Escribiendo...</p>
                                </div>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="p-4 border-t border-slate-700">
                        <form onSubmit={handleSendMessage} className="flex space-x-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Escribe tu pregunta..."
                                disabled={isLoading}
                                className="flex-1 bg-slate-700 border border-slate-600 rounded-full py-2 px-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                            />
                            <button
                                type="submit"
                                disabled={isLoading || !input.trim()}
                                className="bg-cyan-500 text-white rounded-full w-10 h-10 flex-shrink-0 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-110 transition-transform"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                  <path d="M3.105 2.289a.75.75 0 00-.826.95l1.414 4.949a.75.75 0 00.95.826L11.25 8.25l-6.507-1.084a.75.75 0 00-.95.826l1.414 4.949a.75.75 0 00.95.826L11.25 11.75l-6.507-1.084a.75.75 0 00-.95.826l1.414 4.949a.75.75 0 00.95.826L16.25 12l-13.145-9.711z" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default Chatbot;
