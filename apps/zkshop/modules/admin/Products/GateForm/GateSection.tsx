import { Heading, FormLabel, HStack, Input, Spinner, useDisclosure } from '@chakra-ui/react';
import { useState, ChangeEvent } from 'react';
import { fetchNFTAttributes } from 'store/slices/nftAttributes';
import { useAppSelector, useAppDispatch } from 'store/store';
import { Section, Button } from 'ui';
import { AddGateModal } from './AddGateModal';
import { GateFields } from './GateFields';

export const GateSection = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [contractAddress, setContractAddress] = useState('');
  const nftAttributes = useAppSelector((state) => state.nftAttributes.hits);
  const loading = useAppSelector((state) => state.nftAttributes.loading);
  const dispatch = useAppDispatch();

  const handleChangeContractAddress = (e: ChangeEvent<HTMLInputElement>) => {
    setContractAddress(e.target.value);
  };

  const handleClick = async () => {
    dispatch(fetchNFTAttributes(contractAddress));
  };

  return (
    <Section>
      <Heading fontSize="xl">
        Gates
        <Button float="right" onClick={onOpen}>
          + Create New Gate
        </Button>
      </Heading>

      <FormLabel>Enter the contract address of the NFT</FormLabel>
      <HStack>
        <Input
          onChange={handleChangeContractAddress}
          placeholder="0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"
        />
        <Button onClick={handleClick}>Find</Button>
      </HStack>

      {loading ? <Spinner /> : <GateFields nftAttributes={nftAttributes} />}
      <AddGateModal isFormValid={true} isOpen={isOpen} onClose={onClose} />
    </Section>
  );
};
