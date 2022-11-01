import React from 'react'
import {
    Center,
    Heading,
    Text,
    Stack,
  } from '@chakra-ui/react';
  
export default function Store(props) {
  return (
    <div className='store-container'>
        <Center py={0} >  
          <Stack pt={1} align={'center'}>
              <Stack>
                  <img src={props.img} width='80px' height='80px' alt='Course'></img>
              </Stack>
              <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                  {props.title}
              </Heading>
              <hr/> 
              <Stack>
                <Text color={'blue.500'} fontSize={'sm'} textTransform={'uppercase'}>
                    {props.description} <br/>
                </Text>
                <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                    {props.type} - {props.location}
                </Text>
              </Stack>
              <Stack direction={'row'} align={'center'}>
                  <Text fontWeight={800} fontSize={'sm'} color={props.isAvailable? 'green' : 'red.500'}>
                      {props.isAvailable? "متاح" : "مغلق"} 
                  </Text>
              </Stack>
          </Stack>
        </Center>
    </div>
  )
}
