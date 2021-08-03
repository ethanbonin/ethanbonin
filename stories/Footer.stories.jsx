import React from 'react';
import "../.storybook/preview"
import {Footer} from "./Footer";

// Had to solve the storybook image problem with this article.
// https://dev.to/jonasmerlin/how-to-use-the-next-js-image-component-in-storybook-1415

export default {
    title: 'Getting Started/Footer',
    component: Footer,
    argTypes: {},
};


const Template = (args) => <Footer {...args} />;

export const BottomFooter = Template.bind({});
BottomFooter.args = {}