import { VerticalMenu } from '@3shop/ui';
import { DeliveryFeesContainer } from '../modules/DeliveryFees/DeliveryFeesContainer';
import { Gates } from '../modules/Gates';
import { GeneralContainer } from '../modules/General/GeneralContainer';
import { Integration } from '../modules/Integration/Integration';
import { OrderList } from '../modules/Order/OrderList';
import { Products } from '../modules/Products';

export const Home = () => {
  const items = [
    { title: 'General', content: <GeneralContainer /> },
    { title: 'Products', content: <Products /> },
    { title: 'Gates', content: <Gates /> },
    { title: 'Orders', content: <OrderList /> },
    { title: 'Integrations', content: <Integration /> },
    { title: 'Delivery Fees', content: <DeliveryFeesContainer /> },
  ];

  return <VerticalMenu items={items} />;
};
