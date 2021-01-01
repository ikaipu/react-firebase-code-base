import React from 'react';
import styles from './style.module.css';

export type Props = {
  touched?: boolean;
  error?: string | boolean;
};

const ErrorMessage: React.FC<Props> = (props) => {
  const { touched, error } = props;

  return (
    <div className={styles.errorMessage}>{touched && error ? error : ''}</div>
  );
};

export default ErrorMessage;
