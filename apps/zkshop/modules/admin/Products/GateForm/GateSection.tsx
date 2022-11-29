import { Heading, useDisclosure } from '@chakra-ui/react';
import { Gate } from 'apollo';
import { Section, Button } from 'ui';
import { GateTable } from '../GateTable';
import { AddGateModal } from './AddGateModal';

type GateSectionProps = {
  gates: Gate[];
};

export const GateSection = ({ gates }: GateSectionProps) => {
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

      <GateTable gates={gates} />
    </Section>
  );
};
