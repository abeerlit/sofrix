import { Flex, Image } from '@chakra-ui/react'

function LogosStripe() {
    const logos = ['/logos/mumsnet.svg',
        '/logos/deblock.svg',
        '/logos/robin.svg',
        '/logos/coral.svg',
        '/logos/twine.svg',
        '/logos/thesaasy.svg',
        '/logos/claimer.svg',
    ]
    return (
        <Flex py='35px'
            className='scrollbar-hidden'
            width={'full'} overflow={'auto'} gap={'43px'} px={{ base: "20px", md: '50px', lg: "120px", }} justify={'space-between'} bg='#F1F1F1'>
            {
                logos.map((logo, index) => (
                    <Image key={index} src={logo} alt='Logo' />
                ))
            }
        </Flex>
    )
}

export default LogosStripe