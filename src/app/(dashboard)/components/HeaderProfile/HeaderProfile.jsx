import { Popover, Avatar, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { useTheme } from 'next-themes';

import { HeaderProfileWindow } from './HeaderProfileWindow';

import { user } from '@/mockData/user';

import styles from './headerProfile.module.css';
import { montserrat } from '@/utils/fonts';
export const HeaderProfile = () => {
  const { resolvedTheme } = useTheme();

  return (
    <Popover
      content={<HeaderProfileWindow />}
      trigger="click"
      color={resolvedTheme === 'dark' ? 'rgb(37, 40, 75)' : '#fff'}
    >
      <Space size={20} className={`${styles.wrap} ${montserrat.className}`}>
        <Avatar
          alt={`${user.firstName} ${user.lastName}`}
          icon={<UserOutlined />}
          shape="circle"
          size={50}
        />
        <p className={styles.text}>{`${user.firstName} ${user.lastName}`}</p>
      </Space>
    </Popover>
  );
};
