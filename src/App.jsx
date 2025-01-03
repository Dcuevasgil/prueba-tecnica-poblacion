import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ContinentView from './pages/ContinentView';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/continent/:continentName" element={<ContinentView />} />
      </Routes>
    </Router>
  );
}

export default App;