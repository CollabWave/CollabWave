import styles from '../homepage/page.module.css';
import { cinzel } from '../utils/fonts';

export const Title = () => {
  return (
    <h1 className={`${styles.title} ${cinzel.variable}`}>
      THE BEST <span className={styles.green_text}>PLATFORM</span> FOR{' '}
      <span className={styles.green_text}>COLLABORATION</span> BETWEEN <br />
      BLOGGERS & BRANDS
    </h1>
  );
};
