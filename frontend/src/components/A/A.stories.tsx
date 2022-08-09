import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import A from "./A";
import AllProviders from "@/contexts/AllProviders";

export default {
  title: "A",
  component: A,
  decorators: [
    (Story) => (
      <div dir="rtl">
        <AllProviders>
          <Story />
        </AllProviders>
      </div>
    ),
  ],
} as ComponentMeta<typeof A>;

const Template: ComponentStory<typeof A> = (args) => (
  <A {...args}>{args.children}</A>
);

export const AnchorLink = Template.bind({});
AnchorLink.args = {
  href: "#",
  children: "link",
  navLink: false,
};

export const NavLink = Template.bind({});
NavLink.args = {
  href: "#",
  navLink: true,
  children: "nav-link",
};
