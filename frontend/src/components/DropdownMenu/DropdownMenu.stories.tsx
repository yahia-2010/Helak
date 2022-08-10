import React from "react";
import DropdownMenu from "./DropdownMenu";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {
  StorybookDarkMock,
  StorybookDefaultDecorators,
} from "@/utils/util-components/storybookMocks";

export default {
  title: "DropdownMenu",
  component: DropdownMenu,
  decorators: [
    (Story) => (
      <StorybookDefaultDecorators>
        <Story />
      </StorybookDefaultDecorators>
    ),
  ],
} as ComponentMeta<typeof DropdownMenu>;

const Template: ComponentStory<typeof DropdownMenu> = (args) => (
  <DropdownMenu {...args} />
);

export const Default = Template.bind({});
Default.args = {
  button: "Button",
  items: [{ text: "item1" }, { text: "item2" }, { text: "item3" }],
};

export const Dark = Template.bind({});
Dark.args = {
  button: "Dark",
  items: [
    { text: "dark-item1" },
    { text: "dark-item2" },
    { text: "dark-item3" },
  ],
};
Dark.decorators = [
  (Story) => (
    <StorybookDarkMock>
      <Story />
    </StorybookDarkMock>
  ),
];
