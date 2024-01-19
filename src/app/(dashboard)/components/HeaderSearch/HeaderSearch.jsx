'use client';

import { useState } from 'react';

import { Modal } from 'antd';

import { SearchOutlined } from '@ant-design/icons';
import { user } from '@/mockData/user';

import styles from './headerSearch.module.css';
import { montserrat } from '@/utils/fonts';

export const HeaderSearch = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className={styles.wraper}>
        <input
          className={`${styles.input} ${montserrat.className} header__search`}
          placeholder={user.role === 'brand' ? 'Find influencer' : 'Find advertisement'}
        />
        <SearchOutlined className={`${styles.icon} ${styles.desktopIcon} icon__search`} />
      </div>
      <SearchOutlined
        className={`${styles.mobileIcon} icon__search`}
        onClick={() => setIsModalOpen(true)}
      />
      <Modal
        open={isModalOpen}
        closable={false}
        footer={null}
        onCancel={() => setIsModalOpen(false)}
        destroyOnClose
      >
        <SearchOutlined className={`${styles.icon} ${styles.modalIcon} icon__search`} />
        <input
          className={`${styles.mobileInput} ${montserrat.className} header__searchMobile`}
          placeholder={user.role === 'brand' ? 'Find influencer' : 'Find advertisement'}
        />
      </Modal>
    </>
  );
};
