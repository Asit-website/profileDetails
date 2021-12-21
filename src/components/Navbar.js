import React from 'react'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <>
      <nav className="navbar" style={{ position: 'relative' }}>
        <div className="logo">
          <h3>Blog</h3>
        </div>

        <div className="nav-section btn-link">
          <ul >
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/signup">Signup</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>

          </ul>

        </div>

        <button className=" nav-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">offcanvas</button>

        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
          <div className="offcanvas-header" style={{position:"relative"}}>
         
            <button style={{float:"right",textAlign:"center",position:"absolute",left:'90%',top:'20%',backgroundColor:'#111'}} type="button" className="btn-close text-reset " data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body" style={{backgroundColor:"#111"}}>
            ...
          </div>
        </div>

      </nav>
    </>
  )
}

export default Navbar
