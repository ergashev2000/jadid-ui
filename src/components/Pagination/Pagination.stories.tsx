import React from "react";
import { Meta, Story } from "@storybook/react";
import Pagination, { PaginationProps } from "./Pagination"; // Adjust the import path accordingly

export default {
  title: "Components/Pagination",
  component: Pagination,
} as Meta;

const Template: Story<PaginationProps> = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  total: 100,
  current: 1,
  pageSize: 10,
  onChange: (page: number, pageSize: number) => console.log(`Page: ${page}, Page Size: ${pageSize}`),
};

export const WithSizeChanger = Template.bind({});
WithSizeChanger.args = {
  total: 150,
  current: 1,
  pageSize: 10,
  showSizeChanger: true,
  onChange: (page: number, pageSize: number) => console.log(`Page: ${page}, Page Size: ${pageSize}`),
};

export const WithQuickJumper = Template.bind({});
WithQuickJumper.args = {
  total: 250,
  current: 1,
  pageSize: 10,
  showQuickJumper: true,
  onChange: (page: number, pageSize: number) => console.log(`Page: ${page}, Page Size: ${pageSize}`),
};

export const Disabled = Template.bind({});
Disabled.args = {
  total: 50,
  current: 1,
  pageSize: 10,
  disabled: true,
  onChange: (page: number, pageSize: number) => console.log(`Page: ${page}, Page Size: ${pageSize}`),
};

export const WithoutTitle = Template.bind({});
WithoutTitle.args = {
  total: 80,
  current: 1,
  pageSize: 10,
  showTitle: false,
  onChange: (page: number, pageSize: number) => console.log(`Page: ${page}, Page Size: ${pageSize}`),
};

export const LargePageSizeOptions = Template.bind({});
LargePageSizeOptions.args = {
  total: 300,
  current: 1,
  pageSize: 10,
  pageSizeOptions: [5, 10, 20, 50, 100, 200],
  onChange: (page: number, pageSize: number) => console.log(`Page: ${page}, Page Size: ${pageSize}`),
};
