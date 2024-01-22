'use client';

import Link from 'next/link';

import { Col, Avatar, Space } from 'antd';
import {
  UserOutlined,
  SecurityScanOutlined,
  DollarOutlined,
  BellOutlined,
} from '@ant-design/icons';

import { usePathname } from 'next/navigation';

import { makeUserAreaString } from '@/utils/utils';

import { montserrat } from '@/utils/fonts';
import styles from './profile.module.css';

export const BloggerProfileLeftSide = ({ user }) => {
  const pathname = usePathname();
  return (
    <Col className={`${styles.leftSide} profile-card`}>
      <div className={styles.tabletWrap}>
        <div className={`${styles.avatarWraper} ${styles.avatarMobile}`}>
          <Avatar icon={<UserOutlined />} shape="circle" alt="Profile picture" size={80} />
        </div>
        <div className={`${styles.avatarWraper} ${styles.avatarDesktop}`}>
          <Avatar icon={<UserOutlined />} shape="circle" alt="Profile picture" size={100} />
        </div>
        <h2
          className={`${styles.text} ${styles.name} ${montserrat.variable}`}
        >{`${user.firstName} ${user.lastName}`}</h2>
        <h3 className={`${styles.text} ${styles.nickName} ${montserrat.variable}`}>
          {user.nickName}
        </h3>
        <p className={`${styles.text} ${styles.area} ${montserrat.variable}`}>
          {makeUserAreaString(user.area)}
        </p>
      </div>
      <ul className={styles.nav}>
        <li
          className={`${styles.navItem} ${
            pathname.endsWith('personal-info') ? 'profile-nav-item_active' : null
          } profile-nav-item`}
        >
          <Link className="profile-nav-link" href={'/dashboard/profile/personal-info'}>
            <Space size={15}>
              <UserOutlined
                className={`${styles.icon} icon-profile-nav`}
                style={{ color: '#339cfd' }}
              />
              Personal Info
            </Space>
          </Link>
        </li>
        <li
          className={`${styles.navItem} ${
            pathname.endsWith('security-settings') ? 'profile-nav-item_active' : null
          } profile-nav-item`}
        >
          <Link className="profile-nav-link" href={'/dashboard/profile/security-settings'}>
            <Space>
              <SecurityScanOutlined
                className={`${styles.icon} icon-profile-nav`}
                style={{ color: '#57D682' }}
              />
              Security Settings
            </Space>
          </Link>
        </li>
        <li
          className={`${styles.navItem} ${
            pathname.endsWith('notifications') ? 'profile-nav-item_active' : null
          } profile-nav-item`}
        >
          <Link className="profile-nav-link" href={'/dashboard/profile/notifications'}>
            <Space>
              <BellOutlined
                className={`${styles.icon} icon-profile-nav`}
                style={{ color: '#FF5252' }}
              />
              Notifications
            </Space>
          </Link>
        </li>
        <li
          className={`${styles.navItem} ${
            pathname.endsWith('payments') ? 'profile-nav-item_active' : null
          } profile-nav-item`}
        >
          <Link className="profile-nav-link" href={'/dashboard/profile/payments'}>
            <Space>
              <DollarOutlined
                className={`${styles.icon} icon-profile-nav`}
                style={{ color: '#FFB765' }}
              />
              Payments
            </Space>
          </Link>
        </li>
      </ul>
    </Col>
  );
};
