import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import InteractiveBackground from './components/InteractiveBackground';
import BlinkCharacter from './components/BlinkCharacter';
import { motion } from "motion/react"
import About from './sections/About';
import FeaturedProjects from './sections/FeaturedProjects';
import MoreToExplore from './sections/MoreToExplore';
import Footer from './sections/Footer';
import Links from "./pages/Links";

const Home = () =>{
  return(<>
  {/* ===== MOBILE FLOATING CHARACTER ===== */}
    <motion.div className="fixed bottom-0 right-0 z-40 md:hidden h-[auto] w-[45vw] pointer-events-none"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 1.5 }}>
      <div className="h-[110px]">
        <BlinkCharacter />
      </div>
    </motion.div>
     <motion.div className="hidden md:block absolute right-35 top-[42%] -translate-y-1/2 h-[70vh] w-[45vw] pointer-events-none"
     initial={{ opacity: 0, x: 80 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, delay: 1.8 }}>
        <BlinkCharacter />
    </motion.div>
    <div  className="container mx-auto max-w-7xl relative">
      <Navbar/>
      <Hero/>
      <About/>
      <FeaturedProjects/>
      <MoreToExplore/>
      <Footer/>
    </div>
    </>)
}

const App = () => {
  return (
    <Router>
    <InteractiveBackground/>

      <Routes>
        <Route path="/Portfolio" element={<Home />} />
        <Route path="/Portfolio/links" element={<Links />} />
      </Routes>
    </Router>
  );
};

export default App;