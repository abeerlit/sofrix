import { Box, Center, Flex, Image, Progress, Text } from '@chakra-ui/react'
import React from 'react'


function StatCard({ value, description }: { value: number, description: string }) {
    return (
        <Box
            maxW={{ base: "full", md: "220px" }}
        >
            <Text
                color={'white'}
                fontSize={{ base: "50px", md: "70px" }}
                fontWeight={'600'}
            >
                {value}
            </Text>
            <Progress height={'5px'} value={value} />

            <Text
                mt={'20px'}
                color={'#FDFDFD'}
                fontSize={'20px'}
            >
                {description}
            </Text>
        </Box>
    )
}

const statsValues = [
    {
        value: "200+",
        description: "Completed Projects"
    },
    {
        value: "150+",
        description: "Happy Customers"
    },
    // {
    //     value: 75,
    //     description: "average improvement in team efficiency"
    // },
]

function Stats() {
    return (
        <Box
            mb={{ base: "40px", md: "96px" }}
            px={{ base: "20px", md: "50px", lg: "170px" }}
        >
            <Box
                bg='#0968A8'
                borderRadius={'20px'}
                py={{ base: "30px", md: "90px" }}
                width={'100%'}
                overflow={'hidden'}
                position={'relative'}
            >
                <Box height={'950px'} width={'565px'}
                    bg='linear-gradient(279deg, #2F3290 0%, #FFF 100%)'
                    transform={'rotate(45deg)'}
                    right={'300px'}
                    top={'-70px'}
                    position={'absolute'}
                    zIndex={1}
                    opacity={0.08}
                    display={{ base: "none", md: "block" }}
                />
                <Center>
                    <Text
                        zIndex={10}
                        color={'white'}
                        fontSize={{ base: "32px", md: "40px", lg: "60px" }}
                        fontWeight={600}
                    >
                        Journey of our Success
                    </Text>
                </Center>
                <Flex
                    zIndex={10}
                    position={'relative'}
                    mt={{ base: "20px", md: "53px" }}
                    width={'100%'}
                    gap={{ base: "30px", md: "50px", lg: "110px" }}
                    px='20px'
                    flexDirection={{ base: "column", md: "row" }}
                    justify={'center'}
                >
                    {
                        statsValues.map((item, index) => (
                            <Box key={index}>
                                <StatCard value={item.value} description={item.description} />
                            </Box>
                        ))
                    }
                </Flex>
            </Box>
        </Box>
    )
}

export default Stats