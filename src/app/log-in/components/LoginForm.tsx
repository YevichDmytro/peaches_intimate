import React from 'react';

const LoginForm = () => {
  return (
    <div>
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

export default LoginForm;
