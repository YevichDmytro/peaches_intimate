'use client';

import { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';
import { auth } from '@/lib/firebase/config';
import SocialLoginButtons from '@/app/log-in/components/SocialLoginButtons';
import LoginForm from '@/app/log-in/components/LoginForm';
import style from '@/app/log-in/page.module.scss';
import UserModal from './components/UserModal/UserModal';

const LoginPage = () => {
  const [isLogin, setLogin] = useState<boolean>(false);
  const [userData, setUserData] = useState<User | null>(null);

  const handleGoogleAuth = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      setLogin(true);
      setUserData(user);

      console.log('Login successfully!', user);
    } catch (error) {
      console.log('Error! Login was failed:', error);
    }
  };

  return (
    <div className={style.loginPage}>
      {!isLogin && (
        <>
          <div className={style.leftSide}>Swiper</div>
          <div className={style.rightSide}>
            <h1>Log In</h1>

            <div className={style.buttonsMenu}>
              <SocialLoginButtons
                onClick={handleGoogleAuth}
                alt='Google login Icon'
                icon='/svg/google-icon.svg'
              >
                Log in with Google
              </SocialLoginButtons>
            </div>

            <p>Or</p>

            <LoginForm />
          </div>
        </>
      )}

      {userData && <UserModal setLogin={setLogin} userData={userData!} />}
    </div>
  );
};

export default LoginPage;
