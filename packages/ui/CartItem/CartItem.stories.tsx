import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CartItem } from './CartItem';

export default {
  title: 'CartItem',
  component: CartItem,
} as ComponentMeta<typeof CartItem>;

const Template: ComponentStory<typeof CartItem> = (args) => <CartItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
