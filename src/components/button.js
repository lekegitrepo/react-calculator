/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, btnColor }) => (
  <button type="button" className={ btnColor } >
    { name }
  </button>
);

Button.propTypes = { name: PropTypes.string.isRequired };

export default Button;
