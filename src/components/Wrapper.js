import React from 'react';
import './Wrapper.css';

function Wrapper({children}){

  return (
    <div className='container'>
      {children}
    </div>
  )
}

export default Wrapper;