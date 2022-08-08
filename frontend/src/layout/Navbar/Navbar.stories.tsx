import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Navbar from "./Navbar";
import AllProviders from "../../contexts/AllProviders";

export default {
  title: "Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => (
  <AllProviders>
    <Navbar />
  </AllProviders>
);

export const Default = Template.bind({});
