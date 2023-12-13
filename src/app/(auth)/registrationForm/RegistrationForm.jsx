import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { setRegistrationStep } from '@/redux/auth/authSlice';
import regImg from '../../../image/regImg.jpg';
import google from '../../../image/google.png';
import styles from './RegistrationForm.module.css';
import PropTypes from 'prop-types';

const RegistrationForm = ({ onNextClick }) => {
  const dispatch = useDispatch();
  const registrationStep = useSelector(state => state.auth.registrationStep);
  const [formData, setFormData] = useState({
    role: 'blogger',
    password: '',
    email: '',
  });

  const handleNextClick = () => {
    if (onNextClick) {
      onNextClick(formData);
      dispatch(setRegistrationStep(2));
    }
  };
  // useEffect(() => {
  //   // Викликаємо setRegistrationStep після завершення рендерингу
  //   dispatch(setRegistrationStep(1));
  // }, [formData]);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <div className={styles.box_img}>
      <Image src={regImg} alt="Photo" width={450} />
      <div className={styles.container_form}>
        <h1 className={styles.title}>Registration</h1>
        <form className={styles.form}>
          <label htmlFor="email" className={styles.label}>
            EMAIL
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={styles.input}
          />
          <label htmlFor="password" className={styles.label}>
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className={styles.input}
          />
          <p className={styles.line}>or</p>
          <div className={styles.div_button}>
            <button className={`${styles.button} ${styles.button_google}`}>
              <Image src={google} alt="Image Alt Text" width={20} className={styles.google_img} />
              Google
            </button>
            <div className={styles.div_button}>
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

RegistrationForm.propTypes = {
  onNextClick: PropTypes.func.isRequired,
  onInputChange: PropTypes.func,
};

export default RegistrationForm;
