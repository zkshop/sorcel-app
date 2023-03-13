import type { ComponentStory, ComponentMeta } from '@storybook/react';

import { TBWProductCardList } from './TBWProductCardList';

export default {
  title: 'The Big Whale/TBWProductCardList',
  component: TBWProductCardList,
} as ComponentMeta<typeof TBWProductCardList>;

const Template: ComponentStory<typeof TBWProductCardList> = (args) => (
  <TBWProductCardList {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  products: [
    {
      id: '28f10d56-2585-4697-805b-51114ae34250',
      iamge:
        'https://kqjytgxbtetzewipikax.supabase.co/storage/v1/object/public/products/914fbe9a-7b0b-4197-87ad-2846638ffdd7',
      title: 'AMA pour les débutants',
      description: 'Une session ouverte pour comprendre le Web3.',
      price: '99',
    },
    {
      id: '60110df4-2124-407f-adc5-2b5df3a1f122',
      iamge:
        'https://kqjytgxbtetzewipikax.supabase.co/storage/v1/object/public/products/a2949bfc-b3db-40c7-b017-be6485b6ba77',
      title: 'Accès Discord TBW',
      description: 'Espace dédié sur Discord pour tous les détenteurs.',
      price: '0',
    },
    {
      externalLink: '/#/ms/signup/6372923763918000040c740f',
      id: '51e46fb2-cd9e-4baf-81db-8df9d58b62b2',
      iamge:
        'https://kqjytgxbtetzewipikax.supabase.co/storage/v1/object/public/products/1e9f094b-0896-48a3-ad1e-0ed68a7581a9',
      title: 'Discount abonnement',
      description: 'Discount de 5% à 25% sur l’abonnement annuel TBW.',
      price: '99',
    },
    {
      id: '5898ebc0-550e-4a1c-ab6c-7f68c723f889',
      iamge:
        'https://kqjytgxbtetzewipikax.supabase.co/storage/v1/object/public/products/9b26d95a-ea37-4242-97fb-75bbc529adc4',
      title: 'Pass pour la collection 2023',
      description: 'Pour tous les détenteurs du NFT.',
      price: '990',
    },
    {
      id: 'a7499000-c6a5-49e6-8d32-d9d4ab413119',
      iamge:
        'https://kqjytgxbtetzewipikax.supabase.co/storage/v1/object/public/products/de9ced57-5902-435b-926a-3fab84535edc',
      title: 'Encadrement Picto',
      description: '15% de remise sur un encadrement par le labo photo Picto.',
      price: '0',
      collection: '',
    },
    {
      id: 'ebb24d16-6b6f-464b-bb54-897482b4bc67',
      iamge:
        'https://kqjytgxbtetzewipikax.supabase.co/storage/v1/object/public/products/eb64676e-9f10-412f-8a73-72956391b258',
      title: 'Invitation event TBW ',
      description: 'Le NFT fondateur donne accès à l’évènement TBW.',
      price: '0',
    },
  ],
};
