import React from 'react';
import "../.storybook/preview"
import {Header} from "./Header";

// Had to solve the storybook image problem with this article.
// https://dev.to/jonasmerlin/how-to-use-the-next-js-image-component-in-storybook-1415

export default {
    title: 'Getting Started/Header',
    component: Header,
    argTypes: {},
};


const Template = (args) => <Header {...args} />;

export const HeaderComponent = Template.bind({});
HeaderComponent.args = {}