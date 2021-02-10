import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import './Sidedrawer.css';

const sidedrawer = (props) => {
  let attachedClasses = ['side-drawer', 'close'];

  if (props.open) {
    attachedClasses = ['side-drawer', 'open'];
  }

  return (
    <>
      {/* <Backdrop show={props.open} clicked={props.closed} /> */}
      <div className={attachedClasses.join(' ')}>
        <nav>
          <NavigationItems />
        </nav>
      </div>
      {/* <nav className='side-drawer'>
        <NavigationItems />
      </nav> */}
    </>
  );
};

export default sidedrawer;
