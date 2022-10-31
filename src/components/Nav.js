import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
    Button,
    ButtonGroup,
    Stack,
  } from '@chakra-ui/react'

function Nav() {
  return (
    <div className='navbar'>
        <Breadcrumb separator='\'>
            <BreadcrumbItem>
                <BreadcrumbLink href='../index.js'>قائمة المبادرات</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>

        
        {/* <Stack spacing={4} direction='row' align='center'>
          <Button colorScheme='blue' size='xs' onclick="location.href='https://google.com';"> تسجيل الدخول </Button>
        </Stack> */}
    </div>
  )
}

export default Nav