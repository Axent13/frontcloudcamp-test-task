import React from 'react';
import './button.scss';

interface IButton {
  text: string;
  isFilled: boolean;
  onClickFunction: Function;
}

const Button = ({ text, isFilled = false, onClickFunction }: IButton) => {
  return (
    <button
      onClick={() => {
        onClickFunction();
      }}
      className={'button' + (isFilled ? ' button_filled' : '')}
    >
      {text}
    </button>
  );
};

export default Button;
