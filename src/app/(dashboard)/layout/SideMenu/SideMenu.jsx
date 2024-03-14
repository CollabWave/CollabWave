'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useState } from 'react';

import { Flex, Layout, Menu } from 'antd';

import { RightCircleOutlined, LeftCircleOutlined } from '@ant-design/icons';

import { bloggerMenu, brandMenu } from './menuItems';

import { BrandDesktopMenu } from './BrandDesktopMenu';
import { BloggerDesktopMenu } from './BloggerDesktopMenu';

import { user } from '@/mockData/user';

import styles from './sideMenu.module.css';
import { montserrat } from '@/utils/fonts';

export const SideMenu = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <Layout.Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
        trigger={null}
        className={`${styles.sider} ${styles.siderXxl} sider`}
        width={280}
      >
        <Link className="" href="/dashboard">
          <Image src="/Logo.png" alt="Collabwave logo" width={250} height={100} />
        </Link>
        {user.role === 'brand' && <BrandDesktopMenu />}
        {user.role === 'blogger' && <BloggerDesktopMenu />}
      </Layout.Sider>
      <Layout.Sider
        trigger={null}
        className={`${styles.sider} ${styles.siderM} sider siderM`}
        collapsible
        collapsed={collapsed}
        width={300}
      >
        <Link className="" href="/dashboard">
          <Flex>
            <Image src="/logo-short.png" alt="Collabwave logo" width={78} height={86} />
            {collapsed ? null : (
              <Image src="/logo-right.png" alt="Collabwave logo" width={183} height={95} />
            )}
          </Flex>
        </Link>
        {collapsed ? (
          <RightCircleOutlined
            className={`${styles.arrow} ${styles.arrowRight} sider`}
            onClick={toggleCollapsed}
          />
        ) : (
          <LeftCircleOutlined
            className={`${styles.arrow} ${styles.arrowLeft} sider`}
            onClick={toggleCollapsed}
          />
        )}
        <Menu
          className={montserrat.className}
          style={{ marginTop: '40px' }}
          mode="inline"
          items={user.role === 'blogger' ? bloggerMenu : brandMenu}
          onClick={() => (collapsed ? null : toggleCollapsed())}
        />
      </Layout.Sider>
    </>
  );
};
