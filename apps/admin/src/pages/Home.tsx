import { VerticalMenu } from '@3shop/ui';
import { GeneralContainer } from '../modules/General/GeneralContainer';
import { Integration } from '../modules/Integration/Integration';
import { OrderList } from '../modules/Order/OrderList';
import { Products } from '../modules/Products';

export const Home = () => {
  const items = [
    { title: 'General', content: <GeneralContainer /> },
    { title: 'Products', content: <Products /> },
    { title: 'Orders', content: <OrderList /> },
    { title: 'Integrations', content: <Integration /> },
  ];

  return (
    <>
      <VerticalMenu items={items} />
    </>
  );
};
