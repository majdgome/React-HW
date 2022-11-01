import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink
  } from '@chakra-ui/react'

function Nav() {
  return (
    <div className='navbar'>
        <Breadcrumb separator='\'>
            <BreadcrumbItem>
                <BreadcrumbLink href='../index.js'>قائمة المبادرات</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
    </div>
  )
}

export default Nav