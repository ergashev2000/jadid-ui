import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Notification, { NotificationProps } from './Notification';
import { IconStar } from '../../assets/svgs/svgIcons';

export default {
  title: 'Components/Notification',
  component: Notification,
  argTypes: {
    onClose: { action: 'closed' }, 
  },
} as Meta;

const Template: StoryFn<NotificationProps> = (args: any) => <Notification {...args} />;

export const DefaultNotification = Template.bind({});
DefaultNotification.args = {
  message: 'Default Notification',
  description: 'This is a basic notification.',
  duration: 5,
  showProgress: true,
  icon: <IconStar />,
  placement: 'topRight',
};

export const WithCustomIcon = Template.bind({});
WithCustomIcon.args = {
  message: 'Success',
  description: 'Your action was successful!',
  duration: 8,
  showProgress: true,
  icon: <IconStar />,
  closeIcon: <IconStar />,
  placement: 'bottomLeft',
};

export const WithoutAutoClose = Template.bind({});
WithoutAutoClose.args = {
  message: 'Persistent Notification',
  description: 'This notification will not close automatically.',
  duration: 0,
  showProgress: false,
  placement: 'topLeft',
};

export const LongNotification = Template.bind({});
LongNotification.args = {
  message: 'Long Notification',
  description: 'This notification will display for 10 seconds.',
  duration: 10,
  showProgress: true,
  icon: <IconStar/>,
  placement: 'bottomRight',
};
