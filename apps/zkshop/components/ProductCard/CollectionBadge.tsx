import { Box } from "@chakra-ui/react";
import { collection } from "firebase/firestore";
import React from "react";

type CollectionBadgeProps = {
  CollectionName: string;
};

export const CollectionBadge = ({ CollectionName }: CollectionBadgeProps) => {
  return (
    <Box
      position={"absolute"}
      right={-2}
      top={-2}
      bgColor={"white"}
      opacity={0.9}
      borderRadius="md"
      p={1}
      boxShadow="rgba(0, 0, 0, 0.8) 0px 5px 15px"
    >
      {CollectionName}
    </Box>
  );
};
