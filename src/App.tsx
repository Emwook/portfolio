import React from 'react';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import NavBar from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Contact from './components/Contact/Contact';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Container>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Container>
    </div>
  );
}

export default App;
