
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Team from './components/Team';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-slate-900 text-gray-200 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <AboutUs />
          <Services />
          <Team />
          <CallToAction />
        </main>
        <Footer />
      </div>
       <div className="absolute top-0 left-0 w-full h-full bg-grid-slate-800/[0.2] [mask-image:linear-gradient(to_bottom,white_10%,transparent_50%)]"></div>
    </div>
  );
};

export default App;