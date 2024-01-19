'use client';

import { Radio, Space } from 'antd';

import ReactCountryFlag from 'react-country-flag';

import { useTheme } from 'next-themes';

import styles from './languagePicker.module.css';
import { montserrat } from '@/utils/fonts';

export const LanguagePicker = () => {
  const { resolvedTheme } = useTheme();

  return (
    <Radio.Group /* defaultValue={language} */ /* onChange={(e) => setLanguage(e.target.value)} */>
      <Space direction="vertical">
        <Radio value="en">
          <Space
            className={
              resolvedTheme === 'dark'
                ? `${styles.text} ${montserrat.className}`
                : `${styles.textLight} ${montserrat.className}`
            }
            align="center"
          >
            English
            <ReactCountryFlag className={styles.icon} svg countryCode="GB" />
          </Space>
        </Radio>
        <Radio value="ua">
          <Space
            className={
              resolvedTheme === 'dark'
                ? `${styles.text} ${montserrat.className}`
                : `${styles.textLight} ${montserrat.className}`
            }
            align="center"
          >
            Ukrainian
            <ReactCountryFlag className={styles.icon} svg countryCode="UA" />
          </Space>
        </Radio>
      </Space>
    </Radio.Group>
  );
};
