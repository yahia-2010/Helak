import React from "react";
import DropdownMenu from "./DropdownMenu";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AllProviders from "../../contexts/AllProviders";

export default {
  title: "DropdownMenu",
  component: DropdownMenu,
} as ComponentMeta<typeof DropdownMenu>;

const Template: ComponentStory<typeof DropdownMenu> = (args) => (
  <AllProviders>
    <DropdownMenu {...args} />
  </AllProviders>
);

export const Default = Template.bind({});
Default.args = {
  button: "Button",
  items: [{ text: "item1" }, { text: "item2" }, { text: "item3" }],
};
