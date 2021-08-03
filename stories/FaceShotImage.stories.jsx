import React from 'react';
import "../.storybook/preview"
import { FaceShotImage } from './FaceShotImage';

// Had to solve the storybook image problem with this article.
// https://dev.to/jonasmerlin/how-to-use-the-next-js-image-component-in-storybook-1415

export default {
    title: 'Getting Started/FaceShot',
    component: FaceShotImage,
    argTypes: {},
};


const Template = (args) => <FaceShotImage {...args} />;

export const FaceShotImg = Template.bind({});
FaceShotImg.args = {}