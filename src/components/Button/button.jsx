import styles from './Button.module.css';

export function Button({ isOpen, setIsOpen, children, btn_styles }) {
  return (
    <button
      type="button"
      className={btn_styles ? btn_styles : styles.btn}
      onClick={e => {
        e.preventDefault();
        setIsOpen(!isOpen);
      }}
    >
      {children}
    </button>
  );
}
