import React from 'react';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import NavBar from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import Contact from './components/Contact/Contact';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from './components/Footer/Footer';
import PageTemplate from './components/PageTemplate/PageTemplate';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <PageTemplate>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
        </PageTemplate>
      <Footer/>
    </div>
  );
}

export default App;
