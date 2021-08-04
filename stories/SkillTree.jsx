import React from 'react';
import Tree from 'react-animated-tree-v2'
import styles from '../styles/skilltree.module.css'
import {Col, Container, Row} from "react-bootstrap";
import PropTypes from "prop-types";

export const SkillTree = ({project}) => {
    const SKT = props => <Tree {...props} springConfig={config} />

    // Just normal react-spring animation configuration
    const config = open => ({
        from: { height: 0, opacity: 0, transform: 'translate3d(20px,0,0)' },
        to: {
            height: open ? 'auto' : 0,
            opacity: open ? 1 : 0,
            transform: open ? 'translate3d(0,0,0)' : 'translate3d(20px,0,0)',
        },
    })


    function createSkillCell(data) {
        let index = 0
        return data.map((skill) => {
            index += 1
            return <SKT content={skill} key={index} />
        })
    }

    function renderFrontend() {
        return (
            <SKT content="Frontend" className={styles.treeview} open={true} style={{}}>
                <SKT content="Languages" open={true}>
                    {createSkillCell(project.frontend.languages)}
                </SKT>
                <SKT content="Frameworks" open={true}>
                    {createSkillCell(project.frontend.frameworks)}
                </SKT>
            </SKT>
            )
    }

    function renderBackend() {
        if (project.backend) {
            return (
                <SKT content="Backend (Server)" className={styles.treeview} open={true}>
                    <SKT content="Languages" open={true}>
                        {createSkillCell(project.backend.languages)}
                    </SKT>
                    <SKT content="Frameworks" open={true}>
                        {createSkillCell(project.backend.frameworks)}
                    </SKT>
                </SKT>
            )
        }
        return null;
    }


    return (
        <Container>
            <Row>
                <Col>
                    {renderFrontend()}
                </Col>

                <Col>
                    {renderBackend()}
                </Col>
            </Row>
        </Container>
    );
}

SkillTree.propTypes = {
    /**
     * the project that will display all the skills for that specific project
     */
    project: PropTypes.shape({
        project: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image: PropTypes.string,
        website: PropTypes.string,
        frontend: PropTypes.shape({
            languages: PropTypes.arrayOf(PropTypes.string).isRequired,
            frameworks: PropTypes.arrayOf(PropTypes.string).isRequired
        }).isRequired,
        backend: PropTypes.shape({
            languages: PropTypes.arrayOf(PropTypes.string),
            frameworks: PropTypes.arrayOf(PropTypes.string)
        }),
    }).isRequired
};


SkillTree.defaultProps = {};
