import pageStyles from '../../../homepage/page.module.css';
import styles from '../../blogger/blogger.module.css';

export const BrandTitle = () => {
  return (
    <>
      <h1 className={styles.blogger_title}>FOR BRANDS</h1>
      <h2 className={styles.blogger_title}>
        COLLABORATION WITH BLOGGERS <br /> OF TOP SOCIAL NETWORKS{' '}
      </h2>
      <div className={pageStyles.light__spot}></div>
    </>
  );
};
