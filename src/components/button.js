/* eslint-disable react/require-default-props  brace-style */
/* eslint-disable object-curly-newline react/prop-types */
/* eslint-disable react/jsx-curly-spacing */
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  name, btn, color, wide
}) => {

  const style = {
    width: wide ? '50%' : '25%',
    backgroundColor: color,
  };
  return (
    <button type="button" className={btn} style={style}>
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
