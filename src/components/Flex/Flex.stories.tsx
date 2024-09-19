import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Flex, { FlexProps } from "./Flex";

export default {
  title: "Layout/Flex",
  component: Flex,
  argTypes: {
    children: { control: "text" },
    className: { control: "text" },
    vertical: { control: "boolean" },
    wrap: {
      control: "select",
      options: ["nowrap", "wrap", "wrap-reverse"],
    },
    justify: {
      control: "select",
      options: ["start", "center", "end", "between", "around", "evenly", "normal"],
    },
    align: {
      control: "select",
      options: ["start", "center", "end", "baseline", "stretch", "normal"],
    },
    flex: { control: "text" },
    gap: {
      control: "select",
      options: ["small", "middle", "large"],
    },
  },
} as Meta;

const Template: StoryFn<FlexProps> = (args) => <Flex {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <div className="p-4 bg-blue-500 text-white">Item 1</div>
      <div className="p-4 bg-green-500 text-white">Item 2</div>
      <div className="p-4 bg-red-500 text-white">Item 3</div>
    </>
  ),
  vertical: false,
  wrap: "nowrap",
  justify: "start",
  align: "center",
  gap: "middle",
};

export const Vertical = Template.bind({});
Vertical.args = {
  children: (
    <>
      <div className="p-4 bg-blue-500 text-white">Item 1</div>
      <div className="p-4 bg-green-500 text-white">Item 2</div>
      <div className="p-4 bg-red-500 text-white">Item 3</div>
    </>
  ),
  vertical: true,
  wrap: "wrap",
  justify: "center",
  align: "center",
  gap: "large",
};

export const Wrapped = Template.bind({});
Wrapped.args = {
  children: (
    <>
      <div className="p-4 bg-blue-500 text-white">Item 1</div>
      <div className="p-4 bg-green-500 text-white">Item 2</div>
      <div className="p-4 bg-red-500 text-white">Item 3</div>
      <div className="p-4 bg-yellow-500 text-white">Item 4</div>
      <div className="p-4 bg-purple-500 text-white">Item 5</div>
    </>
  ),
  vertical: false,
  wrap: "wrap",
  justify: "around",
  align: "center",
  gap: "small",
};

export const JustifyCenter = Template.bind({});
JustifyCenter.args = {
  children: (
    <>
      <div className="p-4 bg-blue-500 text-white">Item 1</div>
      <div className="p-4 bg-green-500 text-white">Item 2</div>
      <div className="p-4 bg-red-500 text-white">Item 3</div>
    </>
  ),
  vertical: false,
  wrap: "nowrap",
  justify: "center",
  align: "center",
  gap: "middle",
};

export const AlignEnd = Template.bind({});
AlignEnd.args = {
  children: (
    <>
      <div className="p-4 bg-blue-500 text-white">Item 1</div>
      <div className="p-4 bg-green-500 text-white">Item 2</div>
      <div className="p-4 bg-red-500 text-white">Item 3</div>
    </>
  ),
  vertical: false,
  wrap: "nowrap",
  justify: "start",
  align: "end",
  gap: "middle",
};

export const CustomFlex = Template.bind({});
CustomFlex.args = {
  children: (
    <>
      <div className="p-4 bg-blue-500 text-white">Item 1</div>
      <div className="p-4 bg-green-500 text-white">Item 2</div>
      <div className="p-4 bg-red-500 text-white">Item 3</div>
    </>
  ),
  vertical: false,
  wrap: "nowrap",
  justify: "between",
  align: "stretch",
  flex: "1",
  gap: "large",
};