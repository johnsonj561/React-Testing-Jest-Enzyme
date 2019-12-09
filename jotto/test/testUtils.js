import checkPropTypes from 'check-prop-types';

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShallowWrapper} wrapper
 * @param {string} val - value of attribute
 */
export const findByTestAttr = (wrapper, val) =>
  wrapper.find(`[data-test='${val}']`);

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name);
  expect(propError).toBeUndefined();
}