import Nav from './Nav';
import Footer from './Footer';
import Store from './Store';
import {Routes, Route} from 'react-router-dom';


function Routers() {
  
  return (
    <div>
      
{/* // navbar  */}

<Nav/>
      

      {/* // pages content */}

      <Routes>
      
        <Route path='/' element={<Store/>}></Route>
       
      </Routes>


{/* footer */}

<Footer/>

      
    </div>
  );
}


export default Routers;
