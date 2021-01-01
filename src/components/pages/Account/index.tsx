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
import FormDropdown from 'components/molecules/FormDropdown';

type AccountBooleanMap = {
  name?: boolean;
  address?: boolean;
  phoneNumber?: boolean;
  industry?: boolean;
  description?: boolean;
};

export type AccountStringMap = {
  name?: string;
  address?: string;
  phoneNumber?: string;
  industry?: string;
  description?: string;
};

export type Props = {
  errorMessage: string;
  touched: AccountBooleanMap;
  errors: AccountStringMap;
  values: AccountStringMap;
  onBlur: (e: SyntheticEvent) => void;
  onChange: (e: SyntheticEvent) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  succeeded?: boolean;
  onCloseModal?: () => void;
};

const Account: FC<Props> = (props) => {
  const {
    onBlur,
    onChange,
    onSubmit,
    touched,
    errors,
    values,
    errorMessage = '',
    onCloseModal = () => undefined,
    succeeded = false,
  } = props;

  return (
    <>
      <Modal open={succeeded} size="mini" style={{ textAlign: 'center' }}>
        <Modal.Header>編集完了</Modal.Header>
        <Modal.Content>
          <Modal.Description>情報の編集が完了しました</Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={onCloseModal}>OK</Button>
        </Modal.Actions>
      </Modal>
      <Helmet>
        <title>登録情報登録</title>
      </Helmet>
      <Grid
        textAlign="center"
        style={{ height: '100vh' }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" textAlign="center">
            登録情報を登録
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
                placeholder="氏名"
              />
              <FormInput
                name="address"
                type="text"
                error={errors.address}
                touched={touched.address}
                value={values.address}
                onBlur={onBlur}
                onChange={onChange}
                icon="map marker alternate"
                placeholder="住所"
              />
              <FormInput
                name="phoneNumber"
                type="tel"
                error={errors.phoneNumber}
                touched={touched.phoneNumber}
                value={values.phoneNumber}
                onBlur={onBlur}
                onChange={onChange}
                icon="phone"
                placeholder="電話番号"
              />
              <FormDropdown
                name="industry"
                placeholder="働いている業界を選んで下さい"
                options={[
                  { key: 'it', value: 'it', text: 'IT関連' },
                  {
                    key: 'agriculture',
                    value: 'agriculture',
                    text: '農林',
                  },
                  { key: 'fisher', value: 'fisher', text: '漁業' },
                ]}
                value={values.industry}
                onBlur={onBlur}
                onChange={onChange}
                error={errors.industry}
                touched={touched.industry}
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
                placeholder="概要"
              />
              <Button
                data-testid="submit"
                primary
                type="submit"
                fluid
                size="large"
              >
                登録
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default Account;
