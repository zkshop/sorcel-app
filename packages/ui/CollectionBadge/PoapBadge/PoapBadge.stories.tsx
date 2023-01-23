import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@chakra-ui/react';

import { PoapBadge } from './PoapBadge';

export default {
  title: 'PoapBadge',
  component: PoapBadge,
} as ComponentMeta<typeof PoapBadge>;

const Template: ComponentStory<typeof PoapBadge> = (args) => (
  <Box
    sx={{
      position: 'relative',
      w: '200px',
      h: '300px',
      m: '50px auto',
      border: '1px solid black',
      bg: 'white',
    }}
  >
    <PoapBadge {...args} />
  </Box>
);

export const Primary = Template.bind({});
Primary.args = {
  imgUrl: 'https://poap.xyz/POAP.f74a7300.svg',
  href: 'https://poap.gallery/event/9496',
};
