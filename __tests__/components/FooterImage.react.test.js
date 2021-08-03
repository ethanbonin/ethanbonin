// Link.react.test.js
import React from "react"
import { shallow } from "enzyme"
import {FooterImage} from "@stories/FooterImage";
import toJson from "enzyme-to-json";

describe("FooterImage", () => {
    it("Ensure FooterImage changes after mouse hover", async () => {
        const component = shallow(
            <FooterImage
                src={'https://seeklogo.com/images/C/contentful-logo-C395C545BF-seeklogo.com.png'}
                alt={"next Logo"}
                label={"This is a sample Footer Image"}
                size={"50px"}
            />,
        )

        // Ensure overlay message will be equal to the label passed in
        expect(component.props().overlay.props.children).toBe("This is a sample Footer Image")

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