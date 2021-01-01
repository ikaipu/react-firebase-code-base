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
        <Modal.Header>掲載完了</Modal.Header>
        <Modal.Content>
          <Modal.Description>投稿の掲載が完了しました</Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={onCloseModal}>OK</Button>
        </Modal.Actions>
      </Modal>
      <Helmet>
        <title>投稿情報掲載</title>
      </Helmet>
      <Grid
        textAlign="center"
        style={{ height: '100vh' }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" textAlign="center">
            投稿情報を掲載
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
                placeholder="投稿名"
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
                placeholder="投稿概要"
              />
              <Button
                data-testid="submit"
                primary
                type="submit"
                fluid
                size="large"
              >
                掲載
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default PostForm;
