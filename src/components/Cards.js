import React from 'react'
import {
    Center,
    Heading,
    Text,
    Stack,
    Box,
    Divider
  } from '@chakra-ui/react';
  
export default function Store(props) {



  return (
    <Box
    
    backgroundColor={'white'}
    
borderRadius={20}
padding={10}
    
    className='store-container'>


<Center py={1}>


<Stack  pt={2}  align={'center'}>


<Stack>

<img src={props.img} width='80px' />

</Stack>


<Heading mt={4} fontSize={'2xl'} fontWeight={500}>

{props.title}

</Heading>


<Divider/>

















</Stack>








</Center>


   



   
    </Box>
  )
}
