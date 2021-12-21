import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Login from './components/Login';
import Error from './components/Error';
import {
  BrowserRouter as Router,
 Routes,
  Route,
} from "react-router-dom";
const App = () => {
  return (
    <>
    <Router>
     <Navbar/>
     <Routes>
          <Route exact path="/"  element={<Home/>}/>
          
          <Route exact path="/about" element={<About/>}/>
          
          <Route exact path="/services" element={<Services/>}/>
          
          <Route exact path="/contact" element={<Contact/>}/>
          
          <Route exact path="/signup" element={<Signup/>}/>
          
          <Route exact path="/login" element={<Login/>}/>

          <Route exact element={<Error/>}/>
         
        </Routes>
        </Router>
    </>
  )
}

export default App
