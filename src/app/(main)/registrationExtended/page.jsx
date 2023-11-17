'use client';

import { useState } from 'react';
import React from 'react';
import Image from 'next/image';
import styles from './RegistrationExtended.module.css';
import regImg from '../../../image/reg-ext.jpeg';
import Link from 'next/link';
const RegistrationExtended = () => {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const handleCheckboxChange = event => {
    setIsCheckboxChecked(event.target.checked);
  };

  const handleButtonClick = e => {
    if (isCheckboxChecked) {
      e.preventDefault;
      console.log('Terms of Use:', true);
    } else {
      e.preventDefault();
      alert('Будь ласка, погодьтеся з умовами користування, перш ніж продовжувати.');
    }
  };

  return (
    <div className={styles.container}>
      <Image src={regImg} alt="registration image" width={450} />
      <div className={styles.divform}>
        <h1 className={styles.title}>Tell about yourself!</h1>
        <form className={styles.form}>
          <div>
            <label htmlFor="name" className={styles.label}>
              First name
            </label>
            <input className={styles.input} type="text" id="name" name="name" />
            <label htmlFor="lastname" className={styles.label}>
              Last name
            </label>
          </div>
          <input className={styles.input} type="text" id="lastname" name="lastname" />
          <label htmlFor="city" className={styles.label}>
            City
          </label>
          <input className={styles.input} type="text" id="city" name="city" />
          <p className={styles.checkbox}>
            <input
              type="checkbox"
              className={styles.checkbox_input}
              checked={isCheckboxChecked}
              onChange={handleCheckboxChange}
            />
            я погоджуюсь з умовами{'\u00A0'}
            <a href="" className={styles.link}>
              використання
            </a>
          </p>
          <div className={styles.cont_button}>
            <Link href="registration" className={styles.button_back}>
              <button className={`${styles.button} ${styles.button_next}`}>Back</button>
            </Link>
            <Link href="registrationBlog">
              <button
                className={`${styles.button} ${styles.button_next}`}
                onClick={handleButtonClick}
              >
                Next
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationExtended;
