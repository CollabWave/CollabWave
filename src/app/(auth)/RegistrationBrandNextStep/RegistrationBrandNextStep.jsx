'use client';

import { useState } from 'react';
import React from 'react';
import Image from 'next/image';
import styles from './RegistrationBrandNextStep.module.css';
import regImg from '../../../image/reg-ext.jpeg';
import PropTypes from 'prop-types'; // Імпортуємо PropTypes
import { useDispatch } from 'react-redux';
import { setRegistrationStep } from '@/redux/auth/authSlice';
const RegistrationBrandNextStep = ({ onNextClick, onInputChange }) => {
  const dispatch = useDispatch();
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    // city: '',
  });

  const handleCheckboxChange = event => {
    setIsCheckboxChecked(event.target.checked);
  };

  const handleButtonClick = e => {
    if (isCheckboxChecked) {
      e.preventDefault();
    } else {
      e.preventDefault();
      alert('Будь ласка, погодьтеся з умовами користування, перш ніж продовжувати.');
    }
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleNextClick = async e => {
    e.preventDefault();
    dispatch(setRegistrationStep(3));
    if (onNextClick) {
      onNextClick(formData);
      dispatch(setRegistrationStep(3));
    }
  };

  // Додаємо визначення PropTypes для документації
  RegistrationBrandNextStep.propTypes = {
    onNextClick: PropTypes.func.isRequired,
    onInputChange: PropTypes.func,
  };

  return (
    <div className={styles.container}>
      <Image src={regImg} alt="registration image" width={450} />
      <div className={styles.divform}>
        <h1 className={styles.title}>Tell about yourself!</h1>
        <form className={styles.form}>
          <div>
            <label htmlFor="firstName" className={styles.label}>
              First name
            </label>
            <input
              className={styles.input}
              type="text"
              id="firstName"
              name="firstName"
              value={formData.name}
              onChange={handleInputChange}
            />
            <label htmlFor="lastName" className={styles.label}>
              Last name
            </label>
          </div>
          <input
            className={styles.input}
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
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
            <div>
              <button
                className={`${styles.button} ${styles.button_next}`}
                onClick={handleNextClick}
              >
                Next
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationBrandNextStep;
