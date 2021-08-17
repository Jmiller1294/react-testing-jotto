import { EnzymeAdapter } from "enzyme";
import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from "../test/testUtils";
import Input from "./Input";

const defaultProps = { secretWord: 'hello'}
const mockSetCurrentGuess = jest.fn();

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: (initialState) => [initialState, mockSetCurrentGuess]
}))

const setup = (props={}) => {
  const setupProps = {...defaultProps, ...props};
  return shallow(<Input { ...setupProps } />);
}

test('Input component renders without error', () => {
  const wrapper = setup();
  const inputComponent = findByTestAttr(wrapper, 'component-input');
  expect(inputComponent.length).toBe(1);
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