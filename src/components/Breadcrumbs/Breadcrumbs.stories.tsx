import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Breadcrumbs from "./Breadcrumbs";
import { ChevronLeft } from "../../assets/svgs/svgIcons";

export default {
  title: "Navigation/Breadcrumbs",
  component: Breadcrumbs,
  argTypes: {
    items: {
      control: "object",
      description: "Array of breadcrumb items",
    },
    itemRender: {
      control: "function",
      description: "Custom renderer for breadcrumb items",
    },
    separator: {
      control: "text",
      description: "Separator between items",
    },
    className: {
      control: "text",
      description: "Additional CSS class",
    },
  },
} as Meta;

const Template: StoryFn = (args) => <Breadcrumbs items={[]} {...args} />;

export const DefaultBreadcrumbs = Template.bind({});
DefaultBreadcrumbs.args = {
  items: [
    { title: <ChevronLeft />, href: "/" },
    { title: "Application Center", href: "/app-center" },
    { title: "Application List", href: "/app-center" },
    { title: "An Application", onClick: () => alert("Clicked!") },
  ],
};
