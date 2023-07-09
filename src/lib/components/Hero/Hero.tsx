import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

function Hero() {
    return (
        <Box bg='#FAFAFC' position={'relative'} minH={'300px'} height={'min-content'}>
            <Flex justify='flex-end'>
                <Image
                    display={{ base: 'none', md: 'block' }}
                    src='/bg.svg' width={'full'} alt='bg' />

            </Flex>
            <Flex
                px={{ base: "20px", md: "50px", lg: "90px" }}
                justify={{ base: 'center', md: 'flex-start' }}
                align={'center'} width={'full'} height={'full'} top={0} left={0} position={{ base: 'relative', md: "absolute" }} zIndex={10}>
                <Box maxW={{ base: "auto", md: "500px" }}>
                    <Text
                        fontWeight={700}
                        color={'#424242'}
                        letterSpacing={'0.6px'}
                        lineHeight={'1.2'}
                        fontSize={{ base: '30px', md: '40px', lg: '60px' }}
                        my={{ base: "20px", md: 0 }}
                    >
                        Hire Developers <Box display={{ base: "none", md: "inline" }} as='span'><br /></Box>
                        & Expert Teams
                    </Text>
                    <Text
                        mt='20px'
                        color={'#5B5B5B'}
                        fontSize={'18px'}
                    >
                        Work with the best developers from around the world on our secure flexible and cost-effective platform.
                    </Text>
                    <Button mt='32px' mb='30px' variant={'primary'} width={'158px'} height={'47px'} >
                        Contact us
                    </Button>

                </Box>
            </Flex>
            <Image
                display={{ base: 'block', md: 'none' }}
                src='/mobile-bg.svg' width={'full'} alt='bg' />
        </Box>
    )
}

export default Hero