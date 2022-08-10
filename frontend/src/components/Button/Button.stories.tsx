import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";
import {
  StorybookDarkMock,
  StorybookDefaultDecorators,
} from "@/utils/util-components/storybookMocks";

export default {
  title: "Button",
  component: Button,
  decorators: [
    (Story) => (
      <StorybookDefaultDecorators>
        <Story />
      </StorybookDefaultDecorators>
    ),
  ],
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args}>{args.children}</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  children: "primary",
  variant: "primary",
};

export const DarkPrimary = Template.bind({});
DarkPrimary.args = {
  children: "dark-primary",
};
DarkPrimary.decorators = [
  (Story) => (
    <StorybookDarkMock>
      <Story />
    </StorybookDarkMock>
  ),
];

export const Secondary = Template.bind({});
Secondary.args = {
  children: "secondary",
  variant: "secondary",
};

export const DarkSecondary = Template.bind({});
DarkSecondary.args = {
  children: "dark-secondary",
  variant: "secondary",
};
DarkSecondary.decorators = [
  (Story) => (
    <StorybookDarkMock>
      <Story />
    </StorybookDarkMock>
  ),
];

export const Text = Template.bind({});
Text.args = {
  children: "text",
  variant: "text",
};

export const DarkText = Template.bind({});
DarkText.args = {
  children: "dark-text",
  variant: "text",
};
DarkText.decorators = [
  (Story) => (
    <StorybookDarkMock>
      <Story />
    </StorybookDarkMock>
  ),
];

export const Disabled = Template.bind({});
Disabled.args = {
  children: "disabled",
  disabled: true,
};
