import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result, display }) => (
  <div className={display}>
    {result}
  </div>
);

Display.defaultProps = { result: '0' };
Display.propTypes = {
  result: PropTypes.string,
  display: PropTypes.string,
};

export default Display;
