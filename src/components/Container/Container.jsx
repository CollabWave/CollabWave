import styles from './container.module.css';

export const Container = ({ children, line }) => (
  <div className={line ? `${styles.container} ${styles.topLine}` : styles.container}>{children}</div>
);
