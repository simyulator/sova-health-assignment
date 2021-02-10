import React from 'react';
import './Heading.css';

const heading = (props) => {
  return (
    <div className='heading-div'>
      <h1 className='heading'>{props.children}</h1>
      <hr className='underline' />
    </div>
  );
};

export default heading;
