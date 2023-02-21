import { ConnectButtonGroup } from './ConnectButtonGroup';
import { LoginModal } from './LoginModal';
import { VStack, HStack, useDisclosure, Box, Image } from '@3shop/ui';
import { useForm } from 'react-hook-form';

import { useEffect } from 'react';

import { useAccount } from '@3shop/wallet';
import { useGetAppQuery } from '@3shop/apollo';
import { useAppDispatch, useAppSelector } from '@3shop/store';
import { getCurrentUser, login, logoutUser } from '@3shop/store/slices/auth';
import useUpdateThemeOnConnection from '@/hooks/useUpdateThemeOnConnection';
import { classnames, envVars } from '@3shop/config';
import { Link } from 'react-router-dom';

type NavBarProps = {
  admin?: boolean;
};

export const NavBar = ({ admin }: NavBarProps) => {
  const {} = useUpdateThemeOnConnection();
  const data = useGetAppQuery({
    variables: {
      appId: envVars.APP_ID,
    },
  });
  const appName = data?.data?.app?.name;
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
    onClose();
  };

  const handleOpenLoginModal = () => {
    onOpen();
  };

  return (
    <VStack className={classnames.HEADER} as="header" sx={{ py: 2, px: { xs: 3, md: 6, lg: 8 } }}>
      <HStack w="full" maxW={1440}>
        <HStack justifyContent="space-between" flex={1}>
          <Link to="/">
            {imgUrl ? (
              <Image h={70} w={210} src={imgUrl || ''} alt="3shop" style={{ cursor: 'pointer' }} />
            ) : (
              <Box
                sx={{
                  fontSize: '24px',
                  textTransform: 'uppercase',
                }}
              >
                {appName}
              </Box>
            )}
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
