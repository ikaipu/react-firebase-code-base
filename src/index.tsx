import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import { AuthHooksContext } from 'hooks/auth';
import { PostHooksContext } from 'hooks/post';
import { UserHooksContext } from 'hooks/user';
import * as firestoreAuthHooks from 'hooks/auth/firebase';
import * as firestorePostHooks from 'hooks/post/firebase';
import * as firestoreUserHooks from 'hooks/user/firebase';
import FirebaseProvider from 'FirebaseProvider';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseProvider>
      <AuthHooksContext.Provider value={firestoreAuthHooks}>
        <UserHooksContext.Provider value={firestoreUserHooks}>
          <PostHooksContext.Provider value={firestorePostHooks}>
            <App />
          </PostHooksContext.Provider>
        </UserHooksContext.Provider>
      </AuthHooksContext.Provider>
    </FirebaseProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
