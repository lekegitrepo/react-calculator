/* eslint-disable jsx-quotes */
import React from 'react';
import Button from './button';

const ButtonPanel = () => (
  <div>
    <div className='row btn-group'>
      <Button name='AC' btnColor='btn btn-medium' />
      <Button name='+/-' btnColor='btn btn-medium' />
      <Button name='%' btnColor='btn btn-medium' />
      <Button name='/' btnColor='btn btn-medium' />
    </div>
    <div className='row btn-group'>
      <Button name='7' btnColor='btn btn-medium' />
      <Button name='8' btnColor='btn btn-medium' />
      <Button name='9' btnColor='btn btn-medium' />
      <Button name='X' btnColor='btn btn-medium' />
    </div>
    <div className='row btn-group'>
      <Button name='4' btnColor='btn btn-medium' />
      <Button name='5' btnColor='btn btn-medium' />
      <Button name='6' btnColor='btn btn-medium' />
      <Button name='-' btnColor='btn btn-medium' />
    </div>
    <div className='row btn-group'>
      <Button name='1' btnColor='btn btn-medium' />
      <Button name='2' btnColor='btn btn-medium' />
      <Button name='3' btnColor='btn btn-medium' />
      <Button name='+' btnColor='btn btn-medium' />
    </div>
    <div className='row btn-group'>
      <Button name='0' btnColor='btn btn-large' />
      <Button name='.' btnColor='btn btn-medium' />
      <Button name='=' btnColor='btn btn-medium' />
    </div>
  </div>
);

export default ButtonPanel;
