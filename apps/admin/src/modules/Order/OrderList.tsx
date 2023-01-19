import { useGetOrdersQuery } from '@3shop/apollo';
import { Header, Table, Spinner, Box } from '@3shop/ui';

import { ORDER_ATTRIBUTES } from './constants';
import { OrderListItem } from './OrderListItem';

export const OrderList = () => {
  const { data, error, loading } = useGetOrdersQuery();

  if (loading) return <Spinner />;

  if (error || !data) {
    return <div>Error</div>;
  }

  return (
    <Box>
      <Header title="Orders" />

      <Table
        data={data.orders}
        heads={ORDER_ATTRIBUTES}
        renderRow={({
          address,
          email,
          firstname,
          id,
          lastname,
          status,
          product_id,
          product: { image },
        }) => (
          <OrderListItem
            address={address}
            email={email}
            firstname={firstname}
            lastname={lastname}
            id={id}
            productImage={image}
            status={status}
            productId={product_id}
            key={`order-list-item-${id}`}
          />
        )}
      />
    </Box>
  );
};
