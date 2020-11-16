import React, { useState } from 'react';
import { Menu as SemanticMenu, Input, Button } from 'semantic-ui-react';

export interface Props {
  logout: () => Promise<void>;
}

const Menu: React.FC<Props> = (props) => {
  const { logout } = props;
  const [activeItemName, setActiveItemName] = useState('');

  const handleItemClick = (e: unknown, data: { name?: string }) =>
    setActiveItemName(data.name ?? '');

  return (
    <>
      <SemanticMenu
        fixed="top"
        borderless
        color="blue"
        style={{ height: '5rem' }}
      >
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
          name="projects"
          content="Projects"
          active={activeItemName === 'projects'}
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
          data-testid="logout"
          name="logout"
          content="Sign out"
          active={activeItemName === 'logout'}
          onClick={logout}
        />
        <SemanticMenu.Item>
          <Button primary>Create</Button>
        </SemanticMenu.Item>
      </SemanticMenu>
      <div style={{ height: '5rem' }} />
    </>
  );
};

export default Menu;
