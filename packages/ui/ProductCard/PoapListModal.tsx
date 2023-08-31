import { HStack, Button } from '@chakra-ui/react';
import { PoapLink } from '../PoapLink';
import { Modal } from '../Modal';

type PoapLinkProps = {
  poapImgList?: { id: string; url: string }[];
  isOpen: boolean;
  onClose: () => void;
  name: string;
};

export const PoapListModal = ({ isOpen, onClose, name, poapImgList }: PoapLinkProps) => (
  <Modal
    title={`POAPs for ${name}`}
    body={
      <HStack justifyContent="center" padding={2}>
        {poapImgList?.map((poap) => (
          <PoapLink key={`poap-link-${poap.id}`} poapId={poap.id} imgUrl={poap.url} />
        ))}
      </HStack>
    }
    footer={
      <Button onClick={onClose} mr={3}>
        Close
      </Button>
    }
    isOpen={isOpen}
    onClose={onClose}
  />
);
