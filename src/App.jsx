import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import InteractiveBackground from './components/InteractiveBackground';
import About from './sections/About';
import FeaturedProjects from './sections/FeaturedProjects';
import MoreToExplore from './sections/MoreToExplore';
import Footer from './sections/Footer';
import Links from "./pages/Links";

const Home = () => {
  return (
    <div className="container mx-auto max-w-5xl relative">
      <Navbar />
      <Hero />
      <About />
      <FeaturedProjects />
      <MoreToExplore />
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <InteractiveBackground />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/links" element={<Links />} />
      </Routes>
    </Router>
  );
};

export default App;
