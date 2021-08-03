import React from 'react';
import "../.storybook/preview"
import { PrimaryCard } from './Card';

export default {
    title: 'Getting Started/Card',
    component: PrimaryCard,
    argTypes: {},
};

const Template = (args) => <PrimaryCard {...args} />;

export const WorkHistoryCard = Template.bind({});

WorkHistoryCard.args = {
    label: 'Work History',
};

export const PersonalProjectsCard = Template.bind({});

PersonalProjectsCard.args = {
    label: 'Projects',
};

export const AboutMeCard = Template.bind({});

AboutMeCard.args = {
    label: 'About Me',
};

export const ContactMe = Template.bind({});

ContactMe.args = {
    label: 'Contact Me',
};