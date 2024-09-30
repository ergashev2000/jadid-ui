import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Accordion from './Accordion'; 

export default {
  title: 'Components/Accordion',
  component: Accordion,
  argTypes: {
    bordered: { control: 'boolean' },
    collapsible: { control: { type: 'select', options: ['header', 'icon', 'disabled'] } },
    ghost: { control: 'boolean' },
    expandIconPosition: { control: { type: 'select', options: ['start', 'end'] } },
  },
} as Meta<typeof Accordion>;

const Template: StoryFn<typeof Accordion> = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { key: '1', label: 'Accordion 1', content: 'This is the content for accordion 1.' },
    { key: '2', label: 'Accordion 2', content: 'This is the content for accordion 2.' },
    { key: '3', label: 'Accordion 3', content: 'This is the content for accordion 3.' },
  ],
  bordered: true,
  collapsible: 'header',
  defaultActiveKey: ['1'],
  expandIconPosition: 'end',
  ghost: false,
};

export const Ghost = Template.bind({});
Ghost.args = {
  ...Default.args,
  ghost: true,
};

export const NoBorder = Template.bind({});
NoBorder.args = {
  ...Default.args,
  bordered: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  collapsible: 'disabled',
};