import React from 'react';
import './button.scss';

interface IButton {
  type?: 'button' | 'submit';
  id: string;
  text: string;
  isFilled: boolean;
  onClickFunction?: Function;
}

const Button = ({
  type = 'button',
  id,
  text,
  isFilled = false,
  onClickFunction,
}: IButton) => {
  return (
    <button
      onClick={() => {
        onClickFunction ? onClickFunction() : null;
      }}
      className={'button' + (isFilled ? ' button_filled' : '')}
      type={type}
      id={id}
    >
      {text}
    </button>
  );
};

export default Button;
