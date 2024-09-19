import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Space from "./Space";

export default {
  title: "Layout/Space",
  component: Space,
  argTypes: {
    align: {
      control: {
        type: "radio",
        options: ["start", "end", "center", "baseline"],
      },
    },
    direction: {
      control: {
        type: "radio",
        options: ["vertical", "horizontal"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["small", "middle", "large", 8, 16, 24],
      },
    },
    wrap: {
      control: "boolean",
    },
    split: {
      control: "text",
    },
  },
} as Meta<typeof Space>;

const Template: StoryFn<typeof Space> = (args) => <Space {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: [
    <div style={{ backgroundColor: 'lightblue', padding: '10px' }}>Item 1</div>,
    <div style={{ backgroundColor: 'lightgreen', padding: '10px' }}>Item 2</div>,
    <div style={{ backgroundColor: 'lightcoral', padding: '10px' }}>Item 3</div>,
  ],
};

export const Vertical = Template.bind({});
Vertical.args = {
  direction: "vertical",
  children: [
    <div style={{ backgroundColor: 'lightblue', padding: '10px' }}>Item 1</div>,
    <div style={{ backgroundColor: 'lightgreen', padding: '10px' }}>Item 2</div>,
    <div style={{ backgroundColor: 'lightcoral', padding: '10px' }}>Item 3</div>,
  ],
};

export const WithSplit = Template.bind({});
WithSplit.args = {
  split: <div style={{ margin: '0 10px' }}>|</div>,
  children: [
    <div style={{ backgroundColor: 'lightblue', padding: '10px' }}>Item 1</div>,
    <div style={{ backgroundColor: 'lightgreen', padding: '10px' }}>Item 2</div>,
    <div style={{ backgroundColor: 'lightcoral', padding: '10px' }}>Item 3</div>,
  ],
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  size: 16,
  children: [
    <div style={{ backgroundColor: 'lightblue', padding: '10px' }}>Item 1</div>,
    <div style={{ backgroundColor: 'lightgreen', padding: '10px' }}>Item 2</div>,
    <div style={{ backgroundColor: 'lightcoral', padding: '10px' }}>Item 3</div>,
  ],
};

export const WithWrap = Template.bind({});
WithWrap.args = {
  wrap: true,
  children: [
    <div style={{ backgroundColor: 'lightblue', padding: '10px' }}>Item 1</div>,
    <div style={{ backgroundColor: 'lightgreen', padding: '10px' }}>Item 2</div>,
    <div style={{ backgroundColor: 'lightcoral', padding: '10px' }}>Item 3</div>,
  ],
};
