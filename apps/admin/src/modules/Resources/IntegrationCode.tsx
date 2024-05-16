import { useGetAdminAppQuery } from '@3shop/apollo';
import { Spinner, Box, Select, Button, Code, CopyIcon, Text, VStack, Modal, ModalContent, ModalOverlay, ModalHeader, ModalBody, ModalFooter } from '@3shop/ui';
import { useState } from 'react';
import { useClipboard } from '@chakra-ui/react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { irBlack } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Network_standard } from '../../hooks/useUserSettings';
import { useEffect } from 'react';
import { userSettingsSelector } from '@3shop/admin-store';
import { ChakraModalProps } from '@3shop/ui/Modal';

type Network = 'POLYGON' | 'ETHEREUM' | 'XRPLEDGER' | 'HEIRLOOM';

const defaultNetwork = 'POLYGON';

const CodeBlock = ({ code }: { code: string; language: string }) => {
  const { hasCopied, onCopy } = useClipboard(code);

  return (
    <Box position="relative" backgroundColor="black" borderRadius="lg" padding="5" my="4">
      <Button maxW={20} size="sm" position="absolute" right="2" top="2" onClick={onCopy}>
        {hasCopied ? 'Copied !' : <CopyIcon />}
      </Button>
      <Code display="block" whiteSpace="pre-wrap" backgroundColor="black" color="white">
        <SyntaxHighlighter language="html" style={irBlack} wrapLongLines>
          {code}
        </SyntaxHighlighter>
      </Code>
    </Box>
  );
};

interface ConfirmModalProps extends ChakraModalProps {
  onYes: <T>() => Promise<T | void>,
  onNo: <T>() => Promise<T | void>,
}

const ConfirmModal = ({ onYes, onNo, children, ...rest }: ConfirmModalProps) => {
  return <Modal {...rest}>
    <ModalOverlay />

    <ModalContent>

      {children}
      <ModalFooter>
        <Button
          color="white"
          backgroundColor="red"
          // isDisabled={loading}
          onClick={onNo}
          mr={3}
        >
          Continue with Heirloom
        </Button>
        <Button
          color="white"
          backgroundColor="red"
          // isDisabled={loading}
          onClick={onNo}
          mr={3}
        >
          Cancel
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
}

export const IntegrationCode = () => {
  const { data, loading, error } = useGetAdminAppQuery();
  const [network, setNetwork] = useState<Network>('POLYGON');
  const { settings } = userSettingsSelector();

  useEffect(() => {
    if (!settings || !settings.network) return;
    if (settings.network == Network_standard.EVM) setNetwork(defaultNetwork);
    else setNetwork('XRPLEDGER');
  }, [settings]);

  if (loading) {
    return <Spinner />;
  }

  if (!data || error) {
    return <div>Error</div>;
  }

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedNetwork = event.target.value as Network;
    if (selectedNetwork === 'HEIRLOOM') {
      alert('test');
    }
    setNetwork(selectedNetwork);
  };

  const sampleCode = `<script>var global = global || window;window.__3SHOP_APP_ID__="${data.app[0].id}";window.__3SHOP_NETWORK__="${network}";</script><script type="module" defer src="https://cdn.3shop.co/app/index.js"></script><link rel="stylesheet" href="https://cdn.3shop.co/app/index.css">`;

  return (
    <>
      <ConfirmModal isOpen={true} onNo={async () => {
        return;
      }} onYes={async () => {

      }} onClose={() => { }} isCentered>
        <ModalHeader>{"Use Heirloom as network"}</ModalHeader>
        <ModalBody>
          <Text>
            You have selected Heirloom as the network. Please note that Heirloom works differently:
            <ul>
              <li>You can create only one gate for the entire app.</li>
              <li>You cannot use NFTs and POAP or previously created gates.</li>
            </ul>
          </Text>
        </ModalBody>
      </ConfirmModal>
      <VStack alignItems="flex-start">
        <Text textAlign="left" variant="H700" paddingY={2}>
          Integration code
        </Text>
        <Box px={4}>
          <ol>
            <li>Find the &lt;head&gt; tag inside your html</li>
            <li>
              <Box display="flex" flexDirection="row">
                Copy the following code inside the &lt;head&gt;. Choose the network you want to use:
                &nbsp;&nbsp;
                <Select maxW="200px" value={network} onChange={handleChange}>
                  <option value="POLYGON">Polygon</option>
                  <option value="ETHEREUM">Ethereum</option>
                  <option value="XRPLEDGER">XRP Ledger</option>
                  <option value="HEIRLOOM">Heirloom</option>
                </Select>
              </Box>
              <br />
              <CodeBlock language="html" code={sampleCode} />
            </li>
            <li>
              Insert anywhere you want inside your &lt;body&gt; tag this div, this is where the token
              gating module will appear.
              <br />
              <CodeBlock language="html" code='<div id="3shop-app"></div>' />
            </li>
          </ol>
        </Box>
      </VStack>
    </>
  );
};
