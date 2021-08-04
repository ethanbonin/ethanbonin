import React from 'react';
import "../.storybook/preview"
import {SkillTree} from "./SkillTree";
import projectSkills from './projectSkills.json';

// Had to solve the storybook image problem with this article.
// https://dev.to/jonasmerlin/how-to-use-the-next-js-image-component-in-storybook-1415

export default {
    title: 'Getting Started/Skill Tree',
    component: SkillTree,
    argTypes: {},
};


const Template = (args) => <SkillTree {...args} />;

export const SkillTreeSample = Template.bind({});
SkillTreeSample.args = {
    project: projectSkills[2]
}