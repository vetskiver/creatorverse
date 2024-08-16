import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowCreators from './pages/ShowCreators';
import AddCreator from './pages/AddCreator';
import ViewCreator from './pages/ViewCreator';
import EditCreator from './pages/EditCreator';
import ParticlesComponent from './particles';

import './App.css';

const App = () => {
  return (
    <>
      <ParticlesComponent id="particles" /> {/* Particles in the background */}
      <Router>
        <Routes>
          <Route path="/" element={<ShowCreators />} />
          <Route path="/add" element={<AddCreator />} />
          <Route path="/view/:id" element={<ViewCreator />} />
          <Route path="/edit/:id" element={<EditCreator />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
