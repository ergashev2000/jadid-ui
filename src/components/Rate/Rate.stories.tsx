import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { Rate } from './Rate';

export default {
  title: 'ui/Rate',
  component: Rate,
  argTypes: {
    count: {
      control: {
        type: 'number',
      },
    },
    defaultValue: {
      control: {
        type: 'number',
      },
    },
    allowHalf: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onChange: { action: 'changed' },
  },
} as Meta;

const Template: StoryFn = (args) => <Rate {...args} />;

export const Default = Template.bind({});
Default.args = {
  count: 5,
  defaultValue: 0,
  allowHalf: false,
  disabled: false,
};

export const HalfStar = Template.bind({});
HalfStar.args = {
  count: 5,
  defaultValue: 2.5,
  allowHalf: true,
  disabled: false,
};

export const DisabledRate = Template.bind({});
DisabledRate.args = {
  count: 5,
  defaultValue: 3,
  allowHalf: true,
  disabled: true,
};

export const CustomCount = Template.bind({});
CustomCount.args = {
  count: 10,
  defaultValue: 5,
  allowHalf: true,
  disabled: false,
};
