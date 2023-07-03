import React from 'react';
import { Box, SignupSection } from '@3shop/ui';
import type { ComponentStory, Meta } from '@storybook/react';

const meta: Meta<typeof SignupSection> = {
  title: 'SignupSection',
  component: SignupSection,
};

export default meta;

type SignupSectionStory = ComponentStory<typeof SignupSection>;

const Template: SignupSectionStory = (args) => (
  <Box width="30vw" h="90vh">
    <SignupSection />
  </Box>
);

export const Primary = Template.bind({});
