import { Post } from 'domains/models/post';
import React from 'react';
import { Card, Header } from 'semantic-ui-react';
import PostItem from 'containers/organisms/PostItem';

export type Props = {
  title: string;
  posts: Post[];
};

const PostList: React.FC<Props> = (props) => {
  const { title, posts } = props;

  return (
    <>
      <Header content={title} dividing />
      <Card.Group>
        {posts.map((post) => {
          const { id, name, description, userId } = post;

          return (
            <PostItem
              userId={userId}
              key={id}
              name={name}
              description={description ?? ''}
            />
          );
        })}
      </Card.Group>
    </>
  );
};

export default PostList;
