import { EnzymeAdapter } from "enzyme";
import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from "../test/testUtils";
import Input from "./Input";

const defaultProps = { secretWord: 'hello'}

const setup = (props={}) => {
  const setupProps = {...defaultProps, ...props};
  return shallow(<Input { ...setupProps } />);
}

test('does not throw warning with expected props', () => {
  checkProps(Input, defaultProps);
})

test('renders without error', () => {
  const wrapper = setup();
  const inputComponent = findByTestAttr(wrapper, 'component-input');
  expect(inputComponent.length).toBe(1);
})