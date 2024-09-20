import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Spinner from './Spinner';

export default {
  title: 'ui/Spinner',
  component: Spinner,
  argTypes: {
    size: {
      control: {
        type: 'radio',
        options: ['small', 'medium', 'large'],
      },
    },
    color: {
      control: 'text',
    },
    text: {
      control: 'text',
    },
  },
} as Meta<typeof Spinner>;

const Template: StoryFn = (args) => <Spinner {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'medium',
  text: 'Loading...',
};

export const SmallSpinner = Template.bind({});
SmallSpinner.args = {
  size: 'small',
  color: 'text-blue-500',
  text: 'Please wait...',
};

export const LargeSpinner = Template.bind({});
LargeSpinner.args = {
  size: 'large',
  color: 'text-red-500',
  text: 'Fetching data...',
};

export const CustomColorSpinner = Template.bind({});
CustomColorSpinner.args = {
  size: 'medium',
  color: 'text-green-500',
  text: 'Processing...',
};

