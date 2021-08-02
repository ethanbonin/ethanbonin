import React from 'react';
import { Home } from '../pages/index';

export default {
    title: 'Getting Started/Pages',
    component: Home,
};

const Template = (args) => <Home {...args} />;

export const HomePage = Template.bind({});
HomePage.args = {};
