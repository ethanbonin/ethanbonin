import React from 'react';
import "../.storybook/preview"
import {ProjectCard} from "./ProjectCard";
import projectSkills from './projectSkills.json';

// Had to solve the storybook image problem with this article.
// https://dev.to/jonasmerlin/how-to-use-the-next-js-image-component-in-storybook-1415

export default {
    title: 'Getting Started/ProjectCard',
    component: ProjectCard,
    argTypes: {},
};


const Template = (args) => <ProjectCard {...args} />;

export const TextMeThatCard = Template.bind({});
TextMeThatCard.args = {
    project: projectSkills[0]
}

export const RallistaCard = Template.bind({});
RallistaCard.args = {
    project: projectSkills[1]
}

export const SafeSpendingCard = Template.bind({});
SafeSpendingCard.args = {
    project: projectSkills[2]
}

export const WebsiteCard = Template.bind({});
WebsiteCard.args = {
    project: projectSkills[3]
}