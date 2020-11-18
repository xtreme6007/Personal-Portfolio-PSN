import React from 'react'
import { Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'
// I will use the Component for the Navigation and brand logo plancement

function NavBar() {

  return(  <>
    <Navbar  bg="dark" expand="lg">
    <Navbar.Brand href="/"><img src= "./assets/img/Brand-logo.png" alt="Brand logo"></img></Navbar.Brand>
    <Nav.Link href="/about">About Me</Nav.Link>
   <Nav.Link href="/projects">Projects</Nav.Link>
   <Nav.Link href="https://drive.google.com/file/d/1D9j8s4xTEDVxp3uK-k24L8wt8jOWRFQI/view?usp=sharing">Resume</Nav.Link>
  </Navbar>






    </>
  )

}


export default NavBar