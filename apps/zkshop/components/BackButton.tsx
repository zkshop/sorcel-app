import { ArrowLeftIcon } from "@chakra-ui/icons";
import { HStack, Text } from "@chakra-ui/react";
import Link from "next/link";

type BackButtonProps = {
  text: string;
};

export const BackButton = ({ text }: BackButtonProps) => (
    <Link href="/">
      <HStack sx={{ w: "100%", cursor: "pointer" }}>
        <ArrowLeftIcon mr={2} />

        <Text>{text}</Text>
      </HStack>
    </Link>
  );
