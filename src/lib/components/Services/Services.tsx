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
            height={'250px'}
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
                    At Sofrix, our cutting-edge services are designed to redefine possibilities in the digital age. Explore excellence through API Integrations, Custom App Development, Data Architecture, and Reliability services.
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
                            title='Integrations'
                            description='Sofrix excels in seamless API integrations, optimizing communication and efficiency in your digital ecosystem'
                            icon='/service/service1.svg'
                        />
                        <ServiceCard
                            title='Custom App Development'
                            description='Enhance your digital presence with Sofrix customized web development solutions, providing a distinct competitive edge in the online arena'
                            icon='/service/service2.svg'
                        />
                    </Flex>
                    <Flex mt={{ base: "30px", md: '40px' }} justify={'flex-end'}
                        flexDirection={{ base: "column", md: "row" }}
                        gap={{ base: "30px", md: '40px' }}>
                        <ServiceCard
                            title='Data Architecture and Foundations'
                            description='Sofrix architects scalable and efficient data structures, ensuring organized and accessible information, laying the groundwork for data-driven success and business growth.'
                            icon='/service/service3.svg'
                        />
                        <ServiceCard
                            title='Reliability'
                            description='Trust Sofrix for dependable solutions – from stable applications to secure data architecture, we ensure your digital infrastructure is robust, secure, and consistently performs at its best'
                            icon='/service/service4.svg'
                        />       
                        <Image
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