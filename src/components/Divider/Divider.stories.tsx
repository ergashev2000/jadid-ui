import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Divider, { DividerProps } from './Divider';

export default {
  title: 'Layout/Divider',
  component: Divider,
  argTypes: {
    children: { control: 'text' },
    className: { control: 'text' },
    dashed: { control: 'boolean' },
    variant: {
      control: 'select',
      options: ['solid', 'dashed', 'dotted'],
    },
    orientation: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
    plain: { control: 'boolean' },
    type: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
    orientationMargin: { control: 'text' },
  },
} as Meta;

const Template: StoryFn<DividerProps> = (args) => <Divider {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default Divider',
  dashed: false,
  variant: 'solid',
  orientation: 'left',
  plain: true,
  type: 'horizontal',
};

export const DashedDivider = Template.bind({});
DashedDivider.args = {
  children: 'Dashed Divider',
  dashed: true,
  variant: 'dashed',
  orientation: 'center',
  plain: false,
};

export const LeftAligned = Template.bind({});
LeftAligned.args = {
  children: 'Left Aligned Divider',
  dashed: false,
  variant: 'solid',
  orientation: 'left',
  plain: false,
  orientationMargin: '20px',
};

export const RightAligned = Template.bind({});
RightAligned.args = {
  children: 'Right Aligned Divider',
  dashed: false,
  variant: 'solid',
  orientation: 'right',
  plain: false,
  orientationMargin: '20px',
};

export const VerticalDivider = Template.bind({});
VerticalDivider.args = {
  type: 'vertical',
  dashed: true,
  variant: 'dotted',
  className: 'h-24',
};
