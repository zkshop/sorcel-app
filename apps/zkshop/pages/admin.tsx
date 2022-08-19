import { Box } from "@chakra-ui/react";
import VerticalMenu from "../components/VerticalMenu";

import useGetAppProducts from "../hooks/useGetAppProducts";

const Admin = () => {
  const items = [
    { title: "General", content: <div>General</div> },
    { title: "Products", content: <div>Products</div> },
  ];

  return (
    <Box>
      <VerticalMenu items={items} />
    </Box>
  );
};

export default Admin;
