import React from 'react'
import { Course } from './courses';
import { useState } from 'react';
import Card from './Cards';
import { Input, SimpleGrid } from '@chakra-ui/react';

function Store() {

  const [title, setTitle] = useState('')


  // if title  is empty dont  show any course show only  empty array
  //  const filteredCourses = title === '' ? []   : Course.filter(course => course.title.toLowerCase().includes(title.toLowerCase()))



  // always filter method result is array []
  // always some  method result is boolean true or false

  const filteredCourses = Course.filter(course => course.title.toLowerCase().includes(title.toLowerCase()))


  console.log('Courses filter', filteredCourses)








  return (
    <div>


      <Input placeholder='search....'

        backgroundColor={'white'}
        mb={10}
        w={400}
        mt={10}
        borderRadius={15}
        onChange={(e) => setTitle(e.target.value)}


      />




      <SimpleGrid columns={[1, 1, 2, 3]} spacing={10}>



        {filteredCourses.map((course) => (



          // single Course 
          <Card img={course.img} title={course.title} description={course.description} type={course.type} location={course.location} isAvailable={course.isAvailable} />
        ))}









      </SimpleGrid>

















    </div>
  )
}

export default Store