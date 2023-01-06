import { sendEmail } from '@/modules/checkout/sendEmail';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Box, Text, ApprovalIcon } from '@3shop/ui';

export const Success = () => {
  const location = useLocation();
  const {
    state: { name, email, paymentStatus },
  } = location;
  const navigate = useNavigate();

  setTimeout(() => {
    navigate('/');
  }, 5000);

  useEffect(() => {
    if (name && email && paymentStatus === 'succeeded') sendEmail(name, name, email);
  }, [name, email, paymentStatus]);

  return (
    <Box
      sx={{
        mt: 32,
        flexDirection: 'column',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ApprovalIcon fontSize="72px" />

      <Text fontSize="2xl">
        Your payment was successful.
        <br />
        Thank you for your purchase!
      </Text>

      <Link to="/">
        <Text> redirect in 5s </Text>
      </Link>
    </Box>
  );
};
