import { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { sendEmail } from '@/modules/checkout/sendEmail';
import { Box, Text, ApprovalIcon } from '@3shop/ui';
import { useAppSelector } from '@3shop/store';

export const Success = () => {
  const order = useAppSelector((state) => state.user.order);

  useEffect(() => {
    if (order) sendEmail(order.firstname, order.lastname, order.email);
  }, [order]);

  if (!order) return <Navigate to="/" />;

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
