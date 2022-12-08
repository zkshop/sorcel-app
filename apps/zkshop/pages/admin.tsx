import { Spinner, VerticalMenu } from 'ui';

import { useGetAdminQuery } from 'apollo';
import { Products } from 'modules';

const Admin = () => {
  const { data, loading } = useGetAdminQuery({ variables: { appId: process.env.APP_ID } });

  if (loading) return <Spinner />;

  if (!data || !data.app) {
    return <div> Error </div>;
  }

  const items = [{ title: 'Products', content: <Products /> }];

  return (
    <>
      <VerticalMenu items={items} />
    </>
  );
};

export default Admin;
