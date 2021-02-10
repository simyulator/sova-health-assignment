import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import Logo from '../../Logo/Logo';

const navigationItems = (props) => (
  <ul className='navigation-items'>
    <NavigationItem link='/'> Home </NavigationItem>
    <NavigationItem link='/'> How it works </NavigationItem>
    <NavigationItem link='/'> Pricing </NavigationItem>
    <NavigationItem link='/'> Science </NavigationItem>
    <NavigationItem link='/'> FAQS </NavigationItem>
    <NavigationItem link='/'> About us </NavigationItem>
  </ul>
);

export default navigationItems;
