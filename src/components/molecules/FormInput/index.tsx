import React, { SyntheticEvent } from 'react';
import { Form } from 'semantic-ui-react';
import './style.css';
import ErrorMessage from '../ErrorMessage';

export type Props = {
  touched?: boolean;
  error?: string | boolean;
  value?: string;
  icon: string;
  type: string;
  name: string;
  placeholder: string;
  onBlur?: (e: SyntheticEvent) => void;
  onChange?: (e: SyntheticEvent) => void;
};

const FormInput: React.FC<Props> = (props) => {
  const {
    touched,
    error,
    value,
    onBlur,
    onChange,
    icon,
    name,
    type,
    placeholder,
  } = props;

  return (
    <div>
      <Form.Input
        data-testid={name}
        id={name}
        name={name}
        type={type}
        error={touched && !!error}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        icon={icon}
        iconPosition="left"
        placeholder={placeholder}
        fluid
        style={{
          marginBottom: 0,
        }}
      />
      <ErrorMessage touched={touched} error={error} />
    </div>
  );
};

export default FormInput;
