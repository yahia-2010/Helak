import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";

export default {
  title: "Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => (
  <BrowserRouter>
    <Navbar />
  </BrowserRouter>
);

export const Default = Template.bind({});
