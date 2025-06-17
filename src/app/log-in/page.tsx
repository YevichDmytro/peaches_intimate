import style from './page.module.scss';

import React from 'react';

const LoginPage = () => {
  return (
    <div className='page'>
      <h1>Log In</h1>

      <div className={style.buttonsMenu}>
        <button>Log in with Google</button>
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
