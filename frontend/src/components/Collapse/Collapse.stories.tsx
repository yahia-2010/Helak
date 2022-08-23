import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Collapse from "./Collapse";
import { StorybookDefaultDecorators } from "@/utils/util-components/StorybookDefaultDecorators";
import { StorybookDarkMock } from "@/mocks/storybookMocks";
import dummyText from "@/utils/util-data/dummyText";

export default {
  title: "Collapse",
  component: Collapse,
  decorators: [
    (Story) => (
      <StorybookDefaultDecorators>
        <Story />
      </StorybookDefaultDecorators>
    ),
  ],
} as ComponentMeta<typeof Collapse>;

const Template: ComponentStory<typeof Collapse> = (args) => (
  <Collapse {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "default collapse",
  content: dummyText[10],
};

export const Dark = Template.bind({});
Dark.args = {
  title: "dark collapse",
  content: dummyText[10],
};
Dark.decorators = [
  (Story) => (
    <StorybookDarkMock>
      <Story />
    </StorybookDarkMock>
  ),
];
