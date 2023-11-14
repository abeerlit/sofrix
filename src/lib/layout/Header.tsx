import {
  ChevronDownIcon,
  CloseIcon,
  HamburgerIcon
} from '@chakra-ui/icons';
import {
  Box,
  Button,
  Collapse,
  Flex,
  Icon,
  IconButton,
  Image,
  Link,
  Popover,
  PopoverTrigger,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react';

export default function Header() {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box
      py={{ base: '27px' }}
      bg='#FAFAFC'>
      <Flex
        height={{ base: 'auto', md: '47px' }}
        align="center"
        px={{ base: "20px", lg: '100px' }}
        justify={'space-between'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>
        <Image src="/logo.png" alt="logo" />

        <Flex display={{ base: 'none', md: 'flex' }} align={'center'} >
          <DesktopNav />
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify="flex-end"
          direction="row"
          spacing={'9px'}
        >
          <Button
            as="a"
            display={{ base: 'none', md: 'inline-flex' }}
            variant='outlined'
            href="#"
            width={'145px'}
            height={'44px'}
          >
            Hire Developer
          </Button>
          <Button
            as="a"
            variant='primary'
            href="#"
            width={'120px'}
            height={'44px'}
          >
            Hire a Team
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {

  return (
    <Stack direction="row" spacing={'43px'}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger="hover" placement="bottom-start">
            <PopoverTrigger>
              <Link
                href={navItem.href ?? '#'}
                fontSize="15px"
                fontWeight={400}
                color={'#6C768D'}
                _hover={{
                  opacity: 0.8,
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '#'}
        justify="space-between"
        align="center"
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue('gray.600', 'gray.200')}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition="all .25s ease-in-out"
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle="solid"
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align="start"
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: 'Services',
    href: '#',
  },
  {
    label: 'About us',
    href: '#',
  },
  {
    label: 'Blog',
    href: '#',
  }
];

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      <Button
        as="a"
        variant='outlined'
        href="#"
        mt='20px'
        width={'145px'}
        height={'44px'}
      >
        Hire Developer
      </Button>
    </Stack>
  );
};
