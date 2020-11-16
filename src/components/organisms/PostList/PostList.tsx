import { Post } from 'domains/models/post';
import React from 'react';
import { Card, Header, Label } from 'semantic-ui-react';

export interface Props {
  title: string;
  posts: Post[];
}

const PostList: React.FC<Props> = (props) => {
  const { title, posts } = props;

  const items = posts.map((post) => ({
    key: post.id,
    header: post.title,
    description: post.description,
    meta: (
      <>
        <Label content="New" color="green" />
        <Label content="Featured" color="red" />
      </>
    ),
    fluid: true,
  }));

  return (
    <>
      <Header content={title} dividing />
      <Card.Group items={items} />
    </>
  );
};

export default PostList;
