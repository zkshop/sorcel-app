import { useGetAdminAppQuery } from '@3shop/apollo';
import { Spinner, Box, Select, Button, Code, CopyIcon, Text, VStack, useToast } from '@3shop/ui';
import { useMemo, useState } from 'react';
import { useClipboard } from '@chakra-ui/react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { irBlack } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Network_standard } from '../../hooks/useUserSettings';
import { useEffect } from 'react';
import { userSettingsSelector } from '@3shop/admin-store';
import type { dialog } from '@3shop/ui/Modal/Dialogs';
import { Dialogs } from '@3shop/ui/Modal/Dialogs';
import { confirmDialog } from '../Dialog/heirloom/confirm';
import { copyCorsDialog } from '../Dialog/heirloom/configuration';
import { importDialog } from '../Dialog/heirloom/import';
import { sorcelApp } from '../../api/sorcel-app/sorcel-app';
import { useApi } from '../../hooks/useApi';

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

export const IntegrationCode = () => {
  const { data, loading, error } = useGetAdminAppQuery();
  const [network, setNetwork] = useState<Network>('POLYGON');
  const { settings } = userSettingsSelector();
  const [showHeirloom, setShowHeirloom] = useState(false);
  const [ready, sorceAppInstance] = useApi(() => new sorcelApp());
  const toast = useToast();

  showHeirloom;
  const heirloomDialogs = useMemo<dialog[]>(() => {
    if (!showHeirloom) return [];
    return [confirmDialog, copyCorsDialog, importDialog];
  }, [showHeirloom]);

  useEffect(() => {
    if (!settings || !settings.network) return;
    if (settings.network == Network_standard.EVM) setNetwork(defaultNetwork);
    else setNetwork('XRPLEDGER');
  }, [settings]);

  if (loading || !ready) {
    return <Spinner />;
  }

  if (!data || error) {
    return <div>Error</div>;
  }

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const network = event.target.value as Network;
    if (network == 'HEIRLOOM') {
      setShowHeirloom(true);
    } else {
      if (data.app[0].enableHeirloom == true) {
        (async () => {
          await sorceAppInstance
            ?.toggleHeirloom(false)
            .then(() => {
              setNetwork(network);
            })
            .catch((e) => {
              console.error(e);
              toast({
                status: 'error',
                title: 'An error occured when switching nwteork',
                description: 'Please try again later or contact us.',
              });
            });
        })();
      } else {
        setNetwork(network);
      }
    }
  };

  const RenderCodeBlock = () => {
    const sampleCode = `<script>var global = global || window;window.__3SHOP_APP_ID__="${data.app[0].id}";window.__3SHOP_NETWORK__="${network}";</script><script type="module" defer src="https://cdn.3shop.co/app/index.js"></script><link rel="stylesheet" href="https://cdn.3shop.co/app/index.css">`;
    return <CodeBlock language="html" code={sampleCode} />;
  };

  return (
    <>
      <Dialogs lastModalNextText="Get started">{heirloomDialogs}</Dialogs>
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
              <RenderCodeBlock />
            </li>
            <li>
              Insert anywhere you want inside your &lt;body&gt; tag this div, this is where the
              token gating module will appear.
              <br />
              <CodeBlock language="html" code='<div id="3shop-app"></div>' />
            </li>
          </ol>
        </Box>
      </VStack>
    </>
  );
};
