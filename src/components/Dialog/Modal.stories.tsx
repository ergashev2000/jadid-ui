import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import Modal from "./Modal";
import Button from "../../components/Button/Button";

export default {
  title: "Feedback/Modal",
  component: Modal,
  argTypes: {
    title: { control: "text" },
    className: { control: "text" },
  },
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button type="primary" onClick={() => setIsOpen(true)}>Open Modal</Button>
      <Modal {...args} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: "Modal Title",
  children: (
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
      consequuntur expedita delectus, earum non, ex eum quibusdam reiciendis
      dolore illum harum quo libero repellat placeat adipisci labore natus quam
      unde!
    </p>
  ),
};
