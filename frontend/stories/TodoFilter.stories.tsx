import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import "bootstrap/dist/css/bootstrap.css";
import { TodoFilter } from '../components/Filter';

import store from '../pages/store'
import { Provider } from 'react-redux'

export default {
  title: 'App/Filter',
} as Meta;


const Template: Story = (args) => 
<Provider store={store}>
<TodoFilter  {...args}/>
</Provider>

export const todoFilter = Template.bind({});
