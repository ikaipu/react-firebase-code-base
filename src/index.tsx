import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import { AuthHooksContext } from 'hooks/auth';
import { PostHooksContext } from 'hooks/post';
import * as firestoreAuthHooks from 'hooks/auth/firebase';
import * as firestorePostHooks from 'hooks/post/firebase';
import FirebaseProvider from 'FirebaseProvider';
import App from './App';
import * as serviceWorker from './serviceWorker';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.unstable_createRoot(root).render(
  <React.StrictMode>
    <FirebaseProvider>
      <AuthHooksContext.Provider value={firestoreAuthHooks}>
        <PostHooksContext.Provider value={firestorePostHooks}>
          <App />
        </PostHooksContext.Provider>
      </AuthHooksContext.Provider>
    </FirebaseProvider>
  </React.StrictMode>,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
