import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../test/testUtils';
import Input from './Input'

const defaultProps = {
  secretWord: 'party',
};

const setup = (props={}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Input{...setupProps} />)
};

it('renders without crashing', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-input');
  expect(component.length).toBe(1);
});

it('throws no warning with expected prop types', () => {
  const propError = checkProps(Input, defaultProps);
  expect(propError).toBeUndefined();
});
