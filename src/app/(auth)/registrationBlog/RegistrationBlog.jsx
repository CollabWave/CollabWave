'use client';
import React from 'react';
import { useState } from 'react';
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
  const [blogData, setBlogFormData] = React.useState({
    // Оголосіть необхідні поля для даних, які ви очікуєте від RegistrationForm
    // Наприклад, socialMedia,matic і т. д.
    socialMedia: '',
    thematic: '',
  });
  const [hoveredIcon, setHoveredIcon] = useState('');
  const [selectedSocialMedia, setSelectedSocialMedia] = useState(null);
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

  const handleThematicChange = event => {
    const selectedThematic = event.target.value;
    setBlogFormData(prevData => ({
      ...prevData,
      thematic: selectedThematic,
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
    setBlogFormData(prevData => ({
      ...prevData,
      socialMedia,
    }));

    const handleIconClick = iconName => {
      if (selectedSocialMedia === iconName) {
        // Якщо клікнуто на вже вибрану іконку, зняти виділення
        setSelectedSocialMedia(null);
      } else {
        // Якщо клікнуто на іншу іконку, встановити її як обрану
        setSelectedSocialMedia(iconName);
      }
    };
    // Викликати функцію handleInputChange і передати обрану соціальну мережу
    handleInputChange({
      target: {
        name: 'socialMedia',
        value: socialMedia,
      },
    });
  };

  // ... інший код

  // Обробник змін для полів у формі RegistrationBlog
  const handleInputChange = e => {
    const { name, value } = e.target;
    setBlogFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNextClick = e => {
    e.preventDefault();

    // Викликаємо передану функцію onNextClick і передаємо дані
    if (onNextClick) {
      onNextClick(blogData);
    }

    // Виводимо дані в консоль для перевірки
  };
  return (
    <div className={styles.conatainer}>
      <Image src={blogImg} alt="Blogger" width="450"></Image>
      <div className={styles.container_form}>
        <div>
          <h1 className={styles.title}>Add a social contection</h1>
          <p className={styles.text}> Link your social media account where you plan to advertise</p>
          <p className={styles.text}>To register you must have at least 1000 subscribers</p>
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
            onMouseEnter={() => handleLinkMouseEnter('youTube')}
            onMouseLeave={handleLinkMouseLeave}
          >
            <a
              className={`${styles.link} ${roboto.variable} ${styles.linkWithIcon} ${styles.hoverLink}`}
              target="_blank"
              onClick={() => handleSocialMediaClick('youTube')}
            >
              {hoveredIcon === 'youTube' || selectedSocialMedia === 'youTube' ? (
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
          <label htmlFor="social-link" className={styles.label}>
            Social Link
          </label>
          <input
            type="text"
            id="social-link"
            name="social-link"
            className={styles.input}
            onChange={handleInputChange}
          />
          <label htmlFor="thematic" className={styles.label}>
            Thematic
          </label>
          <div>
            <select
              id="thematic"
              name="thematic"
              className={styles.input}
              onChange={handleThematicChange}
              value={blogData.thematic} // Додаємо це значення
            >
              <option value="">Оберіть тематику</option>
              {thematicOptions.map((thematic, index) => (
                <option key={index} value={thematic}>
                  {thematic}
                </option>
              ))}
            </select>
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
