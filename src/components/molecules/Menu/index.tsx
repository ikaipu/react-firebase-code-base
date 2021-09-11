import React, { useState } from 'react';
import { Menu as SemanticMenu, Input, Button } from 'semantic-ui-react';

export type Props = {
  signOut: () => Promise<void>;
  goToCreatePost: () => void;
};

const Menu: React.FC<Props> = (props) => {
  const { signOut, goToCreatePost } = props;
  const [activeItemName, setActiveItemName] = useState('');

  const handleItemClick = (e: unknown, data: { name?: string }) =>
    setActiveItemName(data.name ?? '');

  return (
    <>
      <SemanticMenu fixed="top" borderless style={{ height: '5rem' }}>
        <SemanticMenu.Item header>Code Base</SemanticMenu.Item>
        <SemanticMenu.Item position="right">
          <Input
            style={{
              width: '400px',
            }}
            className="icon"
            icon="search"
            placeholder="Search"
          />
        </SemanticMenu.Item>
        <SemanticMenu.Item
          name="posts"
          content="Posts"
          active={activeItemName === 'posts'}
          onClick={handleItemClick}
          position="right"
        />
        <SemanticMenu.Item
          name="myPage"
          content="My Page"
          active={activeItemName === 'myPage'}
          onClick={handleItemClick}
        />
        <SemanticMenu.Item
          data-testid="sign-out"
          name="signOut"
          content="Sign out"
          active={activeItemName === 'signOut'}
          onClick={signOut}
        />
        <SemanticMenu.Item>
          <Button data-testid="create-post" primary onClick={goToCreatePost}>
            Create Post
          </Button>
        </SemanticMenu.Item>
      </SemanticMenu>
      <div style={{ height: '5rem' }} />
    </>
  );
};

export default Menu;
