import React from 'react';
import { Box, Input } from '@3shop/ui';
import type { ComponentStory, Meta } from '@storybook/react';

const meta: Meta<typeof Input> = {
  title: 'Input',
  component: Input,
};

export default meta;

type InputStory = ComponentStory<typeof Input>;

const Template: InputStory = (args) => (
  <Box w="300px">
    <Input {...args} placeholder="Placeholder" />
  </Box>
);

export const Primary: InputStory = Template.bind({});
Primary.args = {};

export const Disabled: InputStory = Template.bind({});
Disabled.args = {
  isDisabled: true,
};
