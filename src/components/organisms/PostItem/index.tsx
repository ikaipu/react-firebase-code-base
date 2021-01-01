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
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <Label content="新着" color="green" />
          <Label content="注目" color="red" />
        </Card.Meta>
        <Card.Description>{description}</Card.Description>
        <Card.Meta>{userName}</Card.Meta>
      </Card.Content>
    </Card>
  );
};

export default PostItem;
