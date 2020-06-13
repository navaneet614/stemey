import React from "react";
import classNames from "classnames";
import { Toolbar, AppBar, Button, Typography, IconButton } from '@material-ui/core';
import { withStyles } from 'material-ui/styles';
import Menu from "./Menu";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import stemey from "./STEMEY.png";
export default function Navbar(props) {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 200;
      console.log(window.scrollY, isTop);
      if (!isTop) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    })
  })

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark ${scrolled && 'sticky'} ${!scrolled && 'non-sticky'}`}
      style={{ transition: "0.3s", zIndex: "4" }}>

      <a href="/" style={(scrolled ? { color: "white", fontSize: "30px" } : { color: "white", fontSize: "30px" })}>
        STEMEY
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">

          <li class="nav-item dropdown nav-link active">
            <a style={{color: "black", paddingLeft: "10px", paddingRight: "10px", color: "rgba(0, 0, 0, 0.87)"}}
            class="nav-link dropdown-toggle MuiButtonBase-root MuiButton-root MuiButton-contained" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Teams</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="/biology">Biology</a>
              <a class="dropdown-item" href="/chemistry">Chemistry</a>
              <a class="dropdown-item" href="/physics">Physics</a>
              <a class="dropdown-item" href="/neuroscience">Neuroscience</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="/math">Math</a>
              <a class="dropdown-item" href="/coding">Coding</a>

            </div>
          </li>
          <li class="nav-item active nav-link">
            <Button href="/contact" variant="contained">Contact Us</Button>
          </li>
          <li class="nav-item active nav-link">
            <Button href="/teach" variant="contained">Teach</Button>
          </li>
          {/* <li class="nav-item active nav-link">
            <Button href="/login" variant="contained">Login</Button>
          </li>
          <li class="nav-item active nav-link">
            <Button href="/register" variant="contained">Register</Button>
          </li> */}
          <li class="nav-item active nav-link">
            <Button href="/classes" variant="contained">Classes</Button>
          </li>
        </ul>
      </div>
    </nav>
  )
}




// "/team", "/login", "/register"




//  <Button href="/team" variant="contained">Team</Button>
//  <Button href="/login" variant="contained">Login</Button>
//  <Button href="/register" variant="contained">Register</Button>