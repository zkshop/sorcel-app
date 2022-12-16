import { VerticalMenu } from '@3shop/ui';
import { GeneralContainer } from '../modules/General/GeneralContainer';
import { Products } from '../modules/Products';

export const Home = () => {
  const items = [
    { title: 'General', content: <GeneralContainer /> },
    { title: 'Products', content: <Products /> },
  ];

  return (
    <>
      <VerticalMenu items={items} />
    </>
  );
};
