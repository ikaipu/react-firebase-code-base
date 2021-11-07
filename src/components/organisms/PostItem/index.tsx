import React from 'react';
import { Card, Label } from 'semantic-ui-react';

export type Props = {
  name: string;
  description: string;
  userName: string;
};

const PostItem: React.FC<Props> = (props) => {
  const { name, description, userName } = props;

  return (
    <Card fluid>
      <Card.Content style={{ background: 'red' }}>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <Label content="New" color="green" />
          <Label content="Pickup" color="red" />
        </Card.Meta>
        <Card.Description>{description}</Card.Description>
        <Card.Meta>{userName}</Card.Meta>
      </Card.Content>
    </Card>
  );
};

export default PostItem;
