import React from 'react';
import './style.css'
import Container from 'react-bootstrap/Container'
// i will use this component the intial landing page with a short description of me and my strengths

function AboutMe () {


    return (
    <Container className="AboutContainer">
        <div className="Header">
        <img src ="./assets/img/PortPic.jpeg" className="PortPic" alt ="Portfolio pic" />
        <h1 className="Header">A Little About Me</h1>
            <p className="mb-4">I am a Full-Stack Web Developer with a background in customer service and management. Recognized as a loyal, hardworking, and resourceful problem solver. Excellent client relationship building skills with a dedication to quality. Graduate of Full-Stack Web Development at Southern Methodist University. With a MERN stack focused skillset i also have experince in many other languages and technologies.</p>

        </div>

    </Container>
    )



}

export default AboutMe