import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  VStack,
} from '@chakra-ui/react';
import { NftAttribute } from 'domains';
import { ChevronUpIcon } from '@chakra-ui/icons';
import { AttributeCheckboxList } from './AttributeCheckboxList';

type NftAttributePickerProps = {
  attributes: NftAttribute<any>[];
};

export const NftAttributePicker = ({ attributes }: NftAttributePickerProps) => (
  <VStack alignItems="stretch">
    <Heading fontSize="md" mt={2}>
      Properties
    </Heading>
    <Accordion defaultIndex={[0]} allowMultiple>
      {attributes.map((attribute) => (
        <AccordionItem key={`nft-attribute-picker-${attribute.name}`}>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              {attribute.name}
              <ChevronUpIcon />
            </Box>
          </AccordionButton>
          <AccordionPanel>
            <AttributeCheckboxList attribute={attribute} />
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  </VStack>
);
