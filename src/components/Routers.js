import Nav from './Nav';
import Footer from './Footer';
import Store from './Store';
import {Routes, Route} from 'react-router-dom';
import Home from './Home';
import About from './About';

function Routers() {
  
  return (
    <div>
      <Nav/>
      {/* <Login/> */}

      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='Store' element={<Store/>}></Route>
        <Route path='About' element={<About/>}></Route>
      </Routes>

      <Footer/>      
    </div>
  );
}


export default Routers;
