'use client';

import { useDispatch } from 'react-redux';
import styles from './buttonNext.module.css';

const ButtonNext = ({ onNextClick }) => {
  return (
    <div className={styles.btn_gradient_next}>
      <button type="button" className={`${styles.button} ${styles.button_next}`}>
        Next
      </button>
    </div>
  );
};

export default ButtonNext;
