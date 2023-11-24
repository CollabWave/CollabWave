import { Popover, Avatar, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import { useTheme } from 'next-themes';

import { HeaderProfileWindow } from './HeaderProfileWindow';

import styles from './headerProfile.module.css';
import { montserrat } from '@/utils/fonts';
export const HeaderProfile = () => {
  const { resolvedTheme } = useTheme();

  const user = {
    firstName: 'Mark',
    lastName: 'Cooper',
  };
  return (
    <Popover
      content={<HeaderProfileWindow />}
      trigger="click"
      color={resolvedTheme === 'dark' ? 'rgb(37, 40, 75)' : '#fff'}
    >
      <Space className={`${styles.wrap} ${montserrat.className}`}>
        <Avatar
          alt={`${user.firstName} ${user.lastName}`}
          icon={<UserOutlined />}
          shape="circle"
          size={50}
        />
        {`${user.firstName} ${user.lastName}`}
      </Space>
    </Popover>
  );
};
