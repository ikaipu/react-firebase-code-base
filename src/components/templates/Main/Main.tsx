import Spinner from 'components/atoms/Spinner/Spinner';
import UserCard from 'components/molecules/UserCard/UserCard';
import MainPostLists from 'containers/organisms/MainPostLists/MainPostLists';
import ErrorBoundary from 'ErrorBoundary';
import React, { Suspense } from 'react';
import { Grid } from 'semantic-ui-react';

const Home: React.FC = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          maxWidth: '50rem',
        }}
      >
        <Grid centered container>
          <Grid.Column width={5}>
            <UserCard name="Takumi Nakazono" />
          </Grid.Column>
          <Grid.Column width={11}>
            <ErrorBoundary>
              <Suspense fallback={<Spinner size="large" />}>
                <MainPostLists />
              </Suspense>
            </ErrorBoundary>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  );
};

export default Home;
