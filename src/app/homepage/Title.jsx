import { AnimatedTitle } from './AnimatedTitle';

import styles from '../homepage/page.module.css';

export const Title = () => {
  return (
    <>
      <AnimatedTitle>
        THE BEST <span className={styles.green_text}>PLATFORM</span> FOR{' '}
        <span className={styles.green_text}>COLLABORATION</span> BETWEEN <br />
        BLOGGERS & BRANDS
      </AnimatedTitle>
      <div className={styles.light__spot_outer}></div>
    </>
  );
};
