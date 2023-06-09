import React, { PropsWithChildren, ReactFragment } from 'react';
import './frame.scss';

const Frame = ({ children }: PropsWithChildren) => {
  return <div className='frame'>{children}</div>;
};

export default Frame;
