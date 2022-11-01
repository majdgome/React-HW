import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Store from './components/Store';
import Login from './components/login';
import { Course } from './components/courses';
import { Input } from '@chakra-ui/react'
import { useState } from 'react';

function App() {
  const [title, setTitle] = useState("");
  const result = Course.filter(item => item.title.toLowerCase().includes(title));
  
  return (
    <div className="App">
      <Nav/>
      <Login/>

      <Input placeholder='Search ...' backgroundColor={'white'} mb={10} w={400} onChange={(e)=> setTitle(e.target.value)}/>
      
      <div className='grid-container'>
        <div className='cards-container'>
          {result.map((item) => (
            <Store img={item.img} title={item.title} description={item.description} type={item.type} location={item.location} isAvailable={item.isAvailable}/>
          ))}
        </div>
      </div>

      <Footer/>      
    </div>
  );
}


export default App;
