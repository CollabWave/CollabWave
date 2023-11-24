'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

import { Button } from 'antd';

import { MoonIcon } from '../Icons/MoonIcon';
import { SunIcon } from '../Icons/SunIcon';
import styles from './darkSwitch.module.css';

export const DarkLightSwitch = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={
        resolvedTheme === 'dark'
          ? `${styles.switcher} ${styles.switcher__dark}`
          : `${styles.switcher} ${styles.switcher__light}`
      }
    >
      <Button
        className={
          resolvedTheme === 'dark'
            ? `${styles.button} ${styles.button__dark_active}`
            : styles.button
        }
        size="medium"
        type="link"
        icon={<MoonIcon />}
        onClick={() => setTheme('dark')}
      />
      <Button
        className={
          resolvedTheme === 'light'
            ? `${styles.button} ${styles.button__light_active}`
            : styles.button
        }
        size="medium"
        type="link"
        icon={<SunIcon />}
        onClick={() => setTheme('light')}
      />
    </div>
  );
};
