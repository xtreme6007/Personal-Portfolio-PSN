import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';

import Row from 'react-bootstrap/row'
import Col from 'react-bootstrap/Col'




 function Footer()  {
    
return (
<div style={{color: 'white'}}>

<Navbar fixed="bottom" bg="dark" style={{height:'100px'}} className="mt-auto"> 
Contact Me Here:
<Nav className="mr-auto">
    <Row>
<Col><Nav.Link href="https://github.com/xtreme6007" className="mx-center"><FaGithub /></Nav.Link></Col>
<Col><Nav.Link href="https://www.linkedin.com/in/preston-nichols-1aa72084/"><FaLinkedin /></Nav.Link></Col>
<Col><Nav.Link  href={'mailto:prestonnichols96@gmail.com'}><FaMailBulk /></Nav.Link></Col>

</Row>


</Nav>



</Navbar>

</div>


)



}


export default Footer