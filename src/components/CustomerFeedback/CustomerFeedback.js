import React from 'react';
import './CustomerFeedback.css';

const customerFeedback = (props) => {
  return (
    <div className='feedback-slide'>
      <div className='customer-img'>
        <img src={props.imgLink} alt='customer' />
      </div>
      <div className='data'>
        <div className='feedback-data'>
          <p>{props.feedbackData}</p>
        </div>
        <div className='customer-name'>{'- ' + props.customerName}</div>
      </div>
    </div>
  );
};

export default customerFeedback;
