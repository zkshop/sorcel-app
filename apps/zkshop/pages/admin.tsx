import { Box } from "@chakra-ui/react";
import General from "../components/admin/General/General";
import VerticalMenu from "../components/VerticalMenu";

const Admin = () => {
  const items = [
    { title: "General", content: <General /> },
    { title: "Products", content: <div>Products</div> },
  ];

  return (
    <Box>
      <VerticalMenu items={items} />
    </Box>
  );
};

export default Admin;
