/* eslint-disable react/require-default-props */
/* eslint-disable jsx-quotes */
/* eslint-disable no-tabs */
/* eslint-disable indent */
import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result, display }) => (
  <div className={display}>
    {result}
  </div>
);

Display.defaultProps = { result: '0' };
Display.propTypes = {
  result: PropTypes.string.isRequired,
  display: PropTypes.string,
};

export default Display;
