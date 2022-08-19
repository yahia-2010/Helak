import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import FloatingButton from "./FloatingButton";
import { CogIcon } from "@heroicons/react/solid";
import { StorybookDefaultDecorators } from "@/utils/util-components/StorybookDefaultDecorators";
import { StorybookDarkMock } from "@/mocks/storybookMocks";

export default {
  title: "FloatingButton",
  component: FloatingButton,
  decorators: [
    (Story) => (
      <StorybookDefaultDecorators>
        <Story />
      </StorybookDefaultDecorators>
    ),
  ],
} as ComponentMeta<typeof FloatingButton>;

const Template: ComponentStory<typeof FloatingButton> = (args) => (
  <FloatingButton {...args} icon={<CogIcon className="h-5 w-5" />} />
);

export const Default = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [
  (Story) => (
    <StorybookDarkMock bgColor="secondary">
      <Story />
    </StorybookDarkMock>
  ),
];
