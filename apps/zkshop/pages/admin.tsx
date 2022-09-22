import { Spinner } from "@chakra-ui/react";
import General from "../components/admin/General/General";
import Products from "../components/admin/Products/ProductList";
import { GridLayout } from "../components/GridLayout";
import VerticalMenu from "../components/VerticalMenu";

import { useGetAdminQuery } from "../libs/apollo/generated";

type AdminProps = {};

const Admin = ({}: AdminProps) => {
  const { data, loading } = useGetAdminQuery();

  if (loading) return <Spinner />;

  if (!data || !data.app) {
    return <div> Error </div>;
  }

  const items = [
    {
      title: "General",
      content: <General app={{ name: data.app.name || "" }} />,
    },
    { title: "Products", content: <Products /> },
  ];

  return (
    <GridLayout sx={{ py: { xs: 4, md: 8, lg: 8 }, px: 0, margin: 0 }}>
      <VerticalMenu items={items} />
    </GridLayout>
  );
};

export default Admin;
