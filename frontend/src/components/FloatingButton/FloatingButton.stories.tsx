import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import AllProviders from "@/contexts/AllProviders";
import FloatingButton from "./FloatingButton";
import { CogIcon } from "@heroicons/react/solid";

export default {
  title: "FloatingButton",
  component: FloatingButton,
  decorators: [
    (Story) => (
      <div dir="rtl">
        <AllProviders>
          <Story />
        </AllProviders>
      </div>
    ),
  ],
} as ComponentMeta<typeof FloatingButton>;

const Template: ComponentStory<typeof FloatingButton> = (args) => (
  <FloatingButton {...args} icon={<CogIcon className="h-5" />} />
);

export const Default = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [
  (Story) => (
    <div className="dark">
      <Story />
    </div>
  ),
];
