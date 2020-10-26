import React from 'react'
// import styled from 'styled-components';
import "./Navbar.css"


function Navbar() {
  return (
    <div className="nav__container">
      <h1>Enjoy</h1>
      <div className="nav__menu">
        <ul>
          <a href="https://guestlist.co/events/665121">sign up</a>
        </ul>
        <a href="https://www.instagram.com/enjoymvt.fm/"><i class="fab fa-instagram icon"></i></a>
      </div>
    </div>
  )
}

export default Navbar
