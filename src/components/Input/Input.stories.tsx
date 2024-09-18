import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Input from "./Input";

export default {
  title: "UI/Input",
  component: Input,
  argTypes: {
    autoComplete: { control: "text" },
    autoFocus: { control: "boolean" },
    className: { control: "text" },
    disabled: { control: "boolean" },
    error: { control: "boolean" },
    placeholder: { control: "text" },
    prefix: { control: "text" },
    suffix: { control: "text" },
    size: {
      control: {
        type: "radio",
        options: ["small", "medium", "large"],
      },
    },
    type: {
      control: {
        type: "radio",
        options: ["text", "password", "email", "number", "tel", "url"],
      },
    },
    value: { control: "text" },
    onChange: { action: "changed" },
    onFocus: { action: "focused" },
    onBlur: { action: "blurred" },
    ariaLabel: { control: "text" },
    ariaDescribedBy: { control: "text" },
  },
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Enter text",
  size: "md",
};

export const Small = Template.bind({});
Small.args = {
  placeholder: "Small input",
  size: "md",
};

export const Large = Template.bind({});
Large.args = {
  placeholder: "Large input",
  size: "md",
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: "Disabled input",
  size: "md",
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  placeholder: "Error input",
  size: "md",
  error: true,
};

export const WithPrefix = Template.bind({});
WithPrefix.args = {
  placeholder: "With prefix",
  size: "md",
  prefix: <span className="text-blue-500">🔍</span>,
};

export const WithSuffix = Template.bind({});
WithSuffix.args = {
  placeholder: "With suffix",
  size: "md",
  suffix: <span className="text-blue-500">✔️</span>,
};

export const WithPrefixAndSuffix = Template.bind({});
WithPrefixAndSuffix.args = {
  placeholder: "With prefix and suffix",
  size: "md",
  prefix: <span className="text-blue-500">🔍</span>,
  suffix: <span className="text-blue-500">✔️</span>,
};

export const Focused = Template.bind({});
Focused.args = {
  placeholder: "Focused input",
  size: "md",
  autoFocus: true,
};
