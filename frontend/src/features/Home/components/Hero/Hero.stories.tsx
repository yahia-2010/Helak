import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Hero from "./Hero";
import {
  StorybookDarkMock,
  StorybookDefaultDecorators,
} from "@/utils/util-components/storybookMocks";

export default {
  title: "Hero",
  component: Hero,
  decorators: [
    (Story) => (
      <StorybookDefaultDecorators>
        <Story />
      </StorybookDefaultDecorators>
    ),
  ],
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = () => <Hero />;

export const Default = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [
  (Story) => (
    <StorybookDarkMock>
      <Story />
    </StorybookDarkMock>
  ),
];
