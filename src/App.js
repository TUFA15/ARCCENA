import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Statistics from './components/Statistics';
import Development from './components/Development';
import Portfolio from './components/Portfolio';
import JoinNetwork from './components/JoinNetwork';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import './App.css';
import './components/InteractiveAnimations.css';
import { setupScrollAnimations } from './utils/scrollAnimations';

function App() {
  useEffect(() => {
    setupScrollAnimations();
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Statistics />
      <Development />
      <Portfolio />
      <JoinNetwork />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}

export default App;