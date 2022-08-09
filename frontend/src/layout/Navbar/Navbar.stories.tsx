import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Navbar from "./Navbar";
import AllProviders from "@/contexts/AllProviders";

export default {
  title: "Navbar",
  component: Navbar,
  decorators: [
    (Story) => (
      <div dir="rtl">
        <AllProviders>
          <Story />
        </AllProviders>
      </div>
    ),
  ],
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = () => <Navbar />;

export const Default = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [
  (Story) => (
    <div className="dark">
      <div className="dark:text-white">
        <Story />
      </div>
    </div>
  ),
];
