import Menu from 'containers/molecules/Menu/Menu';
import Main from 'components/templates/Main/Main';
import React from 'react';
import Helmet from 'react-helmet';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Props {}

const Home: React.FC<Props> = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Menu />
      <Main />
    </>
  );
};

export default Home;
