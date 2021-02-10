import React from 'react';
import './SmallCard.css';

const smallCard = (props) => {
  return (
    <div className='small-card'>
      <img
        src='https://static.wixstatic.com/media/9d3b92_f2d1148d737c4e9e9407d2b91df56572~mv2.png/v1/fill/w_40,h_50,al_c,q_85,usm_0.66_1.00_0.01/cross.webp'
        alt='img2'
        className='cross-img'
      />
      <h3>{props.title}</h3>
    </div>
  );
};

export default smallCard;
