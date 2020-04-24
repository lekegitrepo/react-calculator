/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, btnColor, color, wide }) => {
  const style = {
    width: wide ? '50%' : '25%',
    backgroundColor: color,
  };
  return (
    <button type="button" className={ btnColor } style={style} >
      { name }
    </button>
  )
};

Button.propTypes = { 
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool
};

Button.defaultProps = {
  wide: false,
  color: 'orange',
};

export default Button;
