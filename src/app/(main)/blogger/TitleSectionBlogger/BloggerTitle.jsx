import pageStyles from '../../../homepage/page.module.css';
import styles from '../blogger.module.css';

export const BloggerTitle = () => {
  return (
    <>
      <h1 className={styles.blogger_title}>FOR BLOGGERS</h1>
      <h2 className={styles.blogger_title}>
        COLLABORATION WITH PREMIUM <br /> BRANDS{' '}
      </h2>
      <div className={pageStyles.light__spot}></div>
    </>
  );
};
