import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'



// this component will be used in the project container component to render each project 
const ProjectCard = (props) => {

  return (
    <div style={{ color: "white", margin: "10px" }} >
      <Card style={{ height: "500px", width: '20rem', marginBottom:'10px' }} bg="dark">
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{ height: '100px' }}>
            {props.description}<br />

  <span style={{color: "orange", marginTop:"1px"}}>Technologies used: {props.tech}</span>
          </Card.Text>
          
        </Card.Body>
        <div className="ml-auto mr-auto mb-5"><Button variant="primary" href={props.deployed} >Deployed Link</Button> <Button  variant="primary" href={props.repo}>GitHub Repo</Button></div>
      </Card>


    </div>


  )


}


export default ProjectCard