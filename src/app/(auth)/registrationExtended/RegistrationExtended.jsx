'use client';

import { useState } from 'react';
import React from 'react';
import Image from 'next/image';
import styles from './RegistrationExtended.module.css';
import regImg from '../../../image/reg-ext.jpeg';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setRegistrationStep } from '@/redux/auth/authSlice';
const RegistrationExtended = ({ onNextClick, onInputChange }) => {
  const dispatch = useDispatch();
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
  });
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    checkbox: '',
  });
  const [isValid, setIsValid] = useState({
    firstName: true,
    lastName: true,
    checkbox: false,
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = { firstName: '', lastName: '', checkbox: '' };
    const newIsValid = { firstName: true, lastName: true, checkbox: false };

    // Перевірка на заповненість полів
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
      newIsValid.firstName = false;
      valid = false;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
      newIsValid.lastName = false;
      valid = false;
    }

    // Перевірка чекбокса
    if (!isCheckboxChecked) {
      newErrors.checkbox = 'Please agree to the terms before proceeding';
      valid = false;
    } else {
      newIsValid.checkbox = true;
    }

    setErrors(newErrors);
    setIsValid(newIsValid);
    return valid;
  };

  const handleCheckboxChange = event => {
    setIsCheckboxChecked(event.target.checked);
  };

  const handleButtonClick = e => {
    e.preventDefault();
    if (!isCheckboxChecked) {
      alert('Будь ласка, погодьтеся з умовами користування, перш ніж продовжувати.');
    }
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleNextClick(e);
    }
  };
  const handleNextClick = async e => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(setRegistrationStep(3));
      if (onNextClick) {
        onNextClick(formData);
        dispatch(setRegistrationStep(3));
      }
    }
  };

  const handlePrevClick = () => {
    dispatch(setRegistrationStep(1));
  };

  return (
    <div className={styles.container}>
      <Image src={regImg} alt="registration image" width={450} />
      <div className={styles.divform}>
        <h1 className={styles.title}>Tell about yourself!</h1>
        <form className={styles.form} onKeyDown={handleKeyDown}>
          <div className={styles.gradient}>
            <input
              className={`${styles.input} ${!isValid.firstName ? styles.inputError : ''}`}
              type="text"
              id="firstName"
              name="firstName"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="First name"
            />
            {errors.lastName && !isValid.lastName && !formData.lastName && (
              <p className={`${styles.error} ${styles.errorMessage}`}>{errors.firstName}</p>
            )}
          </div>
          <div className={styles.gradient}>
            <input
              className={`${styles.input} ${!isValid.lastName ? styles.inputError : ''}`}
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder=" Last name"
            />
          </div>
          {errors.lastName && !isValid.lastName && (
            <p className={`${styles.error} ${styles.errorMessage}`}>{errors.lastName}</p>
          )}
          <div className={styles.divCheckbox}>
            <p className={styles.checkbox}>
              <input
                type="checkbox"
                className={`${styles.checkbox_input} ${
                  !isValid.checkbox ? styles.checkboxInputError : ''
                }`}
                checked={isCheckboxChecked}
                onChange={handleCheckboxChange}
              />
              я погоджуюсь з умовами{'\u00A0'}
              <a href="" className={styles.link}>
                використання
              </a>
            </p>{' '}
            {errors.checkbox && !isValid.checkbox && (
              <p className={`${styles.error} ${styles.errorMessage}`}>{errors.checkbox}</p>
            )}
          </div>

          <div className={styles.cont_button}>
            <button className={`${styles.button} ${styles.button_next}`} onClick={handlePrevClick}>
              Back
            </button>
            <button className={`${styles.button} ${styles.button_next}`} onClick={handleNextClick}>
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationExtended;
