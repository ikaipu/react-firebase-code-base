import { AuthHooks } from 'hooks/auth';
import { useAuth as useAuthFire, useUser } from 'reactfire';
import { isUser } from 'domains/models/user';

// eslint-disable-next-line import/prefer-default-export
export const useAuth: AuthHooks['useAuth'] = () => {
  const user = useUser();

  if (!isUser(user)) {
    throw Error('API type error');
  }

  return { user };
};

export const useAuthAction: AuthHooks['useAuthAction'] = () => {
  const auth = useAuthFire();

  const login = async (email: string, password: string) => {
    await auth
      .signInWithEmailAndPassword(email, password)
      .catch((error: Error & { code: string }) => {
        switch (error.code) {
          case 'auth/invalid-email': {
            throw new Error('Invalid Email Address');
          }
          case 'auth/user-disabled': {
            throw new Error('This Account is Disabled');
          }
          case 'auth/user-not-found':
          case 'auth/wrong-password': {
            throw new Error('Email Address or Password is Incorrect');
          }
          case 'auth/network-request-failed': {
            throw new Error('Network Error Occurred');
          }
          case 'auth/user-token-expired': {
            throw new Error('User Token is Expired');
          }
          case 'auth/operation-not-allowed': {
            throw new Error('Operation is Not Allowed');
          }
          case 'auth/too-many-requests': {
            throw new Error('There were too many requests at the same time');
          }
          default: {
            console.log(error, error.message);
            throw error;
          }
        }
      });
  };
  const register = async (email: string, password: string) => {
    await auth
      .createUserWithEmailAndPassword(email, password)
      .catch((error: Error & { code: string }) => {
        switch (error.code) {
          case 'auth/invalid-email': {
            throw new Error('Invalid Email Address');
          }
          case 'auth/user-disabled': {
            throw new Error('This account is ');
          }
          case 'auth/email-already-in-use': {
            throw new Error('Email is Already In Use');
          }
          case 'auth/weak-password': {
            throw new Error('Password Is too Weak');
          }
          case 'auth/network-request-failed': {
            throw new Error('Network Error Occurred');
          }
          case 'auth/user-token-expired': {
            throw new Error('User Token is Expired');
          }
          case 'auth/operation-not-allowed': {
            throw new Error('Operation is Not Allowed');
          }
          case 'auth/too-many-requests': {
            throw new Error('There were too many requests at the same time');
          }
          default: {
            console.log(error, error.message);
            throw error;
          }
        }
      });
  };
  const logout = async () => {
    await auth.signOut();
  };

  return { login, logout, register };
};
