import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Tabs from "./Tabs";
import { StorybookDefaultDecorators } from "@/utils/util-components/StorybookDefaultDecorators";
import { StorybookDarkMock } from "@/mocks/storybookMocks";

export default {
  title: "UI/Tabs",
  component: Tabs,
  decorators: [
    (Story) => (
      <StorybookDefaultDecorators>
        <Story />
      </StorybookDefaultDecorators>
    ),
  ],
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Default = Template.bind({});
Default.args = {
  tabs: ["tab 1", "tab 2", "tab 3"],
  panels: ["panel 1", "panel 2", "panel 3"],
};

export const Dark = Template.bind({});
Dark.args = {
  tabs: ["dark tab 1", "dark tab 2", "dark tab 3"],
  panels: ["dark panel 1", "dark panel 2", "dark panel 3"],
};
Dark.decorators = [
  (Story) => (
    <StorybookDarkMock>
      <Story />
    </StorybookDarkMock>
  ),
];
