/**
 * ===========================================================================
 * @Author: Ramiro Luiz Nunes
 * @Date:   2024-06-22 19:04:13
 * @Info:   A brief description of the file
 * ===========================================================================
 */

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/Home';
import About from './pages/about/About';
import Game from './pages/game/Game';
import Analysis from './pages/analysis/Analysis';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/game" element={<Game />} />
        <Route path="/analysis" element={<Analysis />} />
      </Routes>
    </Router>
  );
}

export default App;
