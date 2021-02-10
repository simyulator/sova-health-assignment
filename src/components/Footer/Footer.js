import React from 'react';
import './Footer.css';

const footer = (props) => {
  return (
    <div className='footer'>
      <div className='footer-content'>
        <div className='sign-up-div'>
          <span style={{ marginTop: '25px' }}>
            Just good content. No spam. Sign up for our newsletter
          </span>
          <input type='text' className='email-input' placeholder='Your email' />
          <button className='submit-email-button'>Submit</button>
        </div>
        <div className='contact-div'>
          <div className='phone-div'>
            <img
              src='https://static.wixstatic.com/media/885c0e_a3ef59513eaa4633aa3d289fbd0e776c~mv2.png/v1/fill/w_20,h_20,al_c,q_85,usm_0.66_1.00_0.01/Buttons-38.webp'
              alt=''
            />
            <span style={{ marginLeft: '25px' }}>+91 9811 574 691</span>
          </div>
          <div className='email-id-div'>
            <img
              src='https://static.wixstatic.com/media/885c0e_eb3fd16be6fe4e26974aa3473cdeae77~mv2.png/v1/fill/w_20,h_15,al_c,q_85,usm_0.66_1.00_0.01/Buttons-39.webp'
              alt=''
            />
            <span style={{ marginLeft: '25px' }}>support@sova.health</span>
          </div>
        </div>
      </div>
      <div className='social-links'>
        <img
          src='https://static.wixstatic.com/media/0fdef751204647a3bbd7eaa2827ed4f9.png/v1/fill/w_42,h_42,al_c,q_85,usm_0.66_1.00_0.01/0fdef751204647a3bbd7eaa2827ed4f9.webp'
          alt='fb'
        />
        <img
          src='https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_42,h_42,al_c,q_85,usm_0.66_1.00_0.01/01c3aff52f2a4dffa526d7a9843d46ea.webp'
          alt='insta'
        />
        <img
          src='https://static.wixstatic.com/media/c7d035ba85f6486680c2facedecdcf4d.png/v1/fill/w_42,h_42,al_c,q_85,usm_0.66_1.00_0.01/c7d035ba85f6486680c2facedecdcf4d.webp'
          alt='twitter'
        />
        <img
          src='https://static.wixstatic.com/media/78aa2057f0cb42fbbaffcbc36280a64a.png/v1/fill/w_42,h_42,al_c,q_85,usm_0.66_1.00_0.01/78aa2057f0cb42fbbaffcbc36280a64a.webp'
          alt='youtube'
        />
      </div>
      <div className='footer-bottom'>
        &copy;{' '}
        <span>WEDNESDAY HEALTH INDIA PVT. LTD. 2020. ALL RIGHTS RESERVED</span>
      </div>
    </div>
  );
};

export default footer;
