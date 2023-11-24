'use client';

import { useTheme } from 'next-themes';

import styles from './notifications.module.css';
import { montserrat } from '@/utils/fonts';

export const NotificatonsWindow = () => {
  const { resolvedTheme } = useTheme();

  return (
    <div className={resolvedTheme === 'dark' ? `${styles.window}` : `${styles.windowLight}`}>
      <ul className={`${styles.notificationsList} ${montserrat.className}`}>
        <li className={styles.notification}>Notification 1</li>
        <li className={styles.notification}>Notification 2</li>
      </ul>
      <button
        className={
          resolvedTheme === 'dark'
            ? `${styles.buttonRead} ${montserrat.className} ${styles.buttonReadDark}`
            : `${styles.buttonRead} ${styles.buttonReadLight} ${montserrat.className}`
        }
      >
        Mark all as read
      </button>
      <button
        className={
          resolvedTheme === 'dark'
            ? `${styles.buttonView} ${styles.buttonViewDark} ${montserrat.className}`
            : `${styles.buttonView} ${styles.buttonViewLight} ${montserrat.className}`
        }
      >
        View all
      </button>
    </div>
  );
};
