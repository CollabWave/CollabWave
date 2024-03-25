'use client';
import { useState } from 'react';
import React from 'react';
import Image from 'next/image';
import styles from './RegistrationExtended.module.css';
import regImg from '../../../image/reg-ext.jpeg';
import { roboto } from '@/utils/fonts';
import telegram from '../../../assets/images/svg/telegram.svg';
import telegramHover from '../../../assets/images/svg/telegramHover.svg';
import facebook from '../../../assets/images/svg/facebook.svg';
import facebookHover from '../../../assets/images/svg/facebookHover.svg';
import instagram from '../../../assets/images/svg/instagram.svg';
import instagramHover from '../../../assets/images/svg/instagramHover.svg';
import tiktok from '../../../assets/images/svg/tikTok.svg';
import tiktokHover from '../../../assets/images/svg/tikTokHover.svg';
import youTube from '../../../assets/images/svg/youtube.svg';
import youTubeHover from '../../../assets/images/svg/youtubeHover.svg';
import prevBtn from '../../../image/prevBtn.png';
import { useDispatch } from 'react-redux';
import { setRegistrationStep } from '@/redux/auth/authSlice';
const RegistrationExtended = ({ onNextClick }) => {
  const dispatch = useDispatch();
  const [formDataSocial, setFormDataSocial] = React.useState({
    socialLinks: [{ platform: '', username: '' }],
  });
  const [hoveredIcon, setHoveredIcon] = useState('');
  const [selectedSocialMedia, setSelectedSocialMedia] = useState(null);

  const [errors, setErrors] = useState({
    username: '',
  });
  const [isValid, setIsValid] = useState({
    username: true,
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = { username: '' };
    const newIsValid = {
      username: true,
    };

    if (!formDataSocial.socialLinks[0].username.trim()) {
      newErrors.username = 'Username is required';
      newIsValid.username = false;
      valid = false;
    }

    setErrors(newErrors);
    setIsValid(newIsValid);
    return valid;
  };

  const handleLinkMouseLeave = () => {
    setHoveredIcon('');
  };
  const handleLinkMouseEnter = iconName => {
    setHoveredIcon(iconName);
  };

  const handleSocialMediaClick = socialMedia => {
    setSelectedSocialMedia(socialMedia);
    setFormDataSocial(prevData => {
      const updatedSocialLinks = [...prevData.socialLinks];
      updatedSocialLinks[0] = { ...updatedSocialLinks[0], platform: socialMedia };

      return {
        ...prevData,
        socialLinks: updatedSocialLinks,
      };
    });
  };

  const handleUserNameChange = event => {
    const value = event.target.value;

    setFormDataSocial(prevData => ({
      ...prevData,
      socialLinks: [
        {
          ...prevData.socialLinks[0],
          username: value,
        },
      ],
    }));
  };

  const handleNextClick = async e => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(setRegistrationStep(3));
      onNextClick(formDataSocial);
      if (onNextClick) {
        onNextClick(formDataSocial);
        dispatch(setRegistrationStep(3));
      }
    }
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
  const handlePrevClick = () => {
    dispatch(setRegistrationStep(1));
  };
  return (
    <div className={styles.container}>
      <Image src={regImg} alt="registration image" className={styles.img} />
      <div onClick={handlePrevClick}>
        <Image src={prevBtn} alt="back" className={styles.img_back}></Image>
      </div>
      <div className={styles.list_container}>
        <h1 className={styles.title}>ADD A SOCIAL CONNECTION</h1>
        <p className={styles.text}>
          Link your social media account where you plan to advertise <br />
          To register you must have at least{' '}
          <span className={styles.text_subscribers}>1000 subscribers</span>{' '}
          <span className={styles.text_star}>*</span>
        </p>
        <ul className={styles.socialIcons}>
          <li
            onMouseEnter={() => handleLinkMouseEnter('facebook')}
            onMouseLeave={handleLinkMouseLeave}
          >
            <a
              className={`${styles.link} ${roboto.variable} ${styles.linkWithIcon} ${styles.hoverLink}`}
              target="_blank"
              onClick={() => handleSocialMediaClick('facebook')}
            >
              {hoveredIcon === 'facebook' || selectedSocialMedia === 'facebook' ? (
                <Image priority src={facebookHover} alt="Facebook icon" />
              ) : (
                <Image priority src={facebook} alt="Facebook icon" />
              )}
            </a>
          </li>
          <li
            onMouseEnter={() => handleLinkMouseEnter('telegram')}
            onMouseLeave={handleLinkMouseLeave}
          >
            <a
              className={`${styles.link} ${roboto.variable} ${styles.linkWithIcon} ${styles.hoverLink}`}
              onClick={() => handleSocialMediaClick('telegram')}
            >
              {hoveredIcon === 'telegram' || selectedSocialMedia === 'telegram' ? (
                <Image priority src={telegramHover} alt="Telegram icon" />
              ) : (
                <Image priority src={telegram} alt="Telegram icon" />
              )}
            </a>
          </li>
          <li
            onMouseEnter={() => handleLinkMouseEnter('youtube')}
            onMouseLeave={handleLinkMouseLeave}
          >
            <a
              className={`${styles.link} ${roboto.variable} ${styles.linkWithIcon} ${styles.hoverLink}`}
              target="_blank"
              onClick={() => handleSocialMediaClick('youtube')}
            >
              {hoveredIcon === 'youtube' || selectedSocialMedia === 'youtube' ? (
                <Image priority src={youTubeHover} alt="youTube icon" />
              ) : (
                <Image priority src={youTube} alt="youTube icon" />
              )}
            </a>
          </li>
          <li
            onMouseEnter={() => handleLinkMouseEnter('tiktok')}
            onMouseLeave={handleLinkMouseLeave}
          >
            <a
              className={`${styles.link} ${roboto.variable} ${styles.linkWithIcon} ${styles.hoverLink}`}
              onClick={() => handleSocialMediaClick('tiktok')}
            >
              {hoveredIcon === 'tiktok' || selectedSocialMedia === 'tiktok' ? (
                <Image priority src={tiktokHover} alt="TikTok icon" />
              ) : (
                <Image priority src={tiktok} alt="TikTok icon" />
              )}
            </a>
          </li>
          <li
            onMouseEnter={() => handleLinkMouseEnter('instagram')}
            onMouseLeave={handleLinkMouseLeave}
          >
            <a
              className={`${styles.link} ${roboto.variable} ${styles.linkWithIcon} ${styles.hoverLink}`}
              onClick={() => handleSocialMediaClick('instagram')}
              target="_blank"
            >
              {hoveredIcon === 'instagram' || selectedSocialMedia === 'instagram' ? (
                <Image priority src={instagramHover} alt="Instagram icon" />
              ) : (
                <Image priority src={instagram} alt="Instagram icon" />
              )}
            </a>
          </li>
        </ul>

        <div
          className={`${styles.gradient} ${!isValid.username ? styles.gradientError : ''}`}
          onKeyDown={handleKeyDown}
        >
          <input
            type="text"
            id="username"
            name="username"
            className={styles.input}
            onChange={handleUserNameChange}
            value={formDataSocial.socialLinks[0].username}
            placeholder="User name"
          />
        </div>
        <div className={styles.btn_gradient_next}>
          <button
            type="button"
            className={`${styles.button} ${styles.button_next}`}
            onClick={handleNextClick}
          >
            Next
          </button>
          {/* <Button onClick={handleNextClick}>Next</Button> */}
        </div>
      </div>
    </div>
  );
};

export default RegistrationExtended;
