import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Radio from "./Radio";
import {
  StorybookDarkMock,
  StorybookDefaultDecorators,
} from "@/utils/util-components/storybookMocks";

export default {
  title: "Radio",
  component: Radio,
  decorators: [
    (Story) => (
      <StorybookDefaultDecorators>
        <Story />
      </StorybookDefaultDecorators>
    ),
  ],
} as ComponentMeta<typeof Radio>;

const options = ["option-1", "option-2", "option-3"];
const values = options;

const Template: ComponentStory<typeof Radio> = (args) => (
  <Radio
    {...args}
    handleSelect={() => {
      /* ... */
    }}
    value={options[0]}
    options={options}
    values={values}
  />
);

export const Default = Template.bind({});
Default.args = {
  label: "radio buttons",
};

export const Dark = Template.bind({});
Dark.args = {
  label: "dark radio buttons",
};
Dark.decorators = [
  (Story) => (
    <StorybookDarkMock>
      <Story />
    </StorybookDarkMock>
  ),
];
