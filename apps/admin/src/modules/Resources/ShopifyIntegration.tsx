import { Header, Text, Button } from '@3shop/ui';

export const ShopifyIntegration = () => (
  <>
    <Header title="Need a Shopify integration?" />
    <Text mb={2} variant="H500">
      Make an appointment with us to integrate your Shopify store
    </Text>
    <Button
      onClick={() => window.open('https://app.lemcal.com/@sorcel/15mn', '_blank')}
      style={{
        backgroundColor: '#008060',
        color: 'white',
        fontWeight: 'bold',
        padding: '7px 16px',
        borderRadius: '5px',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
        fontSize: '12px' 
      }}
    >
      Integrate on Shopify
    </Button>
  </>
);
