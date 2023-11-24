'use client';

import { useState } from 'react';

import { Popover } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

import { useTheme } from 'next-themes';

import { SettingsWindow } from './SettingsWindow';

import styles from './settings.module.css';

export const Settings = () => {
  const [isSettingsOpened, setSettingsOpened] = useState(false);
  const { resolvedTheme } = useTheme();

  return (
    <Popover
      trigger={'click'}
      content={<SettingsWindow />}
      color={resolvedTheme === 'dark' ? 'rgb(37, 40, 75)' : '#fff'}
      onOpenChange={setSettingsOpened}
    >
      <SettingOutlined
        className={isSettingsOpened ? `${styles.iconOpened}` : 'icon__header'}
        style={{ fontSize: '260%' }}
      />
    </Popover>
  );
};
