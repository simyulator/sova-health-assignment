import React from 'react';
import classes from './Button.css';

const button = (props) => {
  return <button className='button'>{props.children}</button>;
};

export default button;
