import React, { useState } from "react";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg';
import './navbar.css'


function Menu() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <p><a href="#home" onClick={() => scrollToSection("home")}>Home</a></p>
      <p><a href="#wgpt3" onClick={() => scrollToSection("wgpt3")}>What is GPT3?</a></p>
      <p><a href="#possibility" onClick={() => scrollToSection("possibility")}>Open AI</a></p>
      <p><a href="#features" onClick={() => scrollToSection("features")}>Case Studies</a></p>
      <p><a href="#blog" onClick={() => scrollToSection("blog")}>Library</a></p>
    </>
  )
}
 
function Navbar() {

  const [ toggleMenu, setToggleMenu ] = useState(false)


  return (
    <div className="gpt3__navbar">
        <div className="gpt3__navbar-links">
            <div className="gpt3__navbar-links_logo">
              <img src={logo} alt="logo" />
            </div>
        
            <div className="gpt3__navbar-links_container">
              <Menu />
            </div>
        </div>


        <div className="gpt3__navbar-sign">
          <p>Sign in</p>
          <button type="button">Sign up</button>
        </div>

        <div className="gpt3__navbar-menu" >
            {toggleMenu
              ? <RiCloseLine color ="#fff" size={27} onClick={() => setToggleMenu(false) } />
              : <RiMenu3Line color ="#fff" size={27} onClick={() => setToggleMenu(true) } />
            }

            {toggleMenu && (
              <div className="gpt3__navbar-menu_container scale-up-center">
                <div className="gpt3__navbar-menu_container-links">
                <Menu />

                  <div className="gpt3__navbar-menu_container-links-sign">
                    <p>Sign in</p>
                    <button type="button">Sign up</button>
                  </div>

                </div>
              </div>
            )}

        </div>
    </div>
  )
}

export default Navbar