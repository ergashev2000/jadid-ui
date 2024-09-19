import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Row from "./Row";
import Col from "../Col/Col";

export default {
  title: "Layout/Row and Col",
  component: Row,
} as Meta;

const Template: StoryFn = (args) => (
  <Row {...args}>
    <Col span={8}>
      <div className="bg-blue-300 p-4">Column 1</div>
    </Col>
    <Col span={8}>
      <div className="bg-green-300 p-4">Column 2</div>
    </Col>
    <Col span={8}>
      <div className="bg-red-300 p-4">Column 3</div>
    </Col>
  </Row>
);

export const Default = Template.bind({});
Default.args = {
  gutter: [16, 16],
};

export const CustomGutter = Template.bind({});
CustomGutter.args = {
  gutter: [32, 16],
};

export const NestedColumns = () => (
  <Row gutter={[16, 16]}>
    <Col span={12}>
      <div className="bg-blue-300 p-4">Column 1</div>
      <Row gutter={[16, 16]}>
        <Col span={12}>
          <div className="bg-yellow-300 p-4">Nested Column 1</div>
        </Col>
        <Col span={12}>
          <div className="bg-purple-300 p-4">Nested Column 2</div>
        </Col>
      </Row>
    </Col>
    <Col span={12}>
      <div className="bg-green-300 p-4">Column 2</div>
    </Col>
  </Row>
);

export const ResponsiveColumns = () => (
  <Row gutter={[16, 16]}>
    <Col span={24} className="sm:span-12">
      <div className="bg-blue-300 p-4">Column 1 (sm: span-12)</div>
    </Col>
    <Col span={24} className="sm:span-12">
      <div className="bg-green-300 p-4">Column 2 (sm: span-12)</div>
    </Col>
  </Row>
);
