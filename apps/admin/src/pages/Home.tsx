import { VerticalMenu } from '@3shop/ui';
import { DeliveryFeesContainer } from '../modules/DeliveryFees/DeliveryFeesContainer';
import { Gates } from '../modules/Gates';
import { SettingsContainer } from '../modules/Settings/SettingsContainer';
import { Payments } from '../modules/Payments/Payments';
import { OrderList } from '../modules/Order/OrderList';
import { Products } from '../modules/Products';
import { Poll } from './Poll';
import { Customization } from './Customization';

export const Home = () => {
  const items = [
    { title: 'General', content: <SettingsContainer /> },
    { title: 'Products', content: <Products /> },
    { title: 'Gates', content: <Gates /> },
    { title: 'Orders', content: <OrderList /> },
    { title: 'Integrations', content: <Payments /> },
    { title: 'Delivery Fees', content: <DeliveryFeesContainer /> },
    { title: 'Poll', content: <Poll /> },
    { title: 'Customization', content: <Customization /> },
  ];

  return <VerticalMenu items={items} />;
};
