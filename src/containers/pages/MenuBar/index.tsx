import Menu from 'components/molecules/Menu';
import { useAuthAction } from 'hooks/auth';
import React from 'react';
import { Outlet, useNavigate } from 'react-router';

// eslint-disable-next-line @typescript-eslint/ban-types
export type Props = {};

const MenuBar: React.FC<Props> = () => {
  const navigate = useNavigate();
  const { signOut } = useAuthAction();

  return (
    <>
      <Menu signOut={signOut} goToCreatePost={() => navigate('/create-post')} />
      <Outlet />
    </>
  );
};

export default MenuBar;
