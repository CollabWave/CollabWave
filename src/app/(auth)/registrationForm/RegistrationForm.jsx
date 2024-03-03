import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { setRegistrationStep } from '@/redux/auth/authSlice';
import regImg from '../../../image/regImg.jpg';
import google from '../../../image/google.png';
import styles from './RegistrationForm.module.css';
import PropTypes from 'prop-types';
import Link from 'next/link';

const RegistrationForm = ({ onNextClick }) => {
  const dispatch = useDispatch();

  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [isFormBlocked, setIsFormBlocked] = useState(false);

  const [formData, setFormData] = useState({
    role: 'blogger',
    password: '',
    email: '',
    firstName: '',
    lastName: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    checkbox: '',
  });
  const [isValid, setIsValid] = useState({
    email: true,
    password: true,
    firstName: true,
    lastName: true,
    checkbox: false,
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = { email: '', password: '', firstName: '', lastName: '', checkbox: '' };
    const newIsValid = {
      email: true,
      password: true,
      firstName: true,
      lastName: true,
      checkbox: false,
    };

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      newIsValid.email = false;
      valid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
      newIsValid.password = false;
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email address';
      newIsValid.email = false;
      valid = false;
    }

    setErrors(newErrors);
    setIsValid(newIsValid);
    return valid;
  };

  const handleNextClick = async e => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(setRegistrationStep(2));
      if (onNextClick) {
        onNextClick(formData);
        dispatch(setRegistrationStep(2));
      }
    }
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleNextClick();
    }
  };
  const handleCheckboxChange = event => {
    setIsCheckboxChecked(event.target.checked);
  };

  return (
    <div className={styles.box_img}>
      <Image src={regImg} alt="Photo" className={styles.img} />
      {/* <Link> */}
      <button className={`${styles.button_login} ${styles.button_next}`}>Login</button>
      {/* </Link> */}
      <div className={styles.container_form}>
        <h1 className={styles.title}>Registration</h1>
        <form className={styles.form} onKeyDown={handleKeyDown}>
          <div className={`${styles.gradient} ${!isValid.email ? styles.gradientError : ''}`}>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              disabled={isFormBlocked}
              className={`${styles.input} ${!isValid.email ? styles.inputError : ''}`}
              placeholder="Email"
            />
            {/* {errors.email && (
              <p className={styles.error} color="white">
                Email invalid
              </p>
            )} */}
          </div>

          <div className={`${styles.gradient} ${!isValid.email ? styles.gradientError : ''}`}>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              disabled={isFormBlocked}
              className={`${styles.input} ${!isValid.password ? styles.inputError : ''}`}
              placeholder="Password"
            />
            {/* {errors.password && (
              <p className={styles.error} color="white">
                Password required
              </p>
            )} */}
          </div>

          <div>
            <div className={`${styles.gradient} ${!isValid.email ? styles.gradientError : ''}`}>
              <input
                className={`${styles.input} ${!isValid.firstName ? styles.inputError : ''}`}
                type="text"
                id="firstName"
                name="firstName"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="First name"
              />
              {/* {errors.lastName && !isValid.lastName && !formData.lastName && (
                <p className={`${styles.error} ${styles.errorMessage}`}>{errors.firstName}</p>
              )} */}
            </div>
          </div>
          <div className={`${styles.gradient} ${!isValid.email ? styles.gradientError : ''}`}>
            <input
              className={`${styles.input} ${!isValid.lastName ? styles.inputError : ''}`}
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder=" Last name"
            />
            {/* {errors.lastName && !isValid.lastName && (
              <p className={`${styles.error} ${styles.errorMessage}`}>{errors.lastName}</p>
            )} */}
          </div>

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
          <p className={styles.line}>or</p>

          <div className={styles.div_button}>
            <button className={`${styles.button} ${styles.button_google}`}>
              <Image src={google} alt="Image Alt Text" width={20} className={styles.google_img} />
              Google
            </button>
            <div className={`${styles.div_button} ${styles.div_button_next}`}>
              <button
                type="button"
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

RegistrationForm.propTypes = {
  onNextClick: PropTypes.func.isRequired,
  onInputChange: PropTypes.func,
};

export default RegistrationForm;
