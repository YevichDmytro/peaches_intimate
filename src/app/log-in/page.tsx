'use client';

import SocialLoginButtons from './components/SocialLoginButtons/SocialLoginButtons';
import LoginForm from './components/LoginForm/LoginForm';
import UserModal from './components/UserModal/UserModal';
import useGoogleLogin from '@/hooks/useGoogleLogin';
import { useState } from 'react';
import style from './page.module.scss';

const LoginPage = () => {
  const [isModalOpen, setModalOpen] = useState(true);

  const { user, login, loading } = useGoogleLogin();

  return (
    <div className={style.loginPage}>
      {!user && (
        <>
          <div className={style.leftSide}>
            <h1 className={style.title}>Peaches</h1>
          </div>

          <div className={style.rightSide}>
            <div className={style.rightSideContent}>
              <h1 className={style.rightSideTitle}>Log In</h1>

              <div className={style.buttonsMenu}>
                <SocialLoginButtons
                  onClick={login}
                  disabled={loading}
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

      {user && isModalOpen && (
        <UserModal userData={user!} setModalOpen={setModalOpen} />
      )}
    </div>
  );
};

export default LoginPage;
