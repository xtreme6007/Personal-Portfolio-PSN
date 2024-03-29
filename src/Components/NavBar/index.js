import React from 'react'
import { Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar'

import { Link } from "react-router-dom";
// I will use the Component for the Navigation and brand logo plancement


function NavBar() {

  return(  
  <>
   

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/Personal-Portfolio-PSN/"><img src= "assets/img/Brand-logo.png" alt="Brand logo" className="Brand-Img"></img></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <Nav.Link><Link to= "/about" >About Me</Link></Nav.Link>
   <Nav.Link> <Link to="/projects">Projects</Link></Nav.Link>
   <Nav.Link href="https://drive.google.com/file/d/1D9j8s4xTEDVxp3uK-k24L8wt8jOWRFQI/view?usp=sharing">Resume</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>






    </>
  )

}


export default NavBar