import { Box, Flex, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import Form from '../Form/Form'

function LetsTalk() {
    return (
        <Flex 
            gap={{ base: "40px", md: "40px", lg: "80px" }}
            px='20px'
            justify={'center'}
            pb={{ base: "50px", md: "118px" }}
            flexDirection={{ base: "column", md: "row" }}
        >
            <Box
                maxW={'540px'}
            >
                <Text
                    color={'#2C3847'}
                    fontSize={{ base: "32px", md: "40px", lg: "64px" }}
                    fontWeight={700}
                >
                    Let’s Talk
                </Text>
                <Text
                    color={'black'}
                    fontSize={{ base: "18px", md: "20px" }}
                >
                    Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help
                </Text>
                <Text
                    mt='54px'
                    color={'#2C3847'}
                    fontSize={{ base: "24px", md: "32px" }}
                    fontWeight={600}
                >
                    Email
                </Text>
                <Text
                    color={'black'}
                    fontSize={'16px'}
                >
                    yourmail@gmail.com
                </Text>
                <Text
                    mt='54px'
                    color={'#2C3847'}
                    fontSize={{ base: "24px", md: "32px" }}
                    fontWeight={600}
                >
                    Socials
                </Text>
                <Stack
                    spacing={'20px'}
                >
                    <Link
                        color={'black'}
                        fontSize={'16px'}
                        textDecoration={'underline'}
                    >Instagram
                    </Link>
                    <Link
                        color={'black'}
                        fontSize={'16px'}
                        textDecoration={'underline'}
                    >Twitter
                    </Link>
                    <Link
                        color={'black'}
                        fontSize={'16px'}
                        textDecoration={'underline'}
                    >Facebook
                    </Link>
                </Stack>
            </Box>
            <Box
                minWidth={{ base: "100%", md: "400px", lg: "520px" }}
            >
                <Form />
            </Box>
        </Flex>
    )
}

export default LetsTalk