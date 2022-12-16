/* eslint-disable */
import { sendEmail } from 'modules/checkout/sendEmail';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Box, Text, Image } from '@3shop/ui';

const success = () => {
  const { query } = useRouter();
  const { name, email, redirect_status } = query as {
    name: string;
    email: string;
    redirect_status: string;
  };

  setTimeout(() => {
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
  }, 5000);

  useEffect(() => {
    if (name && email && redirect_status === 'succeeded') sendEmail(name, name, email);
  }, [name, email, redirect_status]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Link href="/">
        <Image src="/success.svg" />
        <Text> redirect in 5s </Text>
      </Link>
    </Box>
  );
};

export default success;
