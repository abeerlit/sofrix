import React from 'react'
import { Box, Button, Center, Flex, Image, Text } from '@chakra-ui/react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
function OurProjects() {
    const [selectedCategory, setSelectedCategory] = React.useState('All');
    const projects = [
        {
            name: "Quarter",
            about: "Company Website",
            category: 'AWS',
            cover: '/projects/quarter.png'
        },
        {
            name: "Hotelmania",
            about: "Company Website",
            category: 'React',
            cover: '/projects/hotalmania.png'
        },
        {
            name: "Furnishop",
            about: "Company Website",
            category: 'Node JS',
            cover: '/projects/furnishop.png'
        },
        {
            name: "Thrive CBD",
            about: "Company Website",
            category: 'PHP',
            cover: '/projects/thrivecbd.png'
        },
        {
            name: "Furnishop",
            about: "Company Website",
            category: 'Node JS',
            cover: '/projects/furnishop.png'
        },
        {
            name: "Thrive CBD",
            about: "Company Website",
            category: 'PHP',
            cover: '/projects/thrivecbd.png'
        },
    ];
    const categories: string[] = [];

    projects.forEach(project => {
        if (!categories.includes(project.category)) {
            categories.push(project.category);
        }
    });
    const filteredProjects = projects.filter(project => project.category === selectedCategory || selectedCategory === 'All');

    const carouselRef = React.useRef<any>(null);
    const next = () => {
        if ((carouselRef.current.state.itemsInSlide + carouselRef.current.state.activeIndex) < carouselRef.current.state?.itemsCount) {
            carouselRef.current.slideNext();
        }
    };
    const previous = () => {
        if (carouselRef?.current) {
            carouselRef.current.slidePrev();
        }
    };
    const items = filteredProjects.map((item, index) => {
        return (
            <Box width={'340px'} rounded={'10px'} height={'256px'} bg={'red.200'} position={'relative'} key={index}>
                <Image
                    src={item.cover}
                    alt='Project'
                    width={'full'}
                    height={'full'}
                    objectFit={'cover'}
                    rounded={'10px'} />
                <Flex
                    width={'full'}
                    height={'100px'}
                    bottom={'0'}
                    left={'0'}
                    borderRadius=" 0px 0px 10px 10px"
                    bg="linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.58) 89.58%)"
                    position={'absolute'}
                    zIndex={2}
                    px={'15px'}
                    py={'10px'}
                    align={'end'}
                >
                    <Box>
                        <Text
                            color={'white'}
                            fontSize={'16px'}
                            fontWeight={600}
                        >{item.name}</Text>
                        <Text
                            color={'white'}
                            mt='2px'
                            fontSize={'15px'}
                        >{item.about}</Text>
                    </Box>
                </Flex>
            </Box>
        );
    });
    const responsive = {
        0: {
            items: 1,
        },
        568: {
            items: 2,
        },
        1250: {
            items: 3,
            itemsFit: "contain",
        },
        1450: {
            items: 3,
            itemsFit: "contain",
        },
        1650: {
            items: 4,
            itemsFit: "contain",
        },
    };
    return (
        <Box
            pb={'85px'}
        >
            <Text
                fontSize={{ base: "32px", md: "40px", lg: "60px" }}
                fontWeight={600}
                color={'#2C3847'}
                textAlign={'center'}
            >Our Projects</Text>
            <Center>
                <Text
                    fontSize={'16px'}
                    color={'#192239'}
                    textAlign={'center'}
                    opacity={0.7}
                    mt='15px'
                    maxW={'305px'}
                >We have been providing great flooring solutions service.</Text>
            </Center>
            <Box
                width={'full'}
                overflow={'auto'}
                className='scrollbar-hidden'
            >
                <Flex
                    mt={'40px'}
                    justify={'center'}
                    gap={'25px'}
                    minW={'698px'}
                    px='20px'

                >
                    <Button
                        width={'120px'}
                        height={'40px'}
                        variant={selectedCategory === 'All' ? 'primary' : 'inActive'}
                        onClick={() => setSelectedCategory('All')}
                    >All</Button>
                    {
                        categories.map((item, index) => (
                            <Button
                                key={index}
                                width={'120px'}
                                height={'40px'}
                                variant={selectedCategory === item ? 'primary' : 'inActive'}
                                onClick={() => setSelectedCategory(item)}
                            >{item}</Button>
                        ))
                    }
                </Flex>
            </Box>
            <Flex
                justify={'flex-end'}
                pr='95px'
                mt='20px'
            >
                <Flex gap={'22px'}>
                    <Image
                        onClick={previous}
                        cursor={'pointer'}
                        src='/left-button.svg' alt='Button' />
                    <Image
                        onClick={next}
                        cursor={'pointer'}
                        transform={'rotate(180deg)'}
                        src='/left-button.svg' alt='Button' />
                </Flex>
            </Flex>
            <Box
                width={{ base: "100%", md: 'calc(100% - 150px)' }}
                position={'relative'}
                ml={{ base: "20px", md: "150px" }}
                mt={'40px'}
            >
                <AliceCarousel
                    items={items}
                    ref={carouselRef}
                    animationType="fadeout"
                    responsive={responsive}
                    disableDotsControls
                    disableButtonsControls
                />
            </Box>
        </Box>
    )
}

export default OurProjects