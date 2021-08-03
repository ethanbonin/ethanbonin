import React from "react"
import {ProjectCard} from "./ProjectCard";
import projectSkills from './projectSkills.json';
import {Col, Container, Row} from "react-bootstrap";


/**
 * Primary UI component for user interaction
 */
export const ProjectCardsLayout = () => {
    return (
           <Container>
               <Row>
                   <Col>
                       <ProjectCard project={projectSkills[0]}/>
                   </Col>
                   <Col>
                       <ProjectCard project={projectSkills[1]}/>
                   </Col>
                   <Col>
                       <ProjectCard project={projectSkills[2]}/>
                   </Col>
               </Row>
           </Container>
    )
}

ProjectCardsLayout.propTypes = {}

ProjectCardsLayout.defaultProps = {}
