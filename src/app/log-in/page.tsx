'use client';

import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../lib/firebase/config';
import style from './page.module.scss';

const LoginPage = () => {
  const handleGoogleAuth = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      const user = result.user;
      console.log('Login successfully!', user);
    } catch (error) {
      console.log('Error! Login was failed:', error);
    }
  };

  return (
    <div className='page'>
      <h1>Log In</h1>

      <div className={style.buttonsMenu}>
        <button onClick={handleGoogleAuth}>Log in with Google</button>
        <button>Log in with Apple</button>
        <button>Log in with LinkedIn</button>
        <button>Log in with GitHub</button>
      </div>

      <p>Or</p>

      <form action=''>
        <label htmlFor='email'>
          <input
            type='text'
            id='email'
            placeholder='Enter your email'
            required
          />
        </label>

        <label htmlFor='password'>
          <input
            type='password'
            id='password'
            placeholder='Enter your password'
            required
          />
        </label>

        <button>Forgot password?</button>

        <label htmlFor='remember-me'>
          <input type='checkbox' id='remember-me' name='remember-me' />
        </label>

        <button type='submit'>Log In</button>
      </form>
    </div>
  );
};

export default LoginPage;
