import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import App from './App';

const setup = (state = {}) => {
  const wrapper= mount(<App />);

  //add value to input box
  const inputBox = findByTestAttr(wrapper, 'input-box');
  inputBox.simulate('change', { target: { value: 'train' }})

  //simulate click on submit button
  const submitButton = findByTestAttr(wrapper, 'submit-button');
  submitButton.simulate('click', { preventDefault() {} })
  
  return wrapper;
}

describe('no words guessed', () => {

})

describe('some words guessed', () => {

})

describe('guess secret word', () => {
  
})