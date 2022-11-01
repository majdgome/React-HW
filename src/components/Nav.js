import React from 'react'
import {Link} from 'react-router-dom'

function Nav() {
  return (
    <div className='navbar'>
        <Link to={"/About"}>عنا</Link>
        <Link to={"/Store"}>قائمة المبادرات </Link>
        <Link to={"/"}>الرئيسية</Link> 
    </div>
  )
}

export default Nav