import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import "bootstrap/dist/css/bootstrap.css";
import { TodoCard, TodoCardProps } from '../components/Card';

export default {
  title: 'App/Cardn',
} as Meta;


const Template: Story<TodoCardProps> = (args) => <TodoCard  {...args}/>;

export const CardDone = Template.bind({});
CardDone.args = {
    id: '0000-0000000',
    description: 'buy groceries',
    done: true
};

export const CardNotDone = Template.bind({});
CardNotDone.args = {
    id: '0000-0000000',
    description: 'buy groceries',
    done: false
};

