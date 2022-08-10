import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Select from "./Select";
import {
  StorybookDarkMock,
  StorybookDefaultDecorators,
} from "@/utils/util-components/storybookMocks";

export default {
  title: "Select",
  component: Select,
  decorators: [
    (Story) => (
      <StorybookDefaultDecorators>
        <Story />
      </StorybookDefaultDecorators>
    ),
  ],
} as ComponentMeta<typeof Select>;

const selections = ["selection-1", "selection-2", "selection-3", "selection-4"];

const Template: ComponentStory<typeof Select> = (args) => (
  <Select
    {...args}
    handleSelect={() => {
      /* ... */
    }}
    value={selections[0]}
    selections={selections}
  />
);

export const Default = Template.bind({});
Default.args = {
  label: "select",
};

export const Dark = Template.bind({});
Dark.args = {
  label: "dark select",
};
Dark.decorators = [
  (Story) => (
    <StorybookDarkMock>
      <Story />
    </StorybookDarkMock>
  ),
];
