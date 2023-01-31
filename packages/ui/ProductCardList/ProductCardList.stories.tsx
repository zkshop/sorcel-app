import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { MainLayout } from '../MainLayout/MainLayout';

import { ProductCardList } from './ProductCardList';

export default {
  title: 'ProductCardList',
  component: ProductCardList,
} as ComponentMeta<typeof ProductCardList>;

const Template: ComponentStory<typeof ProductCardList> = (args) => (
  <MainLayout>
    <ProductCardList {...args} />
  </MainLayout>
);

const product = {
  id: '1',
  srcItem: '',
  title: 'Product Title',
  price: 100,
  discount: 10,
  priceReduced: 90,
  collection: 'Collection Name',
  isLocked: false,
  poapUrl: '',
  poapImgUrl: '',
};

const images = [
  'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixid=Mnw0MDQ2MTh8MHwxfHNlYXJjaHw5fHxmYXNoaW9ufGVufDB8fHx8MTY3NTE3MDQxOQ&ixlib=rb-4.0.3',
  'https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?ixid=Mnw0MDQ2MTh8MHwxfHNlYXJjaHwyN3x8cHJvZHVjdCUyMGZhc2hpb258ZW58MHx8fHwxNjc1MDg5NDI2&ixlib=rb-4.0.3',
  'https://images.unsplash.com/photo-1647891941746-fe1d53ddc7a6?ixid=Mnw0MDQ2MTh8MXwxfHNlYXJjaHwxfHxmYXNoaW9ufGVufDB8fHx8MTY3NTE3MDQxOQ&ixlib=rb-4.0.3',
];

// products with random images
const products = Array.from({ length: 8 }, (_, i) => ({
  ...product,
  id: `${i}`,
  srcItem: images[Math.floor(Math.random() * images.length)],
}));

export const Primary = Template.bind({});
Primary.args = {
  products,
};
