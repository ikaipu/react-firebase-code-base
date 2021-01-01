import React, { FC } from 'react';
import styles from './style.module.css';

export type Props = {
  onClick?: () => void;
};

const A: FC<Props> = ({ children, onClick = () => null }) => {
  return (
    <button
      data-testid="a"
      className={styles.linkButton}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default A;
