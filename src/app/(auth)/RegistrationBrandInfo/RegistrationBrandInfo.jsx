'use client';
import React from 'react';
import { useState } from 'react';
import styles from './RegistrationBrandInfo.module.css';
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

const RegistrationBrandInfo = ({ formInputData, onNextClick }) => {
  const [formDataSocial, setFormDataSocial] = React.useState({
    socialLinks: [{ platform: '', username: '', followers: '' }],
    // socialMedia: '???',
    type: '',
    gender: 'male',
    birthDate: {
      date: 15,
      month: 3,
      year: 1990,
    },
    location: '',
    phone: '',
    language: 'ua',
    education: '-',
    blogLanguage: 'ua',
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
  const handleNextClick = e => {
    e.preventDefault();

    // Опціонально, обробляти дані або передавати їх батьківському компоненту
    console.log('Blog Data:', formDataSocial);

    // Передавання данних батьківському компоненту чи іншій функції
    if (onNextClick) {
      onNextClick(formDataSocial);
    }

    // Ваш код для обробки після передачі даних батьківському компоненту чи іншій функції
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
      // Оновлюємо перший елемент масиву socialLinks
      updatedSocialLinks[0] = { ...updatedSocialLinks[0], platform: socialMedia };
      console.log('Updated socialLinks:', updatedSocialLinks);
      return {
        ...prevData,
        socialLinks: updatedSocialLinks,
      };
    });
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormDataSocial(prevData => ({
      ...prevData,
      [name]: value,
    }));
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
          <label htmlFor="location" className={styles.label}>
            location
          </label>
          <input
            className={styles.input}
            type="text"
            id="location"
            name="location"
            value={formDataSocial.location}
            onChange={handleInputChange}
          />
          <label htmlFor="phone" className={styles.label}>
            Phone
          </label>
          <input
            className={styles.input}
            type="text"
            id="phone"
            name="phone"
            value={formDataSocial.phone}
            onChange={handleInputChange}
          />
          <label htmlFor="blogLanguage" className={styles.label}>
            Blog Language
          </label>
          <input
            className={styles.input}
            type="text"
            id="blogLanguage"
            name="blogLanguage"
            value={formDataSocial.blogLanguage}
            onChange={handleInputChange}
          />
          <label htmlFor="type" className={styles.label}>
            Thematic
          </label>
          <div>
            <select
              id="type"
              name="type"
              className={styles.input}
              onChange={handleThematicChange}
              value={formDataSocial.type}
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

export default RegistrationBrandInfo;
