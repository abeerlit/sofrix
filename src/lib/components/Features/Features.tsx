import { Box, Center, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

function Features() {
    const data = [
        {
            title: "Choosing a Service",
            description: "Choosing an accountant that matches your needs",
            icon: '/features/service.svg'
        },
        {
            title: "Our Clients Say",
            description: "Read the reviews from some of our satisfied clients",
            icon: '/features/client.svg'
        },
        {
            title: "Initial Consultation",
            description: "Understanding your accountancy requirements",
            icon: '/features/consultation.svg'
        },
        {
            title: "Request a Callback",
            description: "Lets talk at a more convenient time for you",
            icon: '/features/callback.svg'
        },
    ]
    return (
        <Box>
            <Text
                fontSize={{ base: "32px", md: "40px", lg: "60px" }}
                fontWeight={600}
                color={'#2C3847'}
                textAlign={'center'}
            >Our Features</Text>
            <Center>
                <Text
                    fontSize={'20px'}
                    color={'#192239'}
                    textAlign={'center'}
                    opacity={0.7}
                    mt='15px'
                    maxW={'540px'}
                >Unleash your creativety with a visual collaboration plattorm that enables effective ideation</Text>
            </Center>
            <SimpleGrid my='50px' minChildWidth={'250px'} spacingY={"40px"} spacingX={{ base: "0px", md: "72px" }}
                px={{ base: "20px", md: "50px", lg: "120px" }}
            >
                {
                    data.map((item, index) => (
                        <Center>
                            <Flex key={`${item.title.trim()}-${index}`}
                                flexDirection={'column'} align='center' justify={'center'} height='220px' width={'250px'}>
                                <Image src={item.icon} alt='Icon' />
                                <Text mt='43px' color={'#424242'} fontSize={'22px'} fontWeight={600}>
                                    {item.title}
                                </Text>
                                <Text mt='18px' color={'#757575'} fontSize={'16px'} textAlign={'center'} maxW='311px' fontWeight={500}>
                                    {item.description}
                                </Text>
                            </Flex>
                        </Center>
                    ))
                }
            </SimpleGrid>
        </Box>
    )
}

export default Features