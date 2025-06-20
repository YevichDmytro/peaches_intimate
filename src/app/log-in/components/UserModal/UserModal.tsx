import { FC } from 'react';
import style from './UserModal.module.scss';

interface UserModalProps {
  setLogin: (value: boolean) => void;
  userData: any;
}

const UserModal: FC<UserModalProps> = ({ setLogin, userData }) => {
  const { email, displayName } = userData;

  const onClose = () => {
    setLogin(false);
    window.location.reload();
  };

  return (
    <div className={style.modal}>
      <div className={style.modalContent}>
        <h2>{`Hello, ${displayName}!`}</h2>
        <p className={style.userEmail}>
          Your email: <span>{email}</span>
        </p>
        <button className={style.closeButton} type='button' onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
};

export default UserModal;
