import React from 'react';
import "../.storybook/preview"
import {Jobs} from "./Jobs";

// Had to solve the storybook image problem with this article.
// https://dev.to/jonasmerlin/how-to-use-the-next-js-image-component-in-storybook-1415

export default {
    title: 'Getting Started/JobHistory',
    component: Jobs,
    argTypes: {},
};

const Template = (args) => <Jobs {...args} />;

export const JobHistoryCell = Template.bind({});
JobHistoryCell.args = {
    label: "Ollie & Finch, LTD."
}