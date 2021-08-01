import React from 'react';
import "../.storybook/preview"
import { PrimaryCard } from './Card';

export default {
    title: 'Example/Card',
    component: PrimaryCard,
    argTypes: {},
};

const Template = (args) => <PrimaryCard {...args} />;

export const Card = Template.bind({});

Card.args = {
    label: 'PrimaryCard',
};