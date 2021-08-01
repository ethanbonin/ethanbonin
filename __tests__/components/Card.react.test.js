// Link.react.test.js
import React from "react"
import { shallow } from "enzyme"
import toJson from "enzyme-to-json"
import { PrimaryCard } from "@stories/Card"

describe("Card", () => {
    it("Should be clicked when tapped", () => {
        const component = shallow(
            <PrimaryCard label={"My Awesome Card"}/>,
        )
        let tree = toJson(component)
        expect(tree).toMatchSnapshot()

        // manually trigger the callback
        component.simulate("mouseover")
        // re-rendering
        tree = toJson(component)
        expect(tree).toMatchSnapshot()

        // manually trigger the callback
        component.simulate("mouseleave")
        // re-rendering
        tree = toJson(component)
        expect(tree).toMatchSnapshot()
    })
})