import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import List from "./List";
import { StorybookDefaultDecorators } from "@/utils/util-components/StorybookDefaultDecorators";
import { StorybookDarkMock } from "@/mocks/storybookMocks";
import HalakaDefaultPictureTemp from "@/assets/temp/halaka-default-picture-temp.svg";

export default {
  title: "UI/List",
  component: List,
  decorators: [
    (Story) => (
      <StorybookDefaultDecorators>
        <Story />
      </StorybookDefaultDecorators>
    ),
  ],
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "default list",
  items: [{ label: "item 1" }, { label: "item 2" }, { label: "item 3" }],
};

export const TowLabels = Template.bind({});
TowLabels.args = {
  label: "two labels list",
  items: [
    { label: "item 1", label2: "item 1-2" },
    { label: "item 2", label2: "item 2-2" },
    { label: "item 3", label2: "item 3-2" },
  ],
};

export const WithImages = Template.bind({});
WithImages.args = {
  label: "list with images",
  items: [
    { label: "item 1", image: HalakaDefaultPictureTemp },
    { label: "item 2", image: HalakaDefaultPictureTemp },
    { label: "item 3", image: HalakaDefaultPictureTemp },
  ],
};

export const Dark = Template.bind({});
Dark.args = {
  label: "dark list",
  items: [{ label: "item 1" }, { label: "item 2" }, { label: "item 3" }],
};
Dark.decorators = [
  (Story) => (
    <StorybookDarkMock>
      <Story />
    </StorybookDarkMock>
  ),
];
