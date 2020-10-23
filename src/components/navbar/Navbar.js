import React from 'react'
// import styled from 'styled-components';
import "./Navbar.css"


function Navbar() {
  return (
    <div className="nav__container">
      <h1>Enjoy</h1>
      <div className="nav__menu">
        <ul>
          <a href="#">sign up</a>
        </ul>
        <a href="#"><i class="fab fa-instagram icon"></i></a>
      </div>
    </div>
  )
}

export default Navbar
