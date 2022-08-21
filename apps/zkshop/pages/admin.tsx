import { Box } from "@chakra-ui/react";
import General from "../components/admin/General/General";
import Products from "../components/admin/Products/Products";
import VerticalMenu from "../components/VerticalMenu";

const Admin = () => {
  const items = [
    { title: "General", content: <General /> },
    { title: "Products", content: <Products /> },
  ];

  return (
    <Box>
      <VerticalMenu items={items} />
    </Box>
  );
};

export default Admin;
