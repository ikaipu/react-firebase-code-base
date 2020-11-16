import React, { FC } from 'react';
import './A.css';

export interface Props {
  onClick?: () => void;
}

const A: FC<Props> = ({ children, onClick = () => null }) => {
  return (
    <button className="link-button" type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default A;
