import { HStack } from '@chakra-ui/react';
import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProductCard } from './ProductCard';

export default {
  title: 'ProductCard',
  component: ProductCard,
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => (
  <HStack width="294px" margin="auto">
    <ProductCard {...args} />;
  </HStack>
);

export const Primary = Template.bind({});
Primary.args = {
  id: '1',
  image:
    'https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixid=Mnw0MDQ2MTh8MHwxfHNlYXJjaHwyN3x8cHJvZHVjdCUyMGZhc2hpb258ZW58MHx8fHwxNjc1MDg5NDI2&ixlib=rb-4.0.3',
  name: 'Product Title',
  price: 100,
  discount: 10,
  priceReduced: 90,
  collectionName: 'Collection Name',
  isLocked: false,
  poapImgUrl: '',
};
