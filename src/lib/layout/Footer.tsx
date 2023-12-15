import {
  Box,
  Container,
  Flex,
  Image,
  Link,
  Stack,
  Text
} from '@chakra-ui/react';
import type { ReactNode } from 'react';


const Socials = [
  // {
  //   title: 'Instagram',
  //   icon: '/insta.svg',
  //   to: '#'
  // },
  {
    title: 'LinkedIn',
    icon: '/linkedin.svg',
    to: 'https://www.linkedin.com/company/sofrix'
  },
  // {
  //   title: 'Facebook',
  //   icon: '/fb.svg',
  //   to: '#'
  // },
  // {
  //   title: 'Twitter',
  //   icon: '/twitter.svg',
  //   to: '#'
  // }
]

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight="500" fontSize="24px" mb={'14px'} color={'white'}>
      {children}
    </Text>
  );
};
const LinkItem = ({ href, children }: { href: string, children: ReactNode }) => {
  return (<Link
    color='white'
    fontSize={'18px'}
    fontWeight={500}
    href={href}>
    {children}
  </Link>)
}
const aboutLinks = [
  // {
  //   title: 'Home',
  //   to: '#'
  // },
  // {
  //   title: 'Features',
  //   to: '#'
  // },
  // {
  //   title: 'FAQs',
  //   to: '#'
  // },
  // {
  //   title: 'Reviews',
  //   to: '#'
  // },
  // {
  //   title: 'Stories',
  //   to: '#'
  // },
]
const privacyLinks = [
  // {
  //   title: 'Privacy',
  //   to: '#'
  // },
  // {
  //   title: 'Policy',
  //   to: '#'
  // },
  // {
  //   title: 'Payment',
  //   to: '#'
  // },
  // {
  //   title: 'Terms',
  //   to: '#'
  // },
]

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <Box
      bg='#2C3847'
    >
      <Container as={Stack} maxW="8xl" pt={'60px'} >
        <Flex
          justify={'space-between'}
          flexWrap={'wrap'}
          flexDirection={{ base: 'column', md: 'row' }}
          gap={'20px'}
        >
          <Stack spacing={6}>
            <Box>
              <Image src='/logo-dark.svg' alt='Logo' />
            </Box>
            <Text fontSize="16px" color={'white'} maxW={'316px'}>
            Expertly crafting the digital experiences of tomorrow 
            </Text>
            <Text fontSize="13px" color={'white'} maxW={'316px'}>
            IT Services and IT Consulting
            </Text>
          </Stack>
          {/* <Stack align="flex-start">
            <ListHeader>About</ListHeader>
            {
              aboutLinks.map((link, index) => (
                <Box key={index}>
                  <LinkItem href={link.to}>{link.title}</LinkItem>
                </Box>
              ))
            }
          </Stack>
          <Stack align="flex-start">
            <ListHeader>Privacy</ListHeader>
            {
              privacyLinks.map((link, index) => (
                <Box key={index}>
                  <LinkItem href={link.to}>{link.title}</LinkItem>
                </Box>
              ))
            }
          </Stack> */}
          <Stack align="flex-start" gap={'20px'} justify={'space-between'}>
            <Stack>
              <ListHeader>Contact Us</ListHeader>
              <LinkItem href="#">+92 343 7920 342 </LinkItem>
              <LinkItem href="#">support@sofrix.com </LinkItem>
            </Stack>
            <Stack direction={'row'} spacing={'18px'}>
              {
                Socials.map((social, index) => (
                  <Link href={social.to}>
                    <Image
                      _hover={{
                        opacity: 0.8
                      }}
                      key={index} src={social.icon} alt={social.title} />
                  </Link>
                ))
              }
            </Stack>
          </Stack>
        </Flex>
        <Flex
          align={{base: 'flex-start', md: 'center'}}
          py='36px'
          mt='90px'
          gap={'10px'}
          justify={'space-between'}
          borderTop={'2px solid white'}
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <Text color={'white'} fontSize={'16px'}>© Copyright {currentYear} company All rights reserved.</Text>
          <Stack direction={'row'} spacing={'40px'} >
            <Link color={'white'} fontSize={'16px'} href={'#'}>Contact Us</Link>
            <Link color={'white'} fontSize={'16px'} href={'#'}>Terms</Link>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
}
