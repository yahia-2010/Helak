import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Modal from "./Modal";
import { StorybookDefaultDecorators } from "@/utils/util-components/StorybookDefaultDecorators";
import { StorybookDarkMock } from "@/mocks/storybookMocks";
import dummyText from "@/utils/util-data/dummyText";

export default {
  title: "Modal",
  component: Modal,
  decorators: [
    (Story) => (
      <StorybookDefaultDecorators>
        <Story />
      </StorybookDefaultDecorators>
    ),
  ],
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => (
  <Modal {...args} isOpen={true} />
);

export const Default = Template.bind({});
Default.args = {
  isOpen: true,
  title: "default modal",
  description: dummyText[10],
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  title: "dark modal",
  description: dummyText[10],
};
Dark.decorators = [
  (Story) => (
    <StorybookDarkMock>
      <Story />
    </StorybookDarkMock>
  ),
];
