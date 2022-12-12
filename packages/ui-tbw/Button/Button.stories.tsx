import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { HStack } from '@chakra-ui/react';

import { Button } from './Button';

export default {
  title: 'The Big Whale/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <HStack w="full" justifyContent="center">
    <Button {...args} />
  </HStack>
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
};
