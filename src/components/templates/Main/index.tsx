import Spinner from 'components/atoms/Spinner';
import UserCard from 'containers/molecules/UserCard';
import MainPostLists from 'containers/organisms/MainPostLists';
import ErrorBoundary from 'ErrorBoundary';
import React, { Suspense } from 'react';
import { useNavigate } from 'react-router';
import { Grid } from 'semantic-ui-react';

const Main: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: '100%',
        margin: '32px 0',
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
            <UserCard onClick={() => navigate('/edit-account')} />
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

export default Main;
