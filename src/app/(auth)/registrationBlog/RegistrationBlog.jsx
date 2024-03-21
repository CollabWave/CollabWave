'use client';
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRegistrationStep } from '@/redux/auth/authSlice';
import styles from './RegistrationBlog.module.css';
import Image from 'next/image';
import blogImg from '../../../image/reg-blog.png';

const RegistrationBlog = ({ formInputData, onNextClick }) => {
  const dispatch = useDispatch();
  const [formDataSocial, setFormDataSocial] = React.useState({
    type: '',
    gender: '',
    birthDate: {
      date: 15,
      month: 3,
      year: 1990,
    },
    location: '',
    phone: '',
    language: '',
    education: '-',
    blogLanguage: '',
  });
  const thematicOptions = [
    'Мода',
    'Подорожі',
    'Їжа та Кулінарія',
    'Технології',
    'Освіта',
    'Здоров`я',
    'Фотографія',
    'Бізнес',
    'Культура та Мистецтво',
    'Материнство та Батьківство',
    'Дизайн',
    'Наука',
    'Техніка та Інновації',
    'Спорт',
    'Подкасти',
    'Навколишнє середовище',
    'Ігрова індустрія',
    'Дитяче',
    'Новини',
    'Політика',
    'Музикант - гурт',
    'Митець',
    'Автор цифрового контенту',
    'Косметика та догляд',
    'Сфера краси',
    'Письменник',
    'Особистий блог',
    'Громадський діяч',
    'Розважальний контент',
    'Блогер інфлюенсер',
  ];

  const [errors, setErrors] = useState({
    type: '',
    gender: '',
    location: '',
    phone: '',
    language: '',
    blogLanguage: '',
  });
  const [isValid, setIsValid] = useState({
    type: true,
    gender: true,
    location: true,
    phone: true,
    language: true,
    blogLanguage: true,
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      type: '',
      gender: '',
      location: '',
      phone: '',
      language: '',
      blogLanguage: '',
    };
    const newIsValid = {
      type: true,
      gender: true,
      location: true,
      phone: true,
      language: true,
      blogLanguage: true,
    };

    if (!formDataSocial.type.trim()) {
      newErrors.type = 'type is required';
      newIsValid.type = false;
      valid = false;
    }

    if (!formDataSocial.gender.trim()) {
      newErrors.gender = 'gender is required';
      newIsValid.gender = false;
      valid = false;
    }
    if (!formDataSocial.location.trim()) {
      newErrors.location = 'First name is required';
      newIsValid.location = false;
      valid = false;
    }

    if (!formDataSocial.phone.trim()) {
      newErrors.phone = 'Last name is required';
      newIsValid.phone = false;
      valid = false;
    }
    if (!formDataSocial.language.trim()) {
      newErrors.language = 'language is required';
      newIsValid.language = false;
      valid = false;
    }
    if (!formDataSocial.blogLanguage.trim()) {
      newErrors.blogLanguage = 'blogLanguage is required';
      newIsValid.blogLanguage = false;
      valid = false;
    }
    setErrors(newErrors);
    setIsValid(newIsValid);
    return valid;
  };

  const handleNextClick = e => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(setRegistrationStep(4));
      onNextClick(formDataSocial);
    }
  };
  const handleThematicChange = event => {
    const selectedThematic = event.target.value;
    setFormDataSocial(prevData => ({
      ...prevData,
      type: selectedThematic,
    }));
  };

  const generateOptions = (start, end) => {
    const options = [];
    for (let i = start; i <= end; i++) {
      options.push(i.toString());
    }
    return options;
  };
  const handlePrevClick = () => {
    dispatch(setRegistrationStep(2));
  };
  const handleInputChange = e => {
    const { name, value } = e.target;

    if (name === 'date' || name === 'month' || name === 'year') {
      setFormDataSocial(prevData => ({
        ...prevData,
        birthDate: {
          ...prevData.birthDate,
          [name]: value,
        },
      }));
    } else {
      setFormDataSocial(prevData => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  return (
    <div className={styles.conatainer}>
      <Image src={blogImg} alt="Blogger" width="450"></Image>
      <div className={styles.container_form}>
        <div>
          <h1 className={styles.title}>Add a social contection</h1>
          {/* <p className={styles.text}> Link your social media account where you plan to advertise</p>
          <p className={styles.text}>To register you must have at least 1000 subscribers</p> */}
        </div>
        <form className={styles.form}>
          <div className={`${styles.gradient} ${!isValid.language ? styles.gradientError : ''}`}>
            <select
              id="language"
              name="language"
              className={`${styles.input} ${!isValid.language ? styles.inputError : ''}`}
              onChange={handleInputChange}
              defaultValue=""
              value={formDataSocial.language}
            >
              <option value="" disabled>
                Language
              </option>
              <option value="en">English</option>
              <option value="ua">Ukrainian</option>
            </select>
          </div>
          {/* <div className={styles.div_select}> */}
          <div className={`${styles.gradient} ${!isValid.location ? styles.gradientError : ''}`}>
            <input
              className={`${styles.input} ${!isValid.location ? styles.inputError : ''}`}
              type="text"
              id="location"
              name="location"
              value={formDataSocial.location}
              onChange={handleInputChange}
              placeholder="location"
            />
          </div>
          <div className={`${styles.gradient} ${!isValid.type ? styles.gradientError : ''}`}>
            <select
              id="type"
              name="type"
              className={`${styles.input} ${!isValid.type ? styles.inputError : ''}`}
              onChange={handleThematicChange}
              defaultValue=""
              value={formDataSocial.type}
            >
              <option value="" disabled>
                Thematic
              </option>
              {thematicOptions.map((thematic, index) => (
                <option key={index} value={thematic}>
                  {thematic}
                </option>
              ))}
            </select>
          </div>
          {/* </div> */}
          {/* <div className={styles.div_select}> */}
          <div className={`${styles.gradient} ${!isValid.phone ? styles.gradientError : ''}`}>
            <input
              className={`${styles.input} ${!isValid.phone ? styles.inputError : ''}`}
              type="text"
              id="phone"
              name="phone"
              value={formDataSocial.phone}
              onChange={handleInputChange}
              placeholder="Phone"
            />
          </div>
          <div
            className={`${styles.gradient} ${!isValid.blogLanguage ? styles.gradientError : ''}`}
          >
            <select
              id="blogLanguage"
              name="blogLanguage"
              className={`${styles.input} ${!isValid.blogLanguage ? styles.inputError : ''}`}
              onChange={handleInputChange}
              defaultValue=""
              value={formDataSocial.blogLanguage}
            >
              <option value="" disabled>
                Blog language
              </option>
              <option value="ua">Українська</option>
              <option value="ru">Російська</option>
              <option value="en">Англійська</option>
            </select>
          </div>
          {/* </div> */}
          {/* <div className={styles.div_select}> */}
          <div className={`${styles.gradient} ${!isValid.gender ? styles.gradientError : ''}`}>
            <select
              id="gender"
              name="gender"
              className={`${styles.input} ${!isValid.gender ? styles.inputError : ''}`}
              onChange={handleInputChange}
              defaultValue=""
              value={formDataSocial.gender}
            >
              <option value="" disabled>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            {/* <label htmlFor="day">Day:</label> */}
            <select
              id="day"
              name="date"
              className={styles.birthDay}
              onChange={handleInputChange}
              value={formDataSocial.birthDate.date}
              // defaultValue=""
            >
              {/* <option value="" disabled>
                  Select Day
                </option> */}
              {generateOptions(1, 31).map(day => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>

            {/* <label htmlFor="month">Month:</label> */}
            <select
              id="month"
              name="month"
              className={styles.birthDay}
              onChange={handleInputChange}
              value={formDataSocial.birthDate.month}
              // defaultValue=""
            >
              {/* <option value="" disabled>
                  Select Month
                </option> */}
              {generateOptions(1, 12).map(month => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </select>

            {/* <label htmlFor="year">Year:</label> */}
            <select
              id="year"
              name="year"
              className={styles.birthDay}
              onChange={handleInputChange}
              value={formDataSocial.birthDate.year}
              // defaultValue=""
            >
              {/* <option value="" disabled>
                  Select Year
                </option> */}
              {generateOptions(1970, new Date().getFullYear()).map(year => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          {/* </div> */}
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

export default RegistrationBlog;
