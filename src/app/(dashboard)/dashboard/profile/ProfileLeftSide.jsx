'use client';

import Link from 'next/link';

import { useState } from 'react';

import { Col, Avatar, Space, Upload } from 'antd';
import {
  UserOutlined,
  SecurityScanOutlined,
  DollarOutlined,
  BellOutlined,
  EditOutlined,
} from '@ant-design/icons';

import { usePathname } from 'next/navigation';

import { user } from '@/mockData/user';
import { makeUserAreaString } from '@/utils/utils';

import { montserrat } from '@/utils/fonts';
import styles from './profile.module.css';

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = file => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};

export const ProfileLeftSide = () => {
  const pathname = usePathname();
  const [currentUser, setCurrentUser] = useState(user);

  const handleChange = info => {
    if (info.file.status === 'done') {
      console.log(currentUser);
      getBase64(info.file.originFileObj, url => {
        setCurrentUser({ ...currentUser, avatar: url });
      });
    }
  };

  return (
    <Col className={`${styles.leftSide} profile-card`}>
      <div className={styles.tabletWrap}>
        <div className={`${styles.avatarWraper} ${styles.avatarMobile}`}>
          <Upload
            name="avatar"
            className={`${styles.upload} text`}
            showUploadList={false}
            action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            <EditOutlined />
          </Upload>
          {currentUser.avatar ? (
            <img
              height={'80px'}
              width={'80px'}
              style={{ borderRadius: '50%' }}
              src={currentUser.avatar}
              alt="Profile picture"
            />
          ) : (
            <Avatar icon={<UserOutlined />} shape="circle" alt="Profile picture" size={80} />
          )}
        </div>
        <div className={`${styles.avatarWraper} ${styles.avatarDesktop}`}>
          <Upload
            name="avatar"
            className={`${styles.upload} text`}
            showUploadList={false}
            action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            <EditOutlined />
          </Upload>
          {currentUser.avatar ? (
            <img
              height={'100px'}
              width={'100px'}
              style={{ borderRadius: '50%' }}
              src={currentUser.avatar}
              alt="Profile picture"
            />
          ) : (
            <Avatar icon={<UserOutlined />} shape="circle" alt="Profile picture" size={100} />
          )}
        </div>
        <h2
          className={`${styles.text} ${styles.name} ${montserrat.variable}`}
        >{`${user.firstName} ${user.lastName}`}</h2>
        <h3 className={`${styles.text} ${styles.nickName} ${montserrat.variable}`}>
          {user.role === 'blogger' ? user.nickName : user.brand}
        </h3>
        <p className={`${styles.text} ${styles.area} ${montserrat.variable}`}>
          {user.role === 'blogger' ? makeUserAreaString(user.area) : user.position}
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
