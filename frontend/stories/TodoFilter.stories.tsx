import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import "bootstrap/dist/css/bootstrap.css";
import { TodoFilter } from '../components/Filter';

export default {
  title: 'App/Filter',
} as Meta;


const Template: Story = (args) => <TodoFilter  {...args}/>;

export const todoFilter = Template.bind({});
