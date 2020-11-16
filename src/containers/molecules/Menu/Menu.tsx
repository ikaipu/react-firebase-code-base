import React, { FC } from 'react';

import { useAuthAction } from 'hooks/auth';
import Menu from 'components/molecules/Menu/Menu';

const EnhancedMenu: FC = () => {
  const { logout } = useAuthAction();

  return <Menu logout={logout} />;
};

export default EnhancedMenu;
