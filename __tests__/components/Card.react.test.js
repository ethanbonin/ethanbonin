// Link.react.test.js
import React from "react"
import { shallow } from "enzyme"
import toJson from "enzyme-to-json"
import { PrimaryCard } from "@stories/Card"

describe("Card", () => {
    it("Should change colors when hovered", () => {
        const mockCallBack = jest.fn()

        const component = shallow(
            <PrimaryCard label={"My Awesome Card"} onClick={mockCallBack}/>,
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

    it("Should register click", () => {
        const mockCallBack = jest.fn()

        const component = shallow(
            <PrimaryCard label={"My Awesome Card"} onClick={mockCallBack}/>,
        )

        // Expected to only be clicked once
        component.simulate("click")
        expect(mockCallBack.mock.calls.length).toBe(1)
    })
})