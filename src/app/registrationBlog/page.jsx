'use client';
import React from 'react';
import { useState } from 'react';
import styles from './RegistrationBlog.module.css';
import Image from 'next/image';
import blogImg from '../../image/reg-blog.png';
import telegram from '../../assets/images/svg/telegram.svg';
import telegramHover from '../../assets/images/svg/telegramHover.svg';
import facebook from '../../assets/images/svg/facebook.svg';
import facebookHover from '../../assets/images/svg/facebookHover.svg';
import instagram from '../../assets/images/svg/instagram.svg';
import instagramHover from '../../assets/images/svg/instagramHover.svg';
import tiktok from '../../assets/images/svg/tikTok.svg';
import tiktokHover from '../../assets/images/svg/tikTokHover.svg';
import youTube from '../../assets/images/svg/youtube.svg';
import youTubeHover from '../../assets/images/svg/youtubeHover.svg';
import { roboto } from '@/utils/fonts';

const RegistrationBlog = () => {
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

  const [selectedThematic, setSelectedThematic] = useState('');
  const [hoveredIcon, setHoveredIcon] = useState('');

  const handleThematicChange = event => {
    setSelectedThematic(event.target.value);
  };
  const handleLinkMouseEnter = iconName => {
    setHoveredIcon(iconName);
  };

  const handleLinkMouseLeave = () => {
    setHoveredIcon('');
  };
  const handleSocialMediaClick = socialMedia => {
    setSelectedSocialMedia(socialMedia);
    console.log(socialMedia);
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
              {hoveredIcon === 'facebook' ? (
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
              {hoveredIcon === 'telegram' ? (
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
              {hoveredIcon === 'youTube' ? (
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
              {hoveredIcon === 'tiktok' ? (
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
              {hoveredIcon === 'instagram' ? (
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
          <input type="text" id="social-link" name="social-link" className={styles.input} />
          <label htmlFor="thematic" className={styles.label}>
            Thematic
          </label>
          <div>
            <select
              id="thematic"
              name="thematic"
              className={styles.input}
              value={selectedThematic}
              onChange={handleThematicChange}
            >
              <option value="">Оберіть тематику</option>
              {thematicOptions.map((thematic, index) => (
                <option key={index} value={`option${index + 1}`}>
                  {thematic}
                </option>
              ))}
            </select>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationBlog;
