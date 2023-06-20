import { useGetAdminAppQuery } from '@3shop/apollo';
import { Box, Code, Header, Spinner } from '@3shop/ui';

export const Integrations = () => {
  const { data, loading, error } = useGetAdminAppQuery();

  if (loading) {
    return <Spinner />;
  }

  if (!data || error) {
    return <div>Error</div>;
  }

  return (
    <>
      <Header title="Integrations" />
      <Box px={4}>
        <ol>
          <li>Find the &lt;head&gt; tag inside your html</li>
          <li>
            Copy the following code inside the &lt;head&gt;
            <br />
            <Code>{'<script>'}</Code>
            <br />
            <Code>{'  window.__3SHOP_APP_ID__ = "' + data.app[0].id + '";'}</Code>
            <br />
            <Code>{'  window.__3SHOP_NETWORK__ = "POLYGON";'}</Code>
            <br />
            <Code>{'</script>'}</Code>
            <br />
            <Code>{'<script defer="defer" src="https://cdn.3shop.co/app/index.js"></script>'}</Code>
          </li>
          <li>
            Insert at the end of your &lt;body&gt; tag this div, this is the place where the FAQ
            will appear.
            <br />
            <Code>{'<div class="3shop-app"></div>'}</Code>
          </li>
        </ol>
      </Box>
    </>
  );
};
