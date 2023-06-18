import React, { Children } from 'react';
import './tip.scss';

interface ITip {
  children: string | string[];
}

const Tip = ({ children }: ITip) => {
  return <div className='tip'>{children}</div>;
};

export default Tip;
