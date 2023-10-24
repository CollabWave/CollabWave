import styles from './Button.module.css';

export function Button({ isOpen, setIsOpen, children }) {
  return (
    <button
      type="button"
      className={styles.btn}
      onClick={e => {
        e.preventDefault();
        setIsOpen(!isOpen);
      }}
    >
      {children}
    </button>
  );
}
