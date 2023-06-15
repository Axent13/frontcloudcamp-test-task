import React from 'react';
import './addButton.scss';

interface IAddButton {
  onClickFunction: Function;
}

const AddButton = ({ onClickFunction }: IAddButton) => {
  return (
    <button
      type='button'
      className='add-button'
      onClick={() => onClickFunction()}
    ></button>
  );
};

export default AddButton;
