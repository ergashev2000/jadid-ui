import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Textarea from './Textarea';

export default {
  title: 'Components/Textarea',
  component: Textarea,
  argTypes: {
    size: {
      control: { type: 'radio', options: ['sm', 'md', 'lg'] },
    },
    error: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    rows: {
      control: 'number',
    },
    maxLength: {
      control: 'number',
    },
    placeholder: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    onChange: { action: 'changed' },
    onFocus: { action: 'focused' },
    onBlur: { action: 'blurred' },
  },
} as Meta;

const Template: StoryFn<typeof Textarea> = (args) => <Textarea {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Type something...',
  value: '',
  size: 'md',
};

export const WithWrapper = () => (
  <Textarea.Wrapper label="Your Message" error="This field is required">
    <Textarea placeholder="Enter your message here..." size='sm'/>
  </Textarea.Wrapper>
);

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: 'Type something...',
  disabled: true,
  size: 'md',
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  placeholder: 'Type something...',
  size: 'md',
};
