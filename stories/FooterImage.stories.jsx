import React from 'react';
import "../.storybook/preview"
import {FooterImage} from "./FooterImage";

// Had to solve the storybook image problem with this article.
// https://dev.to/jonasmerlin/how-to-use-the-next-js-image-component-in-storybook-1415

export default {
    title: 'Getting Started/FootImage',
    component: FooterImage,
    argTypes: {},
};

const Template = (args) => <FooterImage {...args} />;

export const NextjsFootImage = Template.bind({});
NextjsFootImage.args = {
    src: "https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png",
    alt: "next-logo",
    label: "Okay this is a description",
    size: "65px"
}

export const ReactFootImage = Template.bind({});
ReactFootImage.args = {
    src: "https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png",
    alt: "next-logo",
    label: "Okay this is a description",
    size: "65px"
}


export const ContentfulFootImage = Template.bind({});
ContentfulFootImage.args = {
    src: "https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png",
    alt: "next-logo",
    label: "Okay this is a description",
    size: "65px"
}