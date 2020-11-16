import images from 'assets/images';
import React from 'react';
import { Button, Card, Image } from 'semantic-ui-react';

export interface Props {
  name: string;
}

const UserCard: React.FC<Props> = (props) => {
  const { name } = props;

  return (
    <Card data-testid="user-card">
      <Image src={images.alex} wrapped ui={false} />
      <Card.Content textAlign="center">
        <Card.Header>{name}</Card.Header>
      </Card.Content>
      <Card.Content extra textAlign="center">
        <Button>Edit</Button>
      </Card.Content>
    </Card>
  );
};

export default UserCard;
