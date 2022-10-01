import { ChevronLeftIcon } from "@chakra-ui/icons";
import { HStack, Text } from "@chakra-ui/react";
import Link from "next/link";

type BackButtonProps = {
  text?: string;
  href: string;
};

export const BackButton = ({ text = "Go back", href }: BackButtonProps) => (
  <Link href={href}>
    <HStack
      sx={{ w: "100%", cursor: "pointer", mb: 4, textDecoration: "underline" }}
    >
      <ChevronLeftIcon fontSize="24px" />

      <Text fontSize="14px" fontWeight="bold">
        {text}
      </Text>
    </HStack>
  </Link>
);
