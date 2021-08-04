import React from "react"
import PropTypes from "prop-types";
import {ProjectCard} from "./ProjectCard";
import projectSkills from './projectSkills.json';
import { Col, Container, Row } from "react-bootstrap";


/**
 * Primary UI component for user interaction
 */
export const ProjectCardsLayout = ({ callBack }) => {
    return (
           <Container>
               <Row>
                   <Col>
                       <ProjectCard project={projectSkills[0]} callBack={callBack} />
                   </Col>
                   <Col>
                       <ProjectCard project={projectSkills[1]} callBack={callBack} />
                   </Col>
                   <Col>
                       <ProjectCard project={projectSkills[2]} callBack={callBack} />
                   </Col>
               </Row>
           </Container>
    )
}

ProjectCardsLayout.propTypes = {
    /**
     * The function to call back which card
     */
    callBack: PropTypes.func
}

ProjectCardsLayout.defaultProps = {}
