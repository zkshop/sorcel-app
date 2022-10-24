import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HStack } from '@chakra-ui/react';

import { ProductCard } from './ProductCard';

export default {
  title: 'ProductCard',
  component: ProductCard,
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => (
  <HStack width="216px" margin="auto">
    <ProductCard {...args} />;
  </HStack>
);

export const Primary = Template.bind({});
Primary.args = {
  id: '1',
  srcItem: '',
  title: 'Product Title',
  price: '100',
  discount: '10%',
  priceReduced: 90,
  collection: 'Collection Name',
  isTransparent: false,
  isEligible: false,
  poapUrl: '',
  poapImgUrl: '',
};
