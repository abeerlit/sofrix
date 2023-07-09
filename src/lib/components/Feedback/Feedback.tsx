import { Avatar, Box, Center, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';


function FeedbackCard({ name, role, avatar, feedback }: { name: string, role: string, avatar: string, feedback: string }) {
    return (
        <Flex
            width={{ base: 'calc(100vw - 90px)', md: '600px', lg: '864px' }}
            height='450px'
            rounded={'10px'}
            boxShadow='0px 20px 60px 0px rgba(46, 33, 61, 0.08)'
            bg={'white'}
            flexDirection={'column'}
            align={'center'}
            justify={'center'}
            px={{ base: "20px", md: "40px", lg: "80px" }}
        >
            <Avatar
                src={avatar}
                boxSize={'106px'}
                name={name}
            />
            <Text
                mt='10px'
                color={'#171C2C'}
                fontSize={'30px'}
                fontWeight={600}
            >
                {name}
            </Text>
            <Text
                mt='5px'
                color={'#9598A0'}
                fontSize={'20px'}
                fontWeight={500}
            >
                {role}
            </Text>
            <Text
                mt='20px'
                color={'#9598A0'}
                fontSize={'20px'}
                fontWeight={500}
                textAlign={'center'}
            >
                {feedback}</Text>
        </Flex >
    )
}

function Feedback() {

    const [currentIndex, setCurrentIndex] = React.useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };
    const items = [
        {
            name: "Stephan Louis",
            role: "Developer",
            avatar: "https://bit.ly/dan-abramov",
            about: "“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.”"
        },
        {
            name: "Kola Tioluwani",
            role: "Designer",
            avatar: "https://bit.ly/code-beast",
            about: "“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.”"
        },
        {
            name: "Kent Dodd",
            role: "CEO",
            avatar: "https://bit.ly/sage-adebayo",
            about: "“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.”"
        },
        {
            name: "Stephan Louis",
            avatar: "https://bit.ly/code-beast",
            role: "Developer",
            about: "“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.”"
        },
    ];
    return (
        <Box
            py='60px'
        >
            <Text
                fontSize={{ base: "32px", md: "40px", lg: "60px" }}
                fontWeight={600}
                color={'#2C3847'}
                textAlign={'center'}
            >What our Customers say</Text>
            <Center>
                <Text
                    fontSize={'20px'}
                    color={'#9598A0'}
                    textAlign={'center'}
                    opacity={0.7}
                    fontWeight={500}
                    mt='10px'
                >All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</Text>
            </Center>
            <Flex
                mt={'30px'}
                gap='22px'
                align={'center'}
                justify={'center'}
                display={{ base: 'flex', md: 'none' }}
            >
                <Image
                    cursor={'pointer'}
                    onClick={handlePrevious}
                    zIndex={10}
                    src='/left-button.svg' alt='Button' />

                <Image
                    onClick={handleNext}
                    cursor={'pointer'}
                    zIndex={10}
                    transform={'rotate(180deg)'}
                    src='/left-button.svg' alt='Button' />
            </Flex>

            <Flex
                gap={'22px'}
                align={'center'}
                justify={'center'}
                mt={{ base: "30px", md: '68px' }}
            >
                <Image
                    cursor={'pointer'}
                    onClick={handlePrevious}
                    mr={{ md: "-115px", lg: "-60px" }}
                    mt='-300px'
                    zIndex={10}
                    display={{ base: 'none', md: 'block' }}
                    src='/left-button.svg' alt='Button' />

                <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    height={{ base: "550px", md: "700px" }}
                    overflow="hidden"
                    position="relative"
                    width={{ base: "100%", md: "800px", lg: "1000px" }}
                >
                    {items.map((item, index) => (
                        <Box
                            key={index}
                            position="absolute"
                            zIndex={index === currentIndex ? 1 : index === currentIndex + 1 ? 0 : -1}
                            top={index === currentIndex ? '0' : index === currentIndex + 1 ? '8%' : '15%'}
                            transform={index === currentIndex ? 'scale(1)' : index === currentIndex + 1 ? 'scale(0.9)' : 'scale(0.8)'}
                            opacity={index === currentIndex ? '1' : '0.5'}
                            transition="top 0.5s, opacity 0.5s"
                        >
                            <FeedbackCard
                            avatar={item.avatar}
                            feedback={item.about}
                            role={item.role}
                            name={item.name} />
                        </Box>
                    ))}
                </Box>

                <Image
                    onClick={handleNext}
                    cursor={'pointer'}
                    display={{ base: 'none', md: 'block' }}
                    mt='-300px'
                    ml={{ md: "-115px", lg: "-60px" }}
                    zIndex={10}
                    transform={'rotate(180deg)'}
                    src='/left-button.svg' alt='Button' />
            </Flex>
        </Box>
    )
}

export default Feedback
