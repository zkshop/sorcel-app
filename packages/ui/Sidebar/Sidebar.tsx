import type { BoxProps, FlexProps } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {
  Image,
  IconButton,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import {
  FiStar,
  FiMenu,
  FiChevronDown,
  FiLayout,
  FiLock,
  FiCreditCard,
  FiThumbsUp,
  FiTool,
  FiDollarSign,
  FiUnlock,
  FiBarChart,
} from 'react-icons/fi';
import type { IconType } from 'react-icons';
import type { Nullable, WithChildren } from '@3shop/types';

interface LinkItemProps {
  name: string;
  icon: IconType;
  href?: string;
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'Integrations', icon: FiTool, href: '/app' },
  { name: 'Products', icon: FiStar, href: '/app/product' },
  { name: 'Gates', icon: FiLock, href: '/app/gate' },
  { name: 'Customization', href: '/app/customization', icon: FiLayout },
  { name: 'Orders', icon: FiCreditCard, href: '/app/orders' },
  { name: 'Poll', icon: FiThumbsUp, href: '/app/poll' },
  { name: 'Payments', icon: FiDollarSign, href: '/app/Payments' },
  { name: 'Plan', icon: FiUnlock, href: '/app/plan' },
  { name: 'Analytics', icon: FiBarChart, href: '/app/analytics'}
];

type SidebarWithHeaderProps = WithChildren<{
  user: Nullable<{ email: string; appId: string }>;
  email?: string;
  signOut: () => void;
}>;

export function SidebarWithHeader({ children, user, signOut, email }: SidebarWithHeaderProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg="gray.100">
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav email={email} signOut={signOut} user={user} onOpen={onOpen} />
      <Box minH="calc(100vh - 5rem)" ml={{ base: 0, md: 60 }} p="4" backgroundColor="white">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => (
  <Box
    transition="3s ease"
    bg="white"
    borderRight="1px"
    borderRightColor="gray.200"
    w={{ base: 'full', md: 60 }}
    pos="fixed"
    h="full"
    {...rest}
  >
    <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
      <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
        <Image
          maxW={40}
          src="https://kqjytgxbtetzewipikax.supabase.co/storage/v1/object/public/logo/logo.png"
        />
      </Text>
      <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
    </Flex>
    {LinkItems.map((link) => (
      <NavItem key={link.name} href={link.href} icon={link.icon}>
        {link.name}
      </NavItem>
    ))}
  </Box>
);

interface NavItemProps extends FlexProps {
  icon: IconType;
  href?: string;
  children: string | number;
}
const NavItem = ({ icon, children, href = '#', ...rest }: NavItemProps) => (
  <Box as={Link} to={href} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
    <Flex
      align="center"
      p="4"
      mx="4"
      borderRadius="lg"
      role="group"
      cursor="pointer"
      _hover={{
        bg: 'primary.main',
        color: 'white',
      }}
      {...rest}
    >
      {icon && (
        <Icon
          mr="4"
          fontSize="16"
          _groupHover={{
            color: 'white',
          }}
          as={icon}
        />
      )}
      {children}
    </Flex>
  </Box>
);

interface MobileProps extends FlexProps {
  onOpen: () => void;
  user: Nullable<{ email: string; appId: string }>;
  signOut: () => void;
  email?: string;
}

const MobileNav = ({ onOpen, signOut, email, ...rest }: MobileProps) => (
  <Flex
    ml={{ base: 0, md: 60 }}
    px={{ base: 4, md: 4 }}
    height="20"
    alignItems="center"
    bg="white"
    borderBottomWidth="1px"
    borderBottomColor="gray.200"
    justifyContent={{ base: 'space-between', md: 'flex-end' }}
    {...rest}
  >
    <IconButton
      display={{ base: 'flex', md: 'none' }}
      onClick={onOpen}
      variant="outline"
      aria-label="open menu"
      icon={<FiMenu />}
    />

    <Text
      display={{ base: 'flex', md: 'none' }}
      fontSize="2xl"
      fontFamily="monospace"
      fontWeight="bold"
    >
      Logo
    </Text>

    <HStack spacing={{ base: '0', md: '6' }}>
      <Flex alignItems="center">
        <Menu>
          <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
            <HStack>
              <VStack
                display={{ base: 'none', md: 'flex' }}
                alignItems="flex-start"
                spacing="1px"
                ml="2"
              >
                <Text fontSize="sm">{email}</Text>
              </VStack>
              <Box display={{ base: 'none', md: 'flex' }}>
                <FiChevronDown />
              </Box>
            </HStack>
          </MenuButton>
          <MenuList bg="white" borderColor="gray.200">
            <MenuItem onClick={signOut}>Sign out</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </HStack>
  </Flex>
);
