import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PoapBadge } from './PoapBadge';

export default {
  title: 'PoapBadge',
  component: PoapBadge,
} as ComponentMeta<typeof PoapBadge>;

const Template: ComponentStory<typeof PoapBadge> = (args) => <PoapBadge {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  imgUrl: 'https://poap.xyz/POAP.f74a7300.svg',
};
