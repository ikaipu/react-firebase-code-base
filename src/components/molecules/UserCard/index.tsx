import React from 'react';
import { Button, Card } from 'semantic-ui-react';

export type Props = {
  name: string;
  onClick: () => void;
};

const UserCard: React.FC<Props> = (props) => {
  const { name, onClick } = props;

  return (
    <Card data-testid="user-card">
      <Card.Content textAlign="center">
        <Card.Header>{name}</Card.Header>
      </Card.Content>
      <Card.Content extra textAlign="center">
        <Button data-testid="user-edit-button" onClick={onClick}>
          登録情報編集
        </Button>
      </Card.Content>
    </Card>
  );
};

export default UserCard;
