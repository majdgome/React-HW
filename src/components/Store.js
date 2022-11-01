import React from 'react'
import { Course } from './courses';
import Cards from './Cards';
import { Input } from '@chakra-ui/react';

function Store() {
    
  const [title, setTitle] = React.useState("");
  const result = Course.filter(item => item.title.toLowerCase().includes(title.toLowerCase()));
  
  return (
    <div>
        <Input placeholder='Search ...' backgroundColor={'white'} mb={10} w={400} mt={10} borderRadius={15} onChange={(e)=> setTitle(e.target.value)}/>
        <div className='grid-container'>
            <div className='cards-container'>
                {result.map((item) => (
                <Cards img={item.img} title={item.title} description={item.description} type={item.type} location={item.location} isAvailable={item.isAvailable}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Store