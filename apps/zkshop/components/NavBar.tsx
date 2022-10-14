import { ConnectButtonGroup } from './ConnectButtonGroup';
import { LoginModal } from './LoginModal';
import { VStack, HStack, useDisclosure, Image } from '@chakra-ui/react';
// TODO: USE NESTJS IMAGE INSTEAD
import Link from 'next/link';
import { useForm } from 'react-hook-form';

import { getCurrentUser, login, logoutUser } from 'store/slices/auth';
import { useAppDispatch, useAppSelector } from 'store/store';
import { SismoBanner } from 'ui';
import { useEffect } from 'react';

import { useAccount } from 'wagmi';

import { useGetAppQuery } from 'apollo';

type NavBarProps = {
  admin: boolean;
};

export const NavBar = ({ admin }: NavBarProps) => {
  const data = useGetAppQuery({
    variables: {
      appId: process.env.APP_ID,
    },
  });
  const imgUrl = data?.data?.app?.imgUrl;

  const { isOpen, onClose, onOpen } = useDisclosure();

  const user = useAppSelector((state) => state.user.auth);
  const { handleSubmit, register } = useForm<{ email: string }>();
  const dispatch = useAppDispatch();
  const { isConnected } = useAccount();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  useEffect(() => {
    if (user.email) {
      onClose();
    }
  }, [onClose, user.email]);

  useEffect(() => {
    async function changeUserIsLoading() {
      await dispatch(getCurrentUser());
    }

    changeUserIsLoading();
  }, [dispatch]);

  const onSubmit = async (data: { email: string }) => {
    dispatch(login(data.email));
  };

  const handleOpenLoginModal = () => {
    onOpen();
  };

  return (
    <VStack as="header" sx={{ py: 3, px: { xs: 2, md: 4, lg: 6 } }}>
      <HStack w="full">
        <HStack justifyContent="space-between" flex={1}>
          <Link href="/">
            <a>
              <Image
                height={70}
                width={210}
                src={imgUrl || ''}
                alt="3shop"
                loading="lazy"
                style={{ cursor: 'pointer' }}
              />
            </a>
          </Link>

          {!admin && (
            <ConnectButtonGroup
              isConnectedByWallet={isConnected}
              userEmail={user.email}
              userLoading={user.loading}
              handleOpenLoginModal={handleOpenLoginModal}
              handleLogout={handleLogout}
            />
          )}
        </HStack>
      </HStack>

      <SismoBanner admin={admin} enable={false} />
      <LoginModal
        isOpen={isOpen}
        onClose={onClose}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
      />
    </VStack>
  );
};
