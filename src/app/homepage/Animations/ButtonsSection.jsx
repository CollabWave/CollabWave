import { BrandButtonModel } from '@/components/3D Buttons/BrandButton/BrandButtonModel';
import { BloggerButtonModel } from '@/components/3D Buttons/BloggerButton/BloggerButtonModel';

import styles from './animations.module.css';

export const ButtonsSection = ({ itemDisplayed, visibleItem, onFadeOut }) => {
  return (
    <div className={styles.buttonsContainer}>
      {visibleItem === 'buttons' && (
        <>
          <div className={styles.buttonWrap} onClick={e => console.log('click')}>
            <BloggerButtonModel
              dissolveVisible={itemDisplayed === 'buttons'}
              onFadeOut={onFadeOut}
              style={{ cursor: 'pointer' }}
            />
          </div>
          <div className={styles.buttonWrap}>
            <BrandButtonModel dissolveVisible={itemDisplayed === 'buttons'} onFadeOut={onFadeOut} />
          </div>
        </>
      )}
    </div>
  );
};
