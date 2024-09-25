import React from "react";
import Title from "./Title";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "General/Title",
  component: Title,
} as Meta;

const Template: StoryFn<typeof Title> = (args) => <Title {...args} />;

export const H1 = Template.bind({});
H1.args = {
  order: 1,
  children: "This is h1 title",
};

export const H2 = Template.bind({});
H2.args = {
  order: 2,
  children: "This is h2 title",
};

export const H3 = Template.bind({});
H3.args = {
  order: 3,
  children: "This is h3 title",
};

export const H4 = Template.bind({});
H4.args = {
  order: 4,
  children: "This is h4 title",
};

export const H5 = Template.bind({});
H5.args = {
  order: 5,
  children: "This is h5 title",
};

export const H6 = Template.bind({});
H6.args = {
  order: 6,
  children: "This is h6 title",
};
