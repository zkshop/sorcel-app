import { Heading, useDisclosure } from '@chakra-ui/react';
import { Section, Button } from 'ui';
import { AddGateModal } from './AddGateModal';

export const GateSection = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Section>
      <Heading fontSize="xl">
        Gates
        <Button float="right" onClick={onOpen}>
          + Create New Gate
        </Button>
      </Heading>

      <AddGateModal isFormValid={true} isOpen={isOpen} onClose={onClose} />
    </Section>
  );
};
