import React from 'react'
import Container from 'react-bootstrap/Container'
import ProjectCard from '../ProjectCard'
import Row from 'react-bootstrap/Row'


function ProjectContainer() {




    return (
        <Container className="Main" >
            <Row>
                <ProjectCard
                    img={"#"}
                    title={"Middle Point"}
                    description={"Going somewhere far? Meeting somebody close? Middle Point finds the perfect location for all occasions!"}
                    deployed={"https://xtreme6007.github.io/Middle-Point-TAPS/"}
                    repo={"https://rb.gy/m4oz1e"}
                />
                <ProjectCard
                    img={"#"}
                    title={"White Glove Detailing"}
                    description={"This application is the basis for a company that provides car detailing services while a customer is shopping at malls, grocery stores, etc..."}
                    deployed={"https://shop-and-fix.herokuapp.com/"}
                    repo={"https://github.com/xtreme6007/shop-and-fix.git"}
                />
                <ProjectCard
                    img={"#"}
                    title={"Work-Em-Out"}
                    description={"This application is designed to track and compare tour workout history"}
                    deployed={"https://sleepy-forest-69419.herokuapp.com/"}
                    repo={"https://github.com/xtreme6007/WorkOut-psn.git"}
                />

            </Row>
        </Container>







    );



}

export default ProjectContainer