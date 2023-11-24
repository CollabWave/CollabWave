'use client';
import Link from 'next/link';

import { useTheme } from 'next-themes';

import styles from './headerProfile.module.css';
import { montserrat } from '@/utils/fonts';

export const HeaderProfileWindow = () => {
  const { resolvedTheme } = useTheme();
  return (
    <div className={resolvedTheme === 'dark' ? `${styles.window}` : `${styles.windowLight}`}>
      <ul className={resolvedTheme === 'dark' ? `${styles.profileList} ${montserrat.className} ${styles.profileListDark}` : `${styles.profileList} ${montserrat.className} ${styles.profileListLight}`}>
        <li>
          <Link href={""}>Profile</Link>
        </li>
        <li>
          <Link href={""}>Logout</Link>
        </li>
      </ul>
    </div>
  );
};
