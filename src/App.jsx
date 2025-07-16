
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import HomePage from './pages/HomePage.jsx';  

const App = () => {

  return (
    <>
      <Router>
          <Routes>
           <Route path="/" element={<HomePage />} />
          </Routes>
      </Router>
    </>
  );
};

export default App;