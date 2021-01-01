import React, { FC, FormEvent, ReactNode, SyntheticEvent } from 'react';

import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react';

import FormInput from 'components/molecules/FormInput';

export type Props = {
  headerTitle: string;
  formElements: {
    name: string;
    type: string;
    icon: string;
    placeholder: string;
  }[];
  errorMessage: string;
  touched: {
    [key: string]: boolean | undefined;
  };
  errors: {
    [key: string]: string | boolean | undefined;
  };
  values: {
    [key: string]: string | undefined;
  };
  submitButtonText: string;
  onBlur: (e: SyntheticEvent) => void;
  onChange: (e: SyntheticEvent) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  bottomContent?: ReactNode;
};

const TextForm: FC<Props> = (props) => {
  const {
    headerTitle,
    formElements,
    onBlur,
    onChange,
    onSubmit,
    touched,
    errors,
    values,
    errorMessage = '',
    submitButtonText,
    bottomContent,
  } = props;

  return (
    <Grid textAlign="center" style={{ height: '100vh' }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" textAlign="center">
          {headerTitle}
        </Header>
        {errorMessage !== '' && (
          <Message error style={{ textAlign: 'left' }}>
            {errorMessage}
          </Message>
        )}
        <Form onSubmit={onSubmit} noValidate>
          <Segment>
            {formElements.map((element) => {
              return (
                <FormInput
                  key={element.name}
                  name={element.name}
                  type={element.type}
                  error={errors ? errors[element.name] ?? false : false}
                  touched={touched ? touched[element.name] ?? false : false}
                  value={values ? values[element.name] ?? '' : ''}
                  onBlur={onBlur}
                  onChange={onChange}
                  icon={element.icon}
                  placeholder={element.placeholder}
                />
              );
            })}
            <Button
              data-testid="submit"
              type="submit"
              primary
              fluid
              size="large"
            >
              {submitButtonText}
            </Button>
          </Segment>
          {bottomContent}
        </Form>
      </Grid.Column>
    </Grid>
  );
};

export default TextForm;
