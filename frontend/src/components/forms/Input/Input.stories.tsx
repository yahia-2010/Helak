import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "./Input";
import AllProviders from "@/contexts/AllProviders";

export default {
  title: "Input",
  component: Input,
  decorators: [
    (Story) => (
      <div dir="rtl">
        <AllProviders>
          <Story />
        </AllProviders>
      </div>
    ),
  ],
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
  label: "text input",
  type: "text",
};

export const Password = Template.bind({});
Password.args = {
  label: "password input",
  type: "password",
};

export const Email = Template.bind({});
Email.args = {
  label: "email input",
  type: "email",
};

export const DefaultValue = Template.bind({});
DefaultValue.args = {
  label: "input with default value",
  value: "default value",
};

export const Placeholder = Template.bind({});
Placeholder.args = {
  placeholder: "please enter text...",
};

export const Error = Template.bind({});
Error.args = {
  label: "error input",
  error: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "disabled input",
  disabled: true,
};

export const Dark = Template.bind({});
Dark.args = {
  label: "dark input",
};
Dark.decorators = [
  (Story) => (
    <div className="dark">
      <Story />
    </div>
  ),
];
