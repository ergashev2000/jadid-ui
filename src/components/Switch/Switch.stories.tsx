import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Switch from './Switch';

export default {
  title: 'ui/Switch',
  component: Switch,
  argTypes: {
    checked: {
      control: { type: 'boolean' },
    },
    autoFocus: {
      control: { type: 'boolean' },
    },
    checkedChildren: {
      control: { type: 'text' },
    },
    unCheckedChildren: {
      control: { type: 'text' },
    },
    className: {
      control: { type: 'text' },
    },
    defaultChecked: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    size: {
      control: {
        type: 'radio',
        options: ['default', 'small'],
      },
    },
    onChange: { action: 'changed' },
    onClick: { action: 'clicked' },
  },
} as Meta<typeof Switch>;

const Template: StoryFn<typeof Switch> = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {
  checked: false,
  defaultChecked: false,
  checkedChildren: 'On',
  unCheckedChildren: 'Off',
  autoFocus: false,
  className: '',
  disabled: false,
  loading: false,
  size: 'default',
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  checkedChildren: 'Enabled',
  unCheckedChildren: 'Disabled',
  autoFocus: false,
  className: '',
  disabled: false,
  loading: false,
  size: 'default',
};

export const DefaultChecked = Template.bind({});
DefaultChecked.args = {
  defaultChecked: true,
  checkedChildren: 'On',
  unCheckedChildren: 'Off',
  autoFocus: false,
  className: '',
  disabled: false,
  loading: false,
  size: 'default',
};

export const SmallSwitch = Template.bind({});
SmallSwitch.args = {
  defaultChecked: true,
  checkedChildren: 'Small On',
  unCheckedChildren: 'Small Off',
  autoFocus: false,
  className: '',
  disabled: false,
  loading: false,
  size: 'small',
};

export const DisabledSwitch = Template.bind({});
DisabledSwitch.args = {
  checked: false,
  defaultChecked: false,
  checkedChildren: 'On',
  unCheckedChildren: 'Off',
  autoFocus: false,
  className: '',
  disabled: true,
  loading: false,
  size: 'default',
};

export const LoadingSwitch = Template.bind({});
LoadingSwitch.args = {
  defaultChecked: false,
  checkedChildren: 'On',
  unCheckedChildren: 'Off',
  autoFocus: false,
  className: '',
  disabled: false,
  loading: true,
  size: 'default',
};
