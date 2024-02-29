import { useRouter } from 'next/navigation';

import { useDispatch } from 'react-redux';
import { setClientType, setRegistrationStep } from '@/redux/auth/authSlice';

import { BrandButtonModel } from '@/components/3D Buttons/BrandButton/BrandButtonModel';
import { BloggerButtonModel } from '@/components/3D Buttons/BloggerButton/BloggerButtonModel';

import styles from './animations.module.css';

export const ButtonsSection = ({ itemDisplayed, visibleItem, onFadeOut }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleBloggerButtonClick = e => {
    e.preventDefault();
    dispatch(setClientType('blog'));
    dispatch(setRegistrationStep(1));
    router.push('/registration');
  };

  const handleBrandButtonClick = e => {
    e.preventDefault();
    dispatch(setClientType('brand'));
    dispatch(setRegistrationStep(1));
    router.push('/registration');
  };

  return (
    <div className={styles.buttonsContainer}>
      {visibleItem === 'buttons' && (
        <>
          <div className={styles.buttonWrap} onClick={handleBloggerButtonClick}>
            <BloggerButtonModel
              dissolveVisible={itemDisplayed === 'buttons'}
              onFadeOut={onFadeOut}
            />
          </div>
          <div className={styles.buttonWrap} onClick={handleBrandButtonClick}>
            <BrandButtonModel dissolveVisible={itemDisplayed === 'buttons'} onFadeOut={onFadeOut} />
          </div>
        </>
      )}
    </div>
  );
};
