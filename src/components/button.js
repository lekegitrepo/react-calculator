/* eslint-disable react/require-default-props */
/* eslint-disable brace-style */
/* eslint-disable object-curly-newline */
/* eslint-disable react/jsx-curly-spacing */
/* eslint-disable react/require-default-props */
/* eslint-disable react/prop-types */

import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  name, btn, color, wide, clickHandler,
}) => {
  const handleClick = () => clickHandler(name);
  const style = {
    width: wide ? '50%' : '25%',
    backgroundColor: color,
  };
  return (
    <button type="button" className={btn} style={style} onClick={handleClick}>
      { name }
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool,
  color: PropTypes.string,
  btn: PropTypes.string,
};

Button.defaultProps = {
  wide: false,
  color: 'orange',
};

export default Button;
