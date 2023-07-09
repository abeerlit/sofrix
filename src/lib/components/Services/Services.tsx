import { Box, Center, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

function ServiceCard({ title, description, icon }: {
    title: string,
    description: string,
    icon: string,
}) {
    return (
        <Flex
            width={{ base: "full", md: "360px" }}
            position={'relative'}
            bg={'white'}
            height={'166px'}
            align={'center'}
            gap={'25px'}
            border='1px solid rgba(239, 239, 239, 0.60)'
            boxShadow=" 0px 30px 30px 0px rgba(99, 122, 166, 0.10)"
            px='23px'
        >
            <Image src={icon} alt='Logo' />
            <Box>
                <Text
                    color={'#2C3847'}
                    fontSize={'20px'}
                    fontWeight={700}
                >{title}</Text>
                <Text
                    mt={'10px'}
                    color={'#2C3847'}
                    fontSize={'16px'}
                >{description}</Text>
            </Box>
        </Flex>
    )
}

function Services() {
    return (
        <Box pb='80px'>
            <Text
                color={'#2C3847'}
                fontSize={{ base: "32px", md: "40px", lg: "60px" }}
                fontWeight={600}
                textAlign={'center'}
            >
                Services
            </Text>
            <Center>
                <Text
                    mt={'20px'}
                    color={'#5F5F5F'}
                    fontSize={'20px'}
                    maxW={'700px'}
                    textAlign={'center'}
                >
                    Our support team will get assistance from AI-powered suggestions, making it quicker than ever to handle support requests.
                </Text>
            </Center>
            <Box width={'100%'} px={{ base: "20px", md: "64px" }} >
                <Box py={{ base: "30px", md: "76px" }} position={'relative'} width={'100%'} px={{ base: "0", lg: '100px' }} >
                    <Image
                        position={'absolute'}
                        left={0}
                        top={0}
                        zIndex={-1}
                        display={{ base: "none", md: "block" }}
                        src='/dots.svg' alt='dots'
                    />
                    <Flex
                        position={'relative'}
                        flexDirection={{ base: "column", md: "row" }}
                        gap={{ base: "30px", md: '40px' }}>
                        <ServiceCard
                            title='Service1'
                            description='Our support team will get assistance from AI-powered.'
                            icon='/service/service1.svg'
                        />
                        <ServiceCard
                            title='Service2'
                            description='Our support team will get assistance from AI-powered.'
                            icon='/service/service2.svg'
                        />
                    </Flex>
                    <Flex mt={{ base: "30px", md: '40px' }} justify={'flex-end'}
                        flexDirection={{ base: "column", md: "row" }}
                        gap={{ base: "30px", md: '40px' }}>
                        <ServiceCard
                            title='Service3'
                            description='Our support team will get assistance from AI-powered.'
                            icon='/service/service3.svg'
                        />
                        <ServiceCard
                            title='Service4'
                            description='Our support team will get assistance from AI-powered.'
                            icon='/service/service4.svg'
                        />       <Image
                            position={'absolute'}
                            right={0}
                            bottom={0}
                            zIndex={-1}
                            src='/dots.svg' alt='dots'
                            display={{ base: "none", md: "block" }}
                        />

                    </Flex>
                </Box>
            </Box>
        </Box>
    )
}

export default Services