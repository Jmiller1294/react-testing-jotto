import { EnzymeAdapter } from "enzyme";
import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from "../test/testUtils";
import Input from "./Input";

const defaultProps = { success: false, secretWord: 'hello'}
const mockSetCurrentGuess = jest.fn();

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: (initialState) => [initialState, mockSetCurrentGuess]
}))

const setup = (success=false, secretWord='party') => {
  return shallow(<Input success={success} secretWord={secretWord} />);
}

describe('render', () => {
  describe('success is true', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup(true)
    })

    test('Input component renders without error', () => {
      const inputComponent = findByTestAttr(wrapper, 'component-input');
      expect(inputComponent.length).toBe(1);
    })
    test('input box does not show', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.exists()).toBe(false);
    })
    test('submit does not show', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.exists()).toBe(false);
    })
  })

  describe('success is false', () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup(false)
    })

    test('Input component renders without error', () => {
      const inputComponent = findByTestAttr(wrapper, 'component-input');
      expect(inputComponent.length).toBe(1);
    })
    test('input box does show', () => {
      const inputBox = findByTestAttr(wrapper, 'input-box');
      expect(inputBox.exists()).toBe(true);
    })
    test('submit does show', () => {
      const submitButton = findByTestAttr(wrapper, 'submit-button');
      expect(submitButton.exists()).toBe(true);
    })
  })
})


test('does not throw warning with expected props', () => {
  checkProps(Input, defaultProps);
})


describe('state controlled input field', () => {
    let wrapper;
    let originalUseState;

  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    originalUseState = React.useState;
    wrapper = setup();
  })
  afterEach(() => {
    React.useState = originalUseState;
  })

  test('state updates with value of input box upon change', () => {
    const inputBox = findByTestAttr(wrapper, 'input-box');
    const mockEvent = { target: { value: 'train'} };
  
    inputBox.simulate('change', mockEvent);
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
  })

  test('state is called with an empty string when submit button is clicked', () => {
    const button = findByTestAttr(wrapper, 'submit-button');
    
    button.simulate('click', { preventDefault() {} });
    expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
  })
})



