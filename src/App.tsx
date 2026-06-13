import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './components/Portfolio';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Router>
      <div style={{ background: darkMode ? '#0f2027' : '#f5f7fa', color: darkMode ? '#eee' : '#111', minHeight: '100vh' }}>
        {/* Navbar globale */}
        <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />

        <Routes>
          <Route path="/MyPortfolio/" element={<Portfolio darkMode={darkMode}/>} />
          <Route path="/projects" element={<Projects darkMode={darkMode} />} />
          <Route path="/about" element={<About darkMode={darkMode} />} />
          <Route path="/contact" element={<Contact darkMode={darkMode} />} />
          <Route path="/resume" element={<Resume darkMode={darkMode} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;