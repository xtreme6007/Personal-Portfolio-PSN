import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'



// this component will be used in the project container component to render each project 
const ProjectCard = (props) => {

  return (
    <div style={{height:'100px', color: "white", margin:"10px" }} >
      <Card style={{ width: '20rem'}} bg="dark">
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text style={{height:'100px' }}>
            {props.description}
          </Card.Text>
          <Button variant="primary" href={props.deployed}>Deployed Link</Button> <Button variant="primary" href={props.repo}>GitHub Repo</Button>
        </Card.Body>
      </Card>


    </div>


  )


}


export default ProjectCard