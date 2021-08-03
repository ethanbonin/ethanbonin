import styles from "../styles/history.module.css"
import "bootstrap/dist/css/bootstrap.css"
import React from 'react';
import {Footer} from "../stories/Footer";
import {Header} from "../stories/Header";
import {ProjectCardsLayout} from "../stories/ProjectCardsLayout";

export const WorkHistory = () => (
    <div className={styles.container}>
        <Header />

        <main className={styles.main}>
            <ProjectCardsLayout />
        </main>

        <Footer />
    </div>
);


WorkHistory.propTypes = {};
WorkHistory.defaultProps = {};
export default WorkHistory
