import Main from 'components/templates/Main';
import React from 'react';
import Helmet from 'react-helmet';

// eslint-disable-next-line @typescript-eslint/ban-types
export type Props = {};

const Home: React.FC<Props> = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Main />
    </>
  );
};

export default Home;
