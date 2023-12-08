'use client';

import { useEffect } from 'react';

import Image from 'next/image';

import { Row } from 'antd';

import { useTheme } from 'next-themes';

import autorship from '../../../../assets/images/svg/authorship.svg';
import autorshipDark from '../../../../assets/images/svg/authorshipDark.svg';

import styles from './footer.module.css';
import { montserrat } from '@/utils/fonts';

export const Footer = () => {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const year = document.getElementById("year");
    if (year) {
      year.textContent = new Date().getFullYear();
    }
  }, []);

  return (
    <Row className={`${styles.footer} footer`}>
      <div className={styles.copyright}>
        {resolvedTheme === 'dark' ? (
          <Image width={17} height={20} priority src={autorship} alt="Copyright icon" />
        ) : (
          <Image width={17} height={20} priority src={autorshipDark} alt="Copyright icon" />
        )}
        <p className={`${styles.text} ${montserrat.variable} `}>
          <span id="year"></span> CollabWave. All rights reserved.
        </p>
      </div>
    </Row>
  );
};
