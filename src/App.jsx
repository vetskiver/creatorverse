import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Import your pages or components
import ShowCreators from './pages/ShowCreators'; // Page to show all creators
import ViewCreator from './pages/ViewCreator'; // Page to view a single creator
import EditCreator from './pages/EditCreator'; // Page to edit a creator
import AddCreator from './pages/AddCreator'; // Page to add a new creator

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShowCreators />} /> {/* Main page showing all creators */}
        <Route path="view/:id" element={<ViewCreator />} /> {/* Page to view a specific creator */}
        <Route path="edit/:id" element={<EditCreator />} /> {/* Page to edit a specific creator */}
        <Route path="add" element={<AddCreator />} /> {/* Page to add a new creator */}
      </Routes>
    </Router>
  );
};

export default App;
