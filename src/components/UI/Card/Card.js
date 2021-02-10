import React from 'react';
import './Card.css';

const card = (props) => {
  return (
    <div className='card'>
      <div className='img-div'>{props.image}</div>
      <div className='label-div'>{props.label}</div>
      <div className='data-div'>{props.data}</div>
    </div>
  );
};
export default card;
