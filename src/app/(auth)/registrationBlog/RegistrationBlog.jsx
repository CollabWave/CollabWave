'use client';
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRegistrationStep } from '@/redux/auth/authSlice';
import styles from './RegistrationBlog.module.css';
import Image from 'next/image';
import blogImg from '../../../image/reg-blog.png';
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
import { roboto } from '@/utils/fonts';

const RegistrationBlog = ({ formInputData, onNextClick }) => {
  const dispatch = useDispatch();
  const [formDataSocial, setFormDataSocial] = React.useState({
    socialLinks: [{ platform: '', username: '', followers: '' }],
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
  const [hoveredIcon, setHoveredIcon] = useState('');
  const [selectedSocialMedia, setSelectedSocialMedia] = useState(null);
  const [socialMediaName, setSocalMediaName] = useState('');
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
  const handleNextClick = e => {
    e.preventDefault();
    dispatch(setRegistrationStep(4));

    if (onNextClick) {
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
  const handleLinkMouseEnter = iconName => {
    setHoveredIcon(iconName);
  };

  const handleLinkMouseLeave = () => {
    setHoveredIcon('');
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
  const generateOptions = (start, end) => {
    const options = [];
    for (let i = start; i <= end; i++) {
      options.push(i.toString());
    }
    return options;
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
  const handlePrevClick = () => {
    dispatch(setRegistrationStep(2));
  };
  const handleInputChange = e => {
    const { name, value } = e.target;

    // Розділіть логіку обробки для кожного поля окремо
    if (name === 'date' || name === 'month' || name === 'year') {
      setFormDataSocial(prevData => ({
        ...prevData,
        birthDate: {
          ...prevData.birthDate,
          [name]: value,
        },
      }));
    } else {
      // Якщо це інше поле, обробіть його так само, як раніше
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
        <form className={styles.form}>
          <div className={styles.div_select}>
            <input
              type="text"
              id="username"
              name="username"
              className={styles.input}
              onChange={handleUserNameChange}
              value={formDataSocial.socialLinks[0].username}
              placeholder="User name"
            />
            <select
              id="language"
              name="language"
              className={styles.input}
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
          <div className={styles.div_select}>
            <input
              className={styles.input}
              type="text"
              id="location"
              name="location"
              value={formDataSocial.location}
              onChange={handleInputChange}
              placeholder="location"
            />
            <select
              id="type"
              name="type"
              className={styles.input}
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
          <div className={styles.div_select}>
            <input
              className={styles.input}
              type="text"
              id="phone"
              name="phone"
              value={formDataSocial.phone}
              onChange={handleInputChange}
              placeholder="Phone"
            />
            <select
              id="blogLanguage"
              name="blogLanguage"
              className={styles.input}
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
          <div className={styles.div_select}>
            <select
              id="gender"
              name="gender"
              className={styles.input}
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

export default RegistrationBlog;
