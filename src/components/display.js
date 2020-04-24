/* eslint-disable react/require-default-props */
/* eslint-disable jsx-quotes */
/* eslint-disable no-tabs */
/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result, display }) => (
  <input type="text" defaultValue={result} className={display} />
);

Display.defaultValue = { result: '0' };
Display.propTypes = {
  result: PropTypes.string.isRequired,
  display: PropTypes.string,
};

export default Display;
