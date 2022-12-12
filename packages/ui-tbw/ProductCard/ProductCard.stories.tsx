import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { HStack } from '@chakra-ui/react';

import { ProductCard } from './ProductCard';

export default {
  title: 'The Big Whale/ProductCard',
  component: ProductCard,
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => (
  <HStack width="248px" margin="auto">
    <ProductCard {...args} />;
  </HStack>
);

export const Primary = Template.bind({});
Primary.args = {
  id: '51e46fb2-cd9e-4baf-81db-8df9d58b62b2',
  srcItem:
    'https://kqjytgxbtetzewipikax.supabase.co/storage/v1/object/public/products/1e9f094b-0896-48a3-ad1e-0ed68a7581a9',
  title: 'Discount abonnement',
  description: 'Discount de 5% à 25% sur l’abonnement annuel TBW.',
  price: '99',
};
