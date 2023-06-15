import React from 'react';
import './deleteButton.scss';

interface IDeleteButton {
  onClickFunction: Function;
}

const DeleteButton = ({ onClickFunction }: IDeleteButton) => {
  return (
    <button
      type='button'
      className='delete-button'
      onClick={() => onClickFunction()}
    ></button>
  );
};

export default DeleteButton;
