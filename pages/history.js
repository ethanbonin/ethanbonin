import styles from "../styles/history.module.css"
import "bootstrap/dist/css/bootstrap.css"
import React from 'react';
import {Footer} from "../stories/Footer";
import {Header} from "../stories/Header";

import {Jobs} from "../stories/Jobs";

export const WorkHistory = () => (
    <div className={styles.container}>
        <Header />

        <main className={styles.main}>
            <Jobs />
        </main>

        <Footer />
    </div>
);


WorkHistory.propTypes = {};
WorkHistory.defaultProps = {};
export default WorkHistory
