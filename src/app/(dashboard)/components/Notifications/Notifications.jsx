'use client';

import { useState } from 'react';

import { Popover } from 'antd';
import { BellOutlined } from '@ant-design/icons';

import { useTheme } from 'next-themes';

import { NotificatonsWindow } from './NotificationsWindow';

import styles from './notifications.module.css';

export const Notifications = () => {
  const [isNotificationsOpened, setNotificationsOpened] = useState(false);
  const { resolvedTheme } = useTheme();

  return (
    <Popover
      trigger={'click'}
      content={<NotificatonsWindow />}
      color={resolvedTheme === 'dark' ? 'rgb(37, 40, 75)' : '#fff'}
      onOpenChange={setNotificationsOpened}
    >
      <BellOutlined
        className={isNotificationsOpened ? `${styles.iconOpened}` : 'icon__header'}
        style={{ fontSize: '260%' }}
      />
    </Popover>
  );
};
