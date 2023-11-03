import { AnimatedTitle } from './AnimatedTitle';

import pageStyles from '../../homepage/page.module.css';
import styles from './title.module.css'

export const Title = () => {
  return (
    <>
      <AnimatedTitle>
        THE BEST <span className={styles.green_text}>PLATFORM</span> FOR{' '}
        <span className={styles.green_text}>COLLABORATION</span> BETWEEN <br />
        BLOGGERS & BRANDS
      </AnimatedTitle>
      <div className={pageStyles.light__spot}></div>
    </>
  );
};
