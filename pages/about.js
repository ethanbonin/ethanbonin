import styles from "../styles/about.module.css"
// import "bootstrap/dist/css/bootstrap.css"
import React from 'react';
import {Footer} from "../stories/Footer";
import {Header} from "../stories/Header";
import {Col, Container, Row} from "react-bootstrap";

export const About = () => (
    <div className={styles.container}>
        <Header />

        <main className={styles.main}>
            <Container >
                <Row>
                    <Col>
                        <h6>Dear reader,</h6>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <br />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>I am completely humble by you taking the time to read my about me.</p>
                        <p>
                            I am full stack engineering who likes to specialize
                            in <a className={styles.a} href={"/projects"}>native mobile development</a>.
                            I&apos;ve worked on small to large scaled SaaS products. Along the way, I have been blessed
                            with the opportunity of hands on UI/UX architecture and design. I have worked on backend
                            technologies with <code className={styles.code}>Node.JS</code>
                            , <code className={styles.code}>ASP.Net (Core 3  & .NET 5)</code>
                            and <code className={styles.code}>Python (flask)</code> combined
                            with <code className={styles.code}>Celery</code> for very complex tasks. During development, I have had to
                            setup continuous and integrated deployment
                            with <a className={styles.a} href={"https://circleci.com/"}>Circle CI</a>
                            , <a className={styles.a} href={"https://github.com/features/actions"}>Github Actions</a> and <a className={styles.a} href={"https://cloud.google.com/build"}>Google Cloud Build</a>.
                        </p>
                        <p>
                            A lot of that was boring jargon. I&apos;m sure you&apos;re really wondering what I&apos;m like in real life. Here&apos;s a little flavor.
                        </p>
                        <p>
                            Relationship status?
                            <br/>
                            <i>I will leave that up to the database.</i>
                        </p>
                        <p>
                            What did the computer do at lunchtime?
                            <br/>
                            <i>Had a byte!</i>
                        </p>
                        <p>
                            How does a developer make a cheer?
                            <br/>
                            <i>[&quot;hip&quot;,&quot;hip&quot;] // (hip hip array!)</i>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6><i>Thanks for reading,</i></h6>
                        <h6>Ethan</h6>
                    </Col>
                </Row>
            </Container>
        </main>


        <Footer />
    </div>
);


About.propTypes = {};
About.defaultProps = {};
export default About
