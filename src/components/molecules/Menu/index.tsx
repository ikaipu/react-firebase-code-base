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
            placeholder="ワードでクイック検索"
          />
        </SemanticMenu.Item>
        <SemanticMenu.Item
          name="posts"
          content="投稿一覧"
          active={activeItemName === 'posts'}
          onClick={handleItemClick}
          position="right"
        />
        <SemanticMenu.Item
          name="myPage"
          content="マイページ"
          active={activeItemName === 'myPage'}
          onClick={handleItemClick}
        />
        <SemanticMenu.Item
          data-testid="sign-out"
          name="signOut"
          content="ログアウト"
          active={activeItemName === 'signOut'}
          onClick={signOut}
        />
        <SemanticMenu.Item>
          <Button data-testid="create-post" primary onClick={goToCreatePost}>
            新規掲載
          </Button>
        </SemanticMenu.Item>
      </SemanticMenu>
      <div style={{ height: '5rem' }} />
    </>
  );
};

export default Menu;
