import { useState } from 'react';
import { Box, FormControl, FormErrorMessage, FormLabel, Input, Select, Textarea, Button, ChakraProvider, Image } from '@chakra-ui/react';

type FormValues = {
    name: string;
    email: string;
    service: string;
    message: string;
};

const initialValues: FormValues = {
    name: '',
    email: '',
    service: '',
    message: ''
};

const Form = () => {
    const [values, setValues] = useState<FormValues>(initialValues);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const { email, service, message } = values;
        const errors = {};

        if (!email) {
            errors.email = 'Email is required';
        }

        if (!service) {
            errors.service = 'Please select a service';
        }

        if (!message) {
            errors.message = 'Message is required';
        }

        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();

        if (Object.keys(formErrors).length === 0) {
            // Handle form submission here
            console.log('Form submitted:', values);
            setValues(initialValues); // Reset form values
            setErrors({}); // Clear any errors
        } else {
            setErrors(formErrors);
        }
    };
    return (
        <Box width={'full'} >
            <form onSubmit={handleSubmit}>
                <FormControl isInvalid={!!errors.name}>
                    <FormLabel
                        fontSize={'14px'}
                        color={'black'}
                        fontWeight={500}
                        htmlFor="name">Name</FormLabel>
                    <Input
                        id="name"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        height={'46px'}
                        borderRadius={'4px'}
                        bg='#F7F7F7'
                        color={'black'}
                        pl='10px'
                        border={'none'}
                        fontSize={'14px'}


                    />
                    <FormErrorMessage>{errors.name}</FormErrorMessage>
                </FormControl>

                <FormControl
                    mt={'28px'}
                    isRequired isInvalid={!!errors.email}>
                    <FormLabel
                        fontSize={'14px'}
                        color={'black'}
                        fontWeight={500}
                        htmlFor="email">Email</FormLabel>
                    <Input
                        id="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        height={'46px'}
                        borderRadius={'4px'}
                        bg='#F7F7F7'
                        color={'black'}
                        pl='10px'
                        border={'none'}
                        fontSize={'14px'}
                    />
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                </FormControl>

                <FormControl
                    mt={'28px'}
                    isRequired isInvalid={!!errors.service}>
                    <FormLabel
                        fontSize={'14px'}
                        color={'black'}
                        fontWeight={500}
                        htmlFor="service">What service are you interested in</FormLabel>
                    <Select
                        id="service"
                        name="service"
                        value={values.service}
                        onChange={handleChange}
                        placeholder="Select project type"
                        height={'46px'}
                        borderRadius={'4px'}
                        bg='#F7F7F7'
                        color={values.service ? 'black' : '#B2B2B2'}
                        border={'none'}
                        fontSize={'14px'}
                        icon={<Image src={'/chevron-down.svg'} alt="arrow down" />}
                    >
                        <option value="service1">Service 1</option>
                        <option value="service2">Service 2</option>
                        <option value="service3">Service 3</option>
                    </Select>
                    <FormErrorMessage>{errors.service}</FormErrorMessage>
                </FormControl>

                <FormControl
                    mt={'28px'}
                    isRequired isInvalid={!!errors.message}>
                    <FormLabel
                        fontSize={'14px'}
                        color={'black'}
                        fontWeight={500}
                        htmlFor="message">Message</FormLabel>
                    <Textarea
                        id="message"
                        name="message"
                        value={values.message}
                        onChange={handleChange}
                        borderRadius={'4px'}
                        bg='#F7F7F7'
                        color={'black'}
                        height={'165px'}
                        resize={'none'}
                        pl='10px'
                        border={'none'}
                        fontSize={'14px'}
                    />
                    <FormErrorMessage>{errors.message}</FormErrorMessage>
                </FormControl>

                <Button mt={'28px'}
                    height={'50px'}
                    rounded={'4px'}
                    fontSize={'19px'}
                    fontWeight={500}
                    variant={'primary'} width={'full'} type="submit">
                    Submit
                </Button>
            </form>
        </Box>
    )
}

export default Form