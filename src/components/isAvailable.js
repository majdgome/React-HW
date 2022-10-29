import React from 'react'
import Store from './Store';


function isAvailable(isOnline,courseName,description,isAvailable,location) {
   let isAvailableColor;
    if (isAvailable){
      isAvailable = 'متاح';
      isAvailableColor = 'green';
    }else {
      isAvailable = 'مغلق';
      isAvailableColor = 'gray.500';
    }
    <Store isOnline courseName description isAvailable location isAvailableColor/>

}

export default isAvailable