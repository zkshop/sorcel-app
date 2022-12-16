import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  VStack,
  ChevronUpIcon,
} from '@3shop/ui';
import type { NftAttribute } from '@3shop/domains';

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
