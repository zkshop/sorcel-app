import { Spinner } from '@chakra-ui/react';
import { VerticalMenu } from 'ui';

import { useGetAdminQuery } from 'libs/apollo/generated';
import { General, Products } from 'modules';

const Admin = () => {
  const { data, loading } = useGetAdminQuery();

  if (loading) return <Spinner />;

  if (!data || !data.app) {
    return <div> Error </div>;
  }

  const items = [
    {
      title: 'General',
      content: <General app={{ name: data.app.name || '' }} />,
    },
    { title: 'Products', content: <Products /> },
  ];

  return (
    <>
      <VerticalMenu items={items} />
    </>
  );
};

export default Admin;
