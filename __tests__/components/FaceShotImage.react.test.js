// Link.react.test.js
import React from "react"
import { shallow } from "enzyme"
import { FaceShotImage } from "@stories/FaceShotImage";

describe("FaceShotImage", () => {
    it("Ensure Face image is the one from github", async () => {
        const component = shallow(
            <FaceShotImage />,
        )
        expect(component.props().src)
            .toBe('https://github.com/ethanbonin/ethanbonin/raw/develop/public/face-shot.png')
    })
})