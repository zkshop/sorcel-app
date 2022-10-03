import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CartOrderSummary } from './CartOrderSummary';

export default {
  title: 'CartOrderSummary',
  component: CartOrderSummary,
} as ComponentMeta<typeof CartOrderSummary>;

const Template: ComponentStory<typeof CartOrderSummary> = (args) => <CartOrderSummary {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'CartOrderSummary',
};
