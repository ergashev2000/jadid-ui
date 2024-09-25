import React from "react";
import Text, { TextProps } from "./Text";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "General/Text",
  component: Text,
} as Meta;

const Template: StoryFn<TextProps> = (args) => <Text {...args} />;

export const ExtraSmall = Template.bind({});
ExtraSmall.args = {
  size: "xs",
  children: "Extra small text",
};

export const Small = Template.bind({});
Small.args = {
  size: "sm",
  children: "Small text",
};

export const Default = Template.bind({});
Default.args = {
  size: "md",
  children: "Default text",
};

export const Large = Template.bind({});
Large.args = {
  size: "lg",
  children: "Large text",
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  size: "xl",
  children: "Extra large text",
};

export const Semibold = Template.bind({});
Semibold.args = {
  weight: 500,
  children: "Semibold text",
};

export const Bold = Template.bind({});
Bold.args = {
  weight: 700,
  children: "Bold text",
};

export const LinkVariant = Template.bind({});
LinkVariant.args = {
  variant: "link",
  component: "a",
  href: "https://example.com",
  children: "Link variant",
};

export const RedText = Template.bind({});
RedText.args = {
  color: "red",
  children: "Red text",
};

export const BlueText = Template.bind({});
BlueText.args = {
  color: "blue",
  children: "Blue text",
};

export const GrayText = Template.bind({});
GrayText.args = {
  color: "gray",
  children: "Gray text",
};

export const Uppercase = Template.bind({});
Uppercase.args = {
  transform: "uppercase",
  children: "Uppercase text",
};

export const Capitalized = Template.bind({});
Capitalized.args = {
  transform: "capitalize",
  children: "Capitalized text",
};

export const AlignedCenter = Template.bind({});
AlignedCenter.args = {
  align: "center",
  children: "Aligned to center",
};

export const AlignedRight = Template.bind({});
AlignedRight.args = {
  align: "right",
  children: "Aligned to right",
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  size: "20px",
  children: "Custom size text",
};
