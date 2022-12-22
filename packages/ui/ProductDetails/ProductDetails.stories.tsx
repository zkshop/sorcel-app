import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { MainLayout } from '../MainLayout/MainLayout';

import { ProductDetails } from './ProductDetails';

export default {
  title: 'ProductDetails',
  component: ProductDetails,
} as ComponentMeta<typeof ProductDetails>;

const Template: ComponentStory<typeof ProductDetails> = (args) => (
  <MainLayout>
    <ProductDetails {...args} />
  </MainLayout>
);

export const Primary = Template.bind({});
Primary.args = {
  id: '08bc23d4-643a-4e91-9a0f-78f2aaeb480e',
  title: 'Matic millionaire',
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  price: '100',
  priceReduced: 0,
  discount: '',
  srcItem:
    'https://firebasestorage.googleapis.com/v0/b/ethcc-72c6f.appspot.com/o/polygon%20sweater.jpeg?alt=media&token=314adbce-7f9f-46a5-b652-4b2d2dc3314a',
  isLocked: false,
  collection: '',
  poapUrl: 'https://poap.gallery/event/1',
  poapImgUrl: 'https://www.poap.xyz/events/badges/dappcon-18.png',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  sendTransaction: () => {},
};
