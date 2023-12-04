import pageStyles from '../../../homepage/page.module.css';
import styles from '../blogger.module.css';

export const BloggerTitle = () => {
  return (
    <>
      <h1 className={styles.blogger_title}>
        SELECT PREMIUM BRANDS <br /> TO COLLABORATE WITH
      </h1>
      <div className={pageStyles.light__spot}></div>
    </>
  );
};
