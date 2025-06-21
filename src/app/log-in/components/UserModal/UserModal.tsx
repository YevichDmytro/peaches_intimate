import { FC } from 'react';
import { User } from 'firebase/auth';
import style from './UserModal.module.scss';

interface UserModalProps {
  userData: User;
  setModalOpen: (state: boolean) => void;
}

const UserModal: FC<UserModalProps> = ({ userData, setModalOpen }) => {
  const { email, displayName } = userData;

  const onClose = () => {
    setModalOpen(false);
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
