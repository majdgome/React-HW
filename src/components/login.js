import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';

export default function Login() {
  
  const [emailVal, setEmailVal] = useState("Please Enter your email");
  const [passVal, setPassVal] = useState("Please Enter your password");

  
    function handleSubmit(e) {
      e.preventDefault();
      alert('is logged in');
    }


  return (
    <form onSubmit={handleSubmit}>
      <Flex
        align={'center'}
        justify={'center'}>
        <Stack spacing={5} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={5}>
            <Stack spacing={2}>
              <FormControl id="email" isRequired='true'>
                <FormLabel>Email address </FormLabel>
                <Input type="email" onChange={() => setEmailVal('')}/>
                <p>{emailVal}</p>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <Input type="password" onChange={() => setPassVal('')}/>
                {passVal}
              </FormControl>
              <Stack spacing={10}>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  type={"submit"}
                  >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </form>
  );
}