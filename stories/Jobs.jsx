import React from "react"
import styles from '../styles/jobhistory.module.css'
import jobs from "./jobHistoryData";

import { Chrono } from "react-chrono";

export const Jobs = () => {
    const jobsReversed = jobs.reverse()

    // Map out the job description
    function createCardComponents() { return jobsReversed.map((job) => {
        return (
            <div key={job.job} style={{width: "100%"}}>
                <div>
                    {job.description}
                </div>

                {/* Map out the skills*/}
                <div className={styles.div}>
                    {job.dailyTechStack.map((skill) => {
                        return (
                            <code className={styles.code} key={skill}>
                                {skill}
                            </code>
                        )
                    })}
                </div>
            </div>
        )
    })}

    return (
        <div >
            <Chrono
                style={{width: "100px"}}
                items={jobsReversed.map((job) => {
                    return {
                        title: job.job,
                        cardTitle: job.jobTitle,
                        cardSubtitle: job.timeline
                    }})}
                mode={"VERTICAL"}
                scrollable={{scrollbar: true}}
                hideControls={true}
                theme={{
                    primary: "black",
                    secondary: "white",
                    cardBgColor: "white",
                    cardForeColor: "black",
                    titleColor: "gray"
                }}
            >
                { createCardComponents() }
            </Chrono>
        </div>
    )
}

Jobs.propTypes = {}

Jobs.defaultProps = {}
