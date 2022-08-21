import { Box } from "@chakra-ui/react";
import General from "../components/admin/General/General";
import Products from "../components/admin/Products/Products";
import VerticalMenu from "../components/VerticalMenu";

import { useGetAdminQuery } from "../libs/apollo/generated";

type AdminProps = {};

const Admin = ({}: AdminProps) => {
  const { data } = useGetAdminQuery();

  if (!data || !data.app) {
    return <div>Error</div>;
  }

  const items = [
    {
      title: "General",
      content: <General app={{ name: data.app.name || "" }} />,
    },
    { title: "Products", content: <Products /> },
  ];

  return (
    <Box>
      <VerticalMenu items={items} />
    </Box>
  );
};

export default Admin;
