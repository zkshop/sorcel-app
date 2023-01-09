import { sendEmail } from '@/modules/checkout/sendEmail';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Box, Text, ApprovalIcon } from '@3shop/ui';

export const Success = () => {
  const location = useLocation();
  const {
    state: { name, email, paymentStatus },
  } = location;

  useEffect(() => {
    console.log({ name, email, paymentStatus });

    if (name && email && paymentStatus === 'succeeded') sendEmail(name, name, email);
  }, [name, email, paymentStatus]);

  return (
    <Box mt={32} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <ApprovalIcon fontSize="72px" />

      <Text fontSize="2xl">
        Your payment was successful.
        <br />
        Thank you for your purchase!
      </Text>

      <Link to="/">
        <Text> Go back to homepage </Text>
      </Link>
    </Box>
  );
};
