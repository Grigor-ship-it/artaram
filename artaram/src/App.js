// App.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import Bio from './components/Bio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-out-cubic',
      once: false,
      mirror: true
    });
  
    // Refresh after a slight delay to allow full DOM mount
    setTimeout(() => {
      AOS.refreshHard(); // More thorough than AOS.refresh()
    }, 500);
  }, []);
  

  return (
    <>
    <Navbar />  
      <Hero />
      <Gallery />
      <Bio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
