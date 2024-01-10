import styles from '../advertisement-slug.module.css';

export const ProductCollapse = ({ advertisement }) => {
  return (
    <ul className={styles.list}>
      <li>
        <p className={`${styles.smallHeading} secondary-text`}>Advertiser</p>
        <p>{advertisement.product.advertiser ? advertisement.product.advertiser : '-'}</p>
      </li>
      <li>
        <p className={`${styles.smallHeading} secondary-text`}>Product description</p>
        <p>{advertisement.product.description ? advertisement.product.description : '-'}</p>
      </li>
      <li>
        <p className={`${styles.smallHeading} secondary-text`}>Product advantages</p>
        {advertisement.product.advantage ? (
          <ol>
            {advertisement.product.advantage.map(adv => (
              <li>{adv}</li>
            ))}
          </ol>
        ) : (
          <p>-</p>
        )}
      </li>
    </ul>
  );
};
