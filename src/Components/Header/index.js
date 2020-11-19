import React, { Component } from 'react'
import './style.css'
import ParticlesBg from 'particles-bg'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'


class Header extends Component {
    render () {
      return (
        
        <Container>
          <ParticlesBg type="lines" bg={true}  className="Particles"/>
          <div className="Header">
              <span className="Name">Preston Nichols</span>
              <p className="Description">Full Stack Web Developer with a strive for learning and a passion for programing that has left me with no option but to be successful in the industry.</p>
              <a href="https://github.com/xtreme6007"><Button variant="dark" size="lg" >Github</Button></a>
              </div>
              
         
        </Container>
      )
    }
  }
  export default Header