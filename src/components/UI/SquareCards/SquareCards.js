import React from 'react';
import './SquareCards.css';

const squareCards = (props) => {
  return (
    <div className='square-card-container'>
      <div className='progress-container'>
        <div className='progress'></div>
        <div className='circle'>{props.num}</div>
      </div>

      <div className='square-card'>
        <img src={props.cardImg} alt='card' className='card-img' />
      </div>
      <div className='label'>{props.label}</div>
    </div>
  );
};

export default squareCards;
