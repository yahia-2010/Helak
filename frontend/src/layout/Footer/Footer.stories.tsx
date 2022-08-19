import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Footer from "./Footer";
import { StorybookDefaultDecorators } from "@/utils/util-components/StorybookDefaultDecorators";
import { StorybookDarkMock } from "@/mocks/storybookMocks";

export default {
  title: "Footer",
  component: Footer,
  decorators: [
    (Story) => (
      <StorybookDefaultDecorators>
        <Story />
      </StorybookDefaultDecorators>
    ),
  ],
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const Default = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [
  (Story) => (
    <StorybookDarkMock bgColor="secondary">
      <Story />
    </StorybookDarkMock>
  ),
];
