import React from 'react'
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';
//   https://files.bootcamp.sa/5e7889ad-bc2b-494a-a95a-c0ca153a594a/logo/daa4de04-1eaf-4ecc-bb81-11c39bdecc9b.png
  const IMAGE =
    'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';
  
export default function Store(props) {
  return (
    <div className='store-container'>

        <Center py={12} >
            <Box
                height='380px'
                // h ={'full'}
                role={'group'}
                p={6}
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}>
                
                <Stack pt={10} align={'center'}>
                <Stack>
                    <img src='https://files.bootcamp.sa/5e7889ad-bc2b-494a-a95a-c0ca153a594a/logo/daa4de04-1eaf-4ecc-bb81-11c39bdecc9b.png' width='80px' height='80px' alt='Course'></img>
                </Stack>
                <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                    {props.courseName}
                <br/><hr/> 
                </Heading>
                <Stack>
                <Text color={'blue.500'} fontSize={'sm'} textTransform={'uppercase'}>
                    {props.description} <br/>
                </Text>
                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                    {props.isOnline} - {props.location}
                </Text>
                </Stack>
                <Stack direction={'row'} align={'center'}>
                    <Text fontWeight={800} fontSize={'sm'} color={props.isAvailable? 'green' : 'red.500'}>
                        {props.isAvailable? "متاح" : "مغلق"} 
                    </Text>
                </Stack>
                </Stack>
            </Box>
        </Center>
    </div>
  )
}
