import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbSeparator,
  } from '@chakra-ui/react'

function Nav() {
  return (
    <div className='navbar'>
        <Breadcrumb separator='\'>
            <BreadcrumbItem>
                <BreadcrumbLink href='../about.js'>عن أكاديمية طويق</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
                <BreadcrumbLink href='../index.js'>الرئيسية</BreadcrumbLink>
            </BreadcrumbItem>

            {/* <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='#'>Contact</BreadcrumbLink>
            </BreadcrumbItem> */}
        </Breadcrumb>
    </div>
  )
}

export default Nav