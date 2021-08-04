import styles from "../styles/projects.module.css"
// import "bootstrap/dist/css/bootstrap.css"
import React, {useState} from 'react';
import {Footer} from "../stories/Footer";
import {Header} from "../stories/Header";
import {ProjectCardsLayout} from "../stories/ProjectCardsLayout";
import {SkillTree} from "../stories/SkillTree";
import projects from '../stories/projectSkills.json'
import {Col, Container, Row} from "react-bootstrap";
import { convertCardState, initialState } from "../reducers/projectsState";

export const WorkHistory = () => {
    let [state, setState] = useState(initialState)
    return (
        <div className={styles.container}>
            <Header />
            <Container >
                <Row>
                    <Col>
                        <ProjectCardsLayout callBack={(project) => {
                            const card = convertCardState(project)
                            setState({ SELECTED: card })
                        }}/>
                    </Col>
                </Row>
                <Row className={styles.projects}>
                    <Col xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                        <SkillTree project={projects[state.SELECTED]} />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )};


WorkHistory.propTypes = {};
WorkHistory.defaultProps = {};
export default WorkHistory
