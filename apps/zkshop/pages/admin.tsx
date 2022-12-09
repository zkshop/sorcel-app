import { Spinner, VerticalMenu } from 'ui';

import { useGetAdminQuery } from 'apollo';
import { General, Products } from 'modules';

const Admin = () => {
  const { data, loading } = useGetAdminQuery({ variables: { appId: process.env.APP_ID } });

  if (loading) return <Spinner />;

  if (!data || !data.app) {
    return <div> Error </div>;
  }

  const items = [
    {
      title: 'General',
      content: <General app={{ name: data.app.name || '', imgUrl: data.app.imgUrl || '' }} />,
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
