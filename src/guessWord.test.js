import React from 'react';
import { mount } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';
import App from './App';

const setup = (state = {}) => {
  const wrapper = mount(<App />);

  //add value to input box
  const inputBox = findByTestAttr(wrapper, 'input-box');
  inputBox.simulate('change', { target: { value: 'train' }})

  //simulate click on submit button
  const submitButton = findByTestAttr(wrapper, 'submit-button');
  submitButton.simulate('click', { preventDefault() {} })
  
  return wrapper;
}

describe.skip('no words guessed', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: 'party',
      success: false,
      guessedWords: []
  })
})
  test('creates GuessedWords table with one row', () => {
    const GuessedWordRows = findByTestAttr(wrapper, 'guessed-word');
    expect(GuessedWordRows).toHaveLength(1);
  })
})

describe.skip('some words guessed', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: 'party',
      success: false,
      guessedWords: [{ guessedWord: 'agile', letterMatchCount: 1 }]
    })
  })
  test('creates a GuessedWords table with multiple rows', () => {
    const GuessedWordRows = findByTestAttr(wrapper, 'guessed-word');
    expect(GuessedWordRows).toHaveLength(2)
  })
})

describe.skip('guess secret word', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: 'party',
      success: false,
      guessedWords: [ { guessedWord: 'agile', letterMatchCount: 1 } ]
    })
  })
  test('creates a GuessedWords table with multiple rows', () => {
    const GuessedWordRows = findByTestAttr(wrapper, 'guessed-word');
    const CongratsMessage = findByTestAttr(wrapper, 'congrats-message')
    expect(GuessedWordRows).toHaveLength(3)
    expect(CongratsMessage.text().length).not.toBe(0);
  })
})