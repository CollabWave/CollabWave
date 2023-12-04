import React from 'react';
import Image from 'next/image';
import brandImg from '../../../image/brandFirstPage.png';
import styles from './RegistrationBrand.module.css';

const RegistrationBrand = () => {
  return (
    <div className={styles.container}>
      <div>
        <Image src={brandImg} alt="brand photo" height={650}></Image>
        <p>Band</p>
      </div>
      <form className={styles.form}>
        <label htmlFor="name" className={styles.label}>
          EMAIL
        </label>
        <input type="text" id="name" name="name" className={styles.input} />
        <label htmlFor="name" className={styles.label}>
          Password
        </label>
        <input type="text" id="password" name="password" className={styles.input} />
        <p className={styles.line}>or</p>
        <div className={styles.div_button}>
          <button className={`${styles.button} ${styles.button_google}`}>
            <Image src={google} alt="Image Alt Text" width={20} className={styles.google_img} />
            Google
          </button>
          <div className={styles.div_button}>
            <button
              className={`${styles.button} ${styles.button_next}`}
              onClick={() => {
                onNextClick();
              }}
            >
              Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrationBrand;
