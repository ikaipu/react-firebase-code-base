import React, { SyntheticEvent } from 'react';
import { Form } from 'semantic-ui-react';
import ErrorMessage from '../ErrorMessage';

export type Props = {
  touched?: boolean;
  error?: string | boolean;
  value?: string;
  name: string;
  placeholder: string;
  options: { key: string; value: string; text: string }[];
  onBlur: (
    e: SyntheticEvent & {
      target: {
        type: 'blur';
        id: string;
        name: string;
        value?: string | number | boolean | (string | number | boolean)[];
      };
    },
  ) => void;
  onChange: (
    e: SyntheticEvent & {
      target: {
        type: 'change';
        id: string;
        name: string;
        value?: string | number | boolean | (string | number | boolean)[];
      };
    },
  ) => void;
};

const FormDropdown: React.FC<Props> = (props) => {
  const {
    touched,
    error,
    value,
    onBlur,
    onChange,
    name,
    options,
    placeholder,
  } = props;

  return (
    <>
      <Form.Select
        data-testid={name}
        placeholder={placeholder}
        fluid
        search
        selection
        options={options}
        id={name}
        name={name}
        onBlur={(e, data) => {
          if (!onBlur) return;
          onBlur({
            ...e,
            persist: () => null,
            target: {
              ...e.target,
              type: 'blur',
              id: name,
              name,
              value: data.value,
            },
          });
        }}
        onChange={(e, data) => {
          if (!onChange) return;
          onChange({
            ...e,
            persist: () => null,
            target: {
              ...e.target,
              type: 'change',
              id: name,
              name,
              value: data.value,
            },
          });
        }}
        value={value ?? false}
        error={touched && !!error}
      />
      <ErrorMessage error={error} touched={touched} />
    </>
  );
};

export default FormDropdown;
