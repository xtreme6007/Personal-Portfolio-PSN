import React from 'react'
import Container from 'react-bootstrap/Container'
import ProjectCard from '../ProjectCard'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/col'


function ProjectContainer() {




    return (
        <Container className="Main" >
            <Row>
                <Col>
                <ProjectCard
                    img={"./assets/img/MiddlePoint.png"}
                    title={"Middle Point"}
                    description={"Going somewhere far? Meeting somebody close? Middle Point finds the perfect location for all occasions!"}
                    deployed={"https://xtreme6007.github.io/Middle-Point-TAPS/"}
                    repo={"https://rb.gy/m4oz1e"}
                />
                </Col>
                <Col>
                <ProjectCard
                    img={"./assets/img/White-Glove-Detailing.png"}
                    title={"White Glove Detailing"}
                    description={"This application is the basis for a company that provides car detailing services while a customer is shopping at malls, grocery stores, etc..."}
                    deployed={"https://shop-and-fix.herokuapp.com/"}
                    repo={"https://github.com/xtreme6007/shop-and-fix.git"}
                />
                </Col>
                <Col>
                <ProjectCard
                    img={"./assets/img/WorkEm.png"}
                    title={"Work-Em-Out"}
                    description={"This application is designed to track and compare your workout history. Use it to add, remove, and complete workouts as you go."}
                    deployed={"https://sleepy-forest-69419.herokuapp.com/"}
                    repo={"https://github.com/xtreme6007/WorkOut-psn.git"}
                />
                </Col>

            </Row>
        </Container>







    );



}

export default ProjectContainer