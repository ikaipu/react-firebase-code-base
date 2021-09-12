import React, { FC, FormEvent, SyntheticEvent } from 'react';
import Helmet from 'react-helmet';

import {
  Button,
  Form,
  Grid,
  Header,
  Segment,
  Message,
  Modal,
} from 'semantic-ui-react';

import FormInput from 'components/molecules/FormInput';

type PostBooleanMap = {
  name?: boolean;
  description?: boolean;
};

export type PostStringMap = {
  name?: string;
  description?: string;
};

export type Props = {
  errorMessage: string;
  touched: PostBooleanMap;
  errors: PostStringMap;
  values: PostStringMap;
  onBlur: (e: SyntheticEvent) => void;
  onChange: (e: SyntheticEvent) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  succeeded: boolean;
  onCloseModal: () => void;
};

const PostForm: FC<Props> = (props) => {
  const {
    onBlur,
    onChange,
    onSubmit,
    touched,
    errors,
    values,
    errorMessage = '',
    succeeded = false,
    onCloseModal,
  } = props;

  return (
    <>
      <Modal open={succeeded} size="mini" style={{ textAlign: 'center' }}>
        <Modal.Header>Succeeded</Modal.Header>
        <Modal.Content>
          <Modal.Description>Succeeded to Submit</Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={onCloseModal}>OK</Button>
        </Modal.Actions>
      </Modal>
      <Helmet>
        <title>Input Post Info</title>
      </Helmet>
      <Grid
        textAlign="center"
        style={{ height: '100vh' }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" textAlign="center">
            Input your post
          </Header>
          {errorMessage !== '' && (
            <Message error style={{ textAlign: 'left' }}>
              {errorMessage}
            </Message>
          )}
          <Form onSubmit={onSubmit} noValidate>
            <Segment>
              <FormInput
                name="name"
                type="text"
                error={errors.name}
                touched={touched.name}
                value={values.name}
                onBlur={onBlur}
                onChange={onChange}
                icon="tag"
                placeholder="Title"
              />
              <FormInput
                name="description"
                type="text"
                error={errors.description}
                touched={touched.description}
                value={values.description}
                onBlur={onBlur}
                onChange={onChange}
                icon="sticky note"
                placeholder="Description"
              />
              <Button
                data-testid="submit"
                primary
                type="submit"
                fluid
                size="large"
              >
                Submit
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default PostForm;
