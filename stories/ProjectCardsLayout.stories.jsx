import React from 'react';
import "../.storybook/preview"
import {ProjectCardsLayout} from "./ProjectCardsLayout";

export default {
    title: 'Getting Started/ProjectCard',
    component: ProjectCardsLayout,
    argTypes: {},
};

const Template = (args) => <ProjectCardsLayout {...args} />;
export const Layout = Template.bind({});
Layout.args = {}