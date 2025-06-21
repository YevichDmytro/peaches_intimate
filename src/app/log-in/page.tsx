'use client';

import { useState } from 'react';
import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';
import { auth } from '@/lib/firebase/config';
import SocialLoginButtons from './components/SocialLoginButtons/SocialLoginButtons';
import LoginForm from './components/LoginForm/LoginForm';
import UserModal from './components/UserModal/UserModal';
import style from './page.module.scss';

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
          <div className={style.leftSide}>
            <h1 className={style.title}>Peaches</h1>
          </div>

          <div className={style.rightSide}>
            <div className={style.rightSideContent}>
              <h1 className={style.rightSideTitle}>Log In</h1>

              <div className={style.buttonsMenu}>
                <SocialLoginButtons
                  onClick={handleGoogleAuth}
                  alt='Google login Icon'
                  icon='/svg/google-icon.svg'
                >
                  Log in with Google
                </SocialLoginButtons>
              </div>

              <p className={style.paragraph}>Or</p>

              <div>
                <LoginForm />
              </div>
            </div>
          </div>
        </>
      )}

      {userData && <UserModal setLogin={setLogin} userData={userData!} />}
    </div>
  );
};

export default LoginPage;
