import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Card from "./Card";
import { StorybookDefaultDecorators } from "@/utils/util-components/StorybookDefaultDecorators";
import { StorybookDarkMock } from "@/mocks/storybookMocks";
import dummyText from "@/utils/util-data/dummyText";

export default {
  title: "Card",
  component: Card,
  decorators: [
    (Story) => (
      <StorybookDefaultDecorators>
        <Story />
      </StorybookDefaultDecorators>
    ),
  ],
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args} description={dummyText[10]} />
);

export const Default = Template.bind({});
Default.args = {
  title: "default card",
};

export const Link = Template.bind({});
Link.args = {
  title: "link card",
  url: "#",
};

export const WithActions = Template.bind({});
WithActions.args = {
  title: "card with actions",
  actions: [
    {
      text: "action-1",
    },
    {
      text: "action-2",
      variant: "secondary",
    },
  ],
};

export const Dark = Template.bind({});
Dark.args = {
  title: "dark card",
};
Dark.decorators = [
  (Story) => (
    <StorybookDarkMock>
      <Story />
    </StorybookDarkMock>
  ),
];
