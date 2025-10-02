import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} /> {/* Default home page */}
        <Route path="/projects" element={<Projects />} /> {/* Projects page */}
        <Route path="/about" element={<About />} /> {/* About page */}
        <Route path="/contact" element={<Contact />} /> {/* Contact page */}
        <Route path='/resume' element={<Resume/>}/>
      </Routes>
    </Router>
  );
};

export default App;