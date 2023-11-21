import React from 'react';
import Image from 'next/image';
import regImg from '../../../image/regImg.jpg';
import google from '../../../image/google.png';
import styles from './RegistrationForm.module.css';
import Link from 'next/link';
const RegistrationForm = () => {
  return (
    <div className={styles.box_img}>
      <Image src={regImg} alt="Photo" width={450} />
      <div className={styles.container_form}>
        <h1 className={styles.title}>Registration</h1>
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
            <button
              // className={`${styles.button} ${styles['learn-more']}`}
              className={`${styles.button} ${styles.button_google}`}
            >
              <Image src={google} alt="Image Alt Text" width={20} className={styles.google_img} />
              Google
            </button>
            <div className={styles.div_button}>
              <Link href="registrationExtended">
                <button className={`${styles.button} ${styles.button_next}`}>Next</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
