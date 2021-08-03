import React from 'react';
import styles from '../styles/footer.module.css';
import {footerData} from "./footerImages";
import {FooterImage} from "./FooterImage";
import {Col, Container, Row} from "react-bootstrap";

export const Footer = () => (
    <footer className={styles.footer}>
        <Container fluid={true}>
            <Row>
                {footerData.map((p) => {
                    return (
                        <Col xs={3} sm={1} md={1} lg={1} xl={1} xxl={1} key={p.alt} >
                            <FooterImage {...p} />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    </footer>
);



Footer.propTypes = {};

Footer.defaultProps = {};
