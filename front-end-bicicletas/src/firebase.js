import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDMlk2hNg8nV-r0Xujwx_H0L5lqa_6D0Bk',
  authDomain: 'fir-bicicletaslogin.firebaseapp.com',
  projectId: 'fir-bicicletaslogin',
  storageBucket: 'fir-bicicletaslogin.appspot.com',
  messagingSenderId: '685956690598',
  appId: '1:685956690598:web:2a9ec919c1b4bf279dba67',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
