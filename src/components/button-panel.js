import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

const ButtonPanel = ({ clickHandler }) => {
  const handleClick = buttonName => clickHandler(buttonName);
  return (
    <div>
      <div className="row btn-group">
        <Button name="AC" btn="btn" color="grey" clickHandler={handleClick} />
        <Button name="+/-" btn="btn" color="grey" clickHandler={handleClick} />
        <Button name="%" btn="btn" color="grey" clickHandler={handleClick} />
        <Button name="÷" btn="btn" clickHandler={handleClick} />
      </div>
      <div className="row btn-group">
        <Button name="7" btn="btn" color="grey" clickHandler={handleClick} />
        <Button name="8" btn="btn" color="grey" clickHandler={handleClick} />
        <Button name="9" btn="btn" color="grey" clickHandler={handleClick} />
        <Button name="X" btn="btn" clickHandler={handleClick} />
      </div>
      <div className="row btn-group">
        <Button name="4" btn="btn" color="grey" clickHandler={handleClick} />
        <Button name="5" btn="btn" color="grey" clickHandler={handleClick} />
        <Button name="6" btn="btn" color="grey" clickHandler={handleClick} />
        <Button name="-" btn="btn" clickHandler={handleClick} />
      </div>
      <div className="row btn-group">
        <Button name="1" btn="btn" color="grey" clickHandler={handleClick} />
        <Button name="2" btn="btn" color="grey" clickHandler={handleClick} />
        <Button name="3" btn="btn" color="grey" clickHandler={handleClick} />
        <Button name="+" btn="btn" clickHandler={handleClick} />
      </div>
      <div className="row btn-group">
        <Button name="0" btn="btn" wide color="grey" clickHandler={handleClick} />
        <Button name="." btn="btn" color="grey" clickHandler={handleClick} />
        <Button name="=" btn="btn" clickHandler={handleClick} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
