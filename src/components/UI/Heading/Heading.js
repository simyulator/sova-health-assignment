import React from 'react';
import './Heading.css';

const heading = (props) => {
  const font = props.size ? '15px' : null;
  return (
    <div className='heading-div'>
      <h1 className='heading' style={{ fontSize: font }}>
        {props.children}
      </h1>
      <hr className='underline' />
    </div>
  );
};

export default heading;
