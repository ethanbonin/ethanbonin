// Link.react.test.js
import React from "react"
import { shallow } from "enzyme"
import { Jobs } from "@stories/Jobs";
import data from '@stories/jobHistoryData'

import toJson from "enzyme-to-json";

describe("FooterImage", () => {
    it("Ensure FooterImage changes after mouse hover", async () => {
        const component = shallow(
            <Jobs />,
        )

        const allDescriptions = data.map((job) => {
            return job.description
        })

        const allJobs = data.map((job) => {
            return job.job
        })

        // Access to the card level and get the description of the card
        for (let index in component.props().children.props.children) {
            let description = component.props().children.props.children[index].props.children[0].props.children
            expect(allDescriptions.includes(description)).toBeTruthy()
        }

        // Ensure that the card job title is included in the list
        for (let index in component.props().children.props.children) {
            let job = component.props().children.props.children[index].key
            expect(allJobs.includes(job)).toBeTruthy()
        }
    })
})