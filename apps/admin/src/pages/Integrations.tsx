import { useGetAdminAppQuery } from '@3shop/apollo';
import { Box, Code, Header, Spinner, Button, CopyIcon, Select, Text } from '@3shop/ui';
import { useClipboard } from '@chakra-ui/react';
import { useState } from 'react';

type Network = 'POLYGON' | 'ETHEREUM';

const CodeBlock = ({ code }: { code: string }) => {
  const { hasCopied, onCopy } = useClipboard(code);

  return (
    <Box position="relative" backgroundColor="black" borderRadius="lg" padding="5" my="4">
      <Button maxW={20} size="sm" position="absolute" right="2" top="2" onClick={onCopy}>
        {hasCopied ? 'Copied !' : <CopyIcon />}
      </Button>
      <Code display="block" whiteSpace="pre-wrap" backgroundColor="black" color="white">
        {code}
      </Code>
    </Box>
  );
};

export const Integrations = () => {
  const { data, loading, error } = useGetAdminAppQuery();
  const [network, setNetwork] = useState<Network>('POLYGON');

  if (loading) {
    return <Spinner />;
  }

  if (!data || error) {
    return <div>Error</div>;
  }

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setNetwork(event.target.value as Network);
  };

  const sampleCode = `<script>var global = global || window;window.__3SHOP_APP_ID__="${data.app[0].id}";window.__3SHOP_NETWORK__="${network}";</script><script type="module" defer src="https://cdn.3shop.co/app/index.js"></script><link rel="stylesheet" href="https://cdn.3shop.co/app/index.css">`;

  return (
    <>
      <Header title="Integrations" />
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
              </Select>
            </Box>
            <br />
            <CodeBlock code={sampleCode} />
          </li>
          <li>
            Insert anywhere you want inside your &lt;body&gt; tag this div, this is where the token
            gating module will appear.
            <br />
            <CodeBlock code='<div id="3shop-app"></div>' />
          </li>
        </ol>
      </Box>
      <Box>
        <Text variant="H700" paddingY={2}>
          Tutorial
        </Text>
        <Box pos="relative" paddingBottom="55%" height={0}>
          <iframe
            src="https://youtu.be/G_0a_uOh9eg"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          ></iframe>
        </Box>
      </Box>
    </>
  );
};
