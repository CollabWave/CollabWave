'use client';

import Link from 'next/link';
import Image from 'next/image';

import { useState, useEffect } from 'react';

import { emailPattern, phonePattern } from '@/utils/common';

import { Container } from '../Container/Container';

import phone from '../../assets/images/svg/phone.svg';
import phoneHover from '../../assets/images/svg/phoneHover.svg';
import letter from '../../assets/images/svg/letter.svg';
import letterHover from '../../assets/images/svg/letterHover.svg';
import telegram from '../../assets/images/svg/telegram.svg';
import telegramHover from '../../assets/images/svg/telegramHover.svg';
import facebook from '../../assets/images/svg/facebook.svg';
import facebookHover from '../../assets/images/svg/facebookHover.svg';
import instagram from '../../assets/images/svg/instagram.svg';
import instagramHover from '../../assets/images/svg/instagramHover.svg';
import tiktok from '../../assets/images/svg/tikTok.svg';
import tiktokHover from '../../assets/images/svg/tikTokHover.svg';
import visa from '../../assets/images/svg/visa.svg';
import visaHover from '../../assets/images/svg/visaHover.svg';
import master from '../../assets/images/svg/master.svg';
import masterHover from '../../assets/images/svg/masterHover.svg';
import autorship from '../../assets/images/svg/authorship.svg';

import styles from './footer.module.css';
import { cinzel, roboto } from '@/utils/fonts';

export const Footer = () => {
  const [hoveredIcon, setHoveredIcon] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const year = document.getElementById('current-year');
    year.textContent = new Date().getFullYear();
  }, []);

  const handleLinkMouseEnter = iconName => {
    setHoveredIcon(iconName);
  };
  const handleLinkMouseLeave = () => {
    setHoveredIcon('');
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    setErrorMessage('');
    if (!formData.name) {
      setErrorMessage('Please enter the name!');
      return;
    }
    if (/\d/.test(formData.name)) {
      setErrorMessage('Please enter a valid name!');
      return;
    }
    if (!formData.phone) {
      setErrorMessage('Please enter the phone number!');
      return;
    }
    if (phonePattern.test(formData.phone) === false) {
      setErrorMessage('Please enter a valid phone number!');
      return;
    }
    if (!formData.email) {
      setErrorMessage('Please enter the email!');
      return;
    }
    if (!formData.email.match(emailPattern)) {
      setErrorMessage('Please enter a valid email!');
      return;
    }
    if (!formData.message) {
      setErrorMessage('Do not forget to add your message!');
      return;
    }
    console.log(formData);
    setErrorMessage('Your message is sent! We will respond as soon as possible.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <footer style={{ position: 'relative' }}>
      <Container line={true}>
        <div className={styles.footerUpperWrap}>
          <div>
            <h3 className={`${styles.footerTitle} ${cinzel.variable}`}>Contact us</h3>
            <form id="contact-form" className={styles.form}>
              <div className={styles.formWrap}>
                <div className={styles.inputsWrap}>
                  <input
                    className={`${styles.input} ${styles.link} ${roboto.variable}`}
                    value={formData.name}
                    type="text"
                    placeholder="Name*"
                    onChange={e => {
                      setFormData({ ...formData, name: e.target.value });
                    }}
                  />
                  <input
                    className={`${styles.input} ${styles.link} ${roboto.variable}`}
                    type="email"
                    value={formData.email}
                    placeholder="Email*"
                    onChange={e => {
                      setFormData({ ...formData, email: e.target.value });
                    }}
                  />
                </div>
                <div className={styles.inputsWrap}>
                  <input
                    className={`${styles.input} ${styles.link} ${roboto.variable}`}
                    type="tel"
                    value={formData.phone}
                    placeholder="Phone number*"
                    onChange={e => {
                      setFormData({ ...formData, phone: e.target.value });
                    }}
                  />
                  <input
                    className={`${styles.input} ${styles.link} ${roboto.variable}`}
                    value={formData.message}
                    placeholder="Message"
                    onChange={e => {
                      setFormData({ ...formData, message: e.target.value });
                    }}
                  />
                </div>
              </div>
              <button className={`${styles.button} ${roboto.variable}`} onClick={handleFormSubmit}>
                Send
              </button>
            </form>
            {errorMessage && (
              <p className={`${styles.error} ${roboto.variable} ${styles.link}`}>{errorMessage}</p>
            )}
          </div>
          <div className={styles.upperRightWrap}>
            <div>
              <h3 className={`${styles.footerTitle} ${cinzel.variable}`}>Product</h3>
              <ul className={styles.list}>
                <li>
                  <Link
                    className={`${styles.link} ${roboto.variable} ${styles.hoverLink}`}
                    href={''}
                  >
                    Brands
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${styles.link} ${roboto.variable} ${styles.hoverLink}`}
                    href={''}
                  >
                    Influencers
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${styles.link} ${roboto.variable} ${styles.hoverLink}`}
                    href={''}
                  >
                    Reviews
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className={`${styles.footerTitle} ${cinzel.variable}`}>Company</h3>
              <ul className={styles.list}>
                <li>
                  <Link
                    className={`${styles.link} ${roboto.variable} ${styles.hoverLink}`}
                    href={''}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${styles.link} ${roboto.variable} ${styles.hoverLink}`}
                    href={''}
                  >
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${styles.link} ${roboto.variable} ${styles.hoverLink}`}
                    href={''}
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${styles.link} ${roboto.variable} ${styles.hoverLink}`}
                    href={'blog'}
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    className={`${styles.link} ${roboto.variable} ${styles.hoverLink}`}
                    href={''}
                  >
                    Tell about us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.footerBottomWrap}>
          <div>
            <h3 className={`${styles.footerTitle} ${cinzel.variable}`}>Our contacts</h3>
            <ul className={styles.contactsList}>
              <li
                onMouseEnter={() => handleLinkMouseEnter('phone')}
                onMouseLeave={handleLinkMouseLeave}
              >
                <Link
                  className={`${styles.link} ${roboto.variable} ${styles.linkWithIcon} ${styles.hoverLink}`}
                  href={'tel: +39 342 8363 589'}
                >
                  {hoveredIcon === 'phone' ? (
                    <Image priority src={phoneHover} alt="Phone number icon" />
                  ) : (
                    <Image priority src={phone} alt="Phone number icon" />
                  )}
                  +39 342 8363 589
                </Link>
              </li>
              <li
                onMouseEnter={() => handleLinkMouseEnter('mail')}
                onMouseLeave={handleLinkMouseLeave}
              >
                <Link
                  className={`${styles.link} ${roboto.variable} ${styles.linkWithIcon} ${styles.hoverLink}`}
                  href={'mailto: collabwave@gmail.com'}
                >
                  {hoveredIcon === 'mail' ? (
                    <Image priority src={letterHover} alt="Email icon" />
                  ) : (
                    <Image priority src={letter} alt="Email icon" />
                  )}
                  collabwave@gmail.com
                </Link>
              </li>
              <li
                onMouseEnter={() => handleLinkMouseEnter('telegram')}
                onMouseLeave={handleLinkMouseLeave}
              >
                <Link
                  className={`${styles.link} ${roboto.variable} ${styles.linkWithIcon} ${styles.hoverLink}`}
                  href={''}
                >
                  {hoveredIcon === 'telegram' ? (
                    <Image priority src={telegramHover} alt="Telegram icon" />
                  ) : (
                    <Image priority src={telegram} alt="Telegram icon" />
                  )}
                  Telegram
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className={`${styles.footerTitle} ${cinzel.variable}`}>Our social</h3>
            <ul className={styles.socialList}>
              <li
                onMouseEnter={() => handleLinkMouseEnter('facebook')}
                onMouseLeave={handleLinkMouseLeave}
              >
                <Link
                  className={`${styles.link} ${roboto.variable} ${styles.linkWithIcon} ${styles.hoverLink}`}
                  href={'https://www.facebook.com/profile.php?id=61550583685200'}
                  target="_blank"
                >
                  {hoveredIcon === 'facebook' ? (
                    <Image priority src={facebookHover} alt="Facebook icon" />
                  ) : (
                    <Image priority src={facebook} alt="Facebook icon" />
                  )}
                  Facebook
                </Link>
              </li>
              <li
                onMouseEnter={() => handleLinkMouseEnter('instagram')}
                onMouseLeave={handleLinkMouseLeave}
              >
                <Link
                  className={`${styles.link} ${roboto.variable} ${styles.linkWithIcon} ${styles.hoverLink}`}
                  href={'https://www.instagram.com/collab_wave/'}
                  target="_blank"
                >
                  {hoveredIcon === 'instagram' ? (
                    <Image priority src={instagramHover} alt="Instagram icon" />
                  ) : (
                    <Image priority src={instagram} alt="Instagram icon" />
                  )}
                  Instagram
                </Link>
              </li>
              <li
                onMouseEnter={() => handleLinkMouseEnter('tiktok')}
                onMouseLeave={handleLinkMouseLeave}
              >
                <Link
                  className={`${styles.link} ${roboto.variable} ${styles.linkWithIcon} ${styles.hoverLink}`}
                  href={''}
                >
                  {hoveredIcon === 'tiktok' ? (
                    <Image priority src={tiktokHover} alt="TikTok icon" />
                  ) : (
                    <Image priority src={tiktok} alt="TikTok icon" />
                  )}
                  Tik Tok
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className={`${styles.footerTitle} ${cinzel.variable}`}>Payment system</h3>
            <ul className={styles.paymentList}>
              <li
                onMouseEnter={() => handleLinkMouseEnter('visa')}
                onMouseLeave={handleLinkMouseLeave}
              >
                {hoveredIcon === 'visa' ? (
                  <Image priority src={visaHover} alt="VisaCard icon" />
                ) : (
                  <Image priority src={visa} alt="VisaCard icon" />
                )}
              </li>
              <li
                onMouseEnter={() => handleLinkMouseEnter('master')}
                onMouseLeave={handleLinkMouseLeave}
              >
                {hoveredIcon === 'master' ? (
                  <Image priority src={masterHover} alt="MasterCard icon" />
                ) : (
                  <Image priority src={master} alt="MasterCard icon" />
                )}
              </li>
            </ul>
          </div>
        </div>
        <Link className={styles.logo} href="/">
          <Image src="/Logo.png" alt="Logo GetPromo icon" width={250} height={100} />
        </Link>
        <div className={styles.copyright}>
          <Image width={17} height={20} priority src={autorship} alt="Copyright icon" />
          <p className={`${styles.link} ${roboto.variable} `}>
            <span id="current-year"></span> CollabWave. All rights reserved.
          </p>
        </div>
        <div className={styles.light__spot}></div>
      </Container>
    </footer>
  );
};
