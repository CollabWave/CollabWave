'use client';
import Link from 'next/link';

import { Modal } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';

import { useTheme } from 'next-themes';

import styles from './headerProfile.module.css';
import { montserrat } from '@/utils/fonts';

export const HeaderProfileWindow = () => {
  const { resolvedTheme } = useTheme();

  const { confirm } = Modal;

  const showConfirmMobile = () => {
    confirm({
      title: (
        <span className={resolvedTheme === 'light' ? styles.modalTitle : styles.modalTitleDark}>
          Are you shure you want to log out? 😟
        </span>
      ),
      icon: <ExclamationCircleFilled style={{ fontSize: '200%' }} />,
      className: 'confirm-logout',
      width: 320,
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };
  const showConfirmDesktop = () => {
    confirm({
      title: (
        <span className={resolvedTheme === 'light' ? styles.modalTitle : styles.modalTitleDark}>
          Are you shure you want to log out? 😟
        </span>
      ),
      icon: <ExclamationCircleFilled style={{ fontSize: '200%' }} />,
      className: 'confirm-logout',
      width: 500,
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };

  return (
    <div className={resolvedTheme === 'dark' ? `${styles.window}` : `${styles.windowLight}`}>
      <ul
        className={
          resolvedTheme === 'dark'
            ? `${styles.profileList} ${montserrat.className} ${styles.profileListDark}`
            : `${styles.profileList} ${montserrat.className} ${styles.profileListLight}`
        }
      >
        <li>
          <Link href={'/dashboard/profile/personal-info'}>Profile</Link>
        </li>
        <li>
          <Link className={styles.confirmDesktop} href={''} onClick={showConfirmDesktop}>
            Logout
          </Link>
          <Link className={styles.confirmMobile} href={''} onClick={showConfirmMobile}>
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};
