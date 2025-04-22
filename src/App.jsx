/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './components/header'; 
import BodySection from './components/bodySection';
import FeaturedCategories from "./components/FeaturedCategories";
import Contact from './components/contact'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';

function App() {
  return (
  <Router>
    <Routes>
      {/* <Route path='/' element={<HomePage/>}/> */}
      <Route path='/' element={<Contact/>}/>
    </Routes>
  </Router> 

    
  );
}

export default App;
