import React, { ChangeEvent } from 'react';
import { Form } from 'semantic-ui-react';

export interface Props {
  touched?: boolean;
  error?: string | boolean;
  value?: string;
  icon: string;
  type?: string;
  name: string;
  placeholder: string;

  onBlur?: (e: FocusEvent) => void;
  onChange?: (e: ChangeEvent) => void;
}

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
    <Form.Input
      fluid
      data-testid={name}
      id={name}
      name={name}
      type={type}
      error={
        touched && error
          ? {
              content: error,
              pointing: 'below',
              style: { width: '100%' },
            }
          : null
      }
      onBlur={onBlur}
      onChange={onChange}
      value={value}
      icon={icon}
      iconPosition="left"
      placeholder={placeholder}
    />
  );
};

export default FormInput;
