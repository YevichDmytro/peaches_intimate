import { FC, ReactNode } from 'react';
import Image from 'next/image';
import style from './SocialLoginButtons.module.scss';

interface SocialLoginButtonsProps {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  alt: string;
  icon: string;
  iconWidth?: number;
  iconHeight?: number;
}

const SocialLoginButtons: FC<SocialLoginButtonsProps> = ({
  children,
  onClick,
  disabled = false,
  alt = 'Social Login Icon',
  icon,
  iconWidth = 24,
  iconHeight = 24,
}) => {
  return (
    <button
      type='button'
      onClick={onClick}
      disabled={disabled}
      className={style.socialLoginBtn}
    >
      <Image
        className={style.icon}
        alt={alt}
        src={icon}
        width={iconWidth}
        height={iconHeight}
      />
      <span className={style.btnText}>{children}</span>
    </button>
  );
};

export default SocialLoginButtons;
