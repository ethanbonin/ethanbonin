import React from 'react';
import styles from '../styles/projectcard.module.css'
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

export const ProjectCard = ({ project, callBack }) => {
    const handleOnClick = () => {
        callBack(project.project)
    }

    return (
        <Card
            bsPrefix={"project"}
            className={styles.project}
            style={{ width: '18rem' }}
            onClick={handleOnClick}
        >
            { project.image ?
                <Card.Img variant="top" src={project.image} />
                :
                null
            }
            {
                project.website ? (
                        <Card.Body styles={{backgroundColor: "white"}}>
                            <a href={"/"}>
                                {project.website}
                            </a>
                        </Card.Body>
                    )
                    :
                    null
            }
            <Card.Body>
                { !project.image ?
                    <Card.Title>
                        {project.project}
                    </Card.Title>
                    :
                    null
                }
                <Card.Text>
                    {project.description}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

ProjectCard.propTypes = {
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
    }).isRequired,
    /**
     * The function to call back which card
     */
    callBack: PropTypes.func
};


ProjectCard.defaultProps = {};
