import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Navbar from "./Navbar";
import {
  StorybookDarkMock,
  StorybookDefaultDecorators,
} from "@/utils/util-components/storybookMocks";

export default {
  title: "Navbar",
  component: Navbar,
  decorators: [
    (Story) => (
      <StorybookDefaultDecorators>
        <Story />
      </StorybookDefaultDecorators>
    ),
  ],
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => <Navbar />;

export const Default = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [
  (Story) => (
    <StorybookDarkMock bgColor="secondary">
      <Story />
    </StorybookDarkMock>
  ),
];
