import { Box } from "@chakra-ui/react";
import { collection } from "firebase/firestore";
import React from "react";

type CollectionBadgeProps = {
  CollectionName: string;
};

export const CollectionBadge = ({ CollectionName }: CollectionBadgeProps) => {
  return (
    <Box
      zIndex={1}
      position={"absolute"}
      top={-2}
      right={-1}
      bgGradient="linear(to-r, #0987A0, #805AD5)"
      borderRadius={"0px 12px"}
      p={1}
      boxShadow="rgba(0, 0, 0, 0.8) 0px 5px 15px"
      color="white"
      fontSize={"14px"}
      fontWeight={"bold"}
      textTransform={"capitalize"}
      _after={{
        content: "''",
        position: "absolute",
        width: "0px",
        height: "0px",
        borderStyle: "solid",
        right: "-4px",
        bottom: "-4px",
        borderWidth: "0px 4px 4px 4px",
        borderColor:
          "rgb(128, 90, 213) transparent transparent rgb(128, 90, 213)",
      }}
    >
      {CollectionName}
    </Box>
  );
};
