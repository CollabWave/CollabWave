import Image from 'next/image';
import Link from 'next/link';
import { Layout } from 'antd';

import { useTheme } from 'next-themes';

import { BrandMenu } from './BrandMenu';
import { BloggerMenu } from './BloggerMenu';

import styles from './sideMenu.module.css';

export const SideMenu = () => {
  const { resolvedTheme } = useTheme();

  const user = {
    role: 'blogger',
  };

  return (
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
      className={`${styles.sider} sider`}
      width={360}
    >
      <Link className="" href="/dashboard">
        <Image src="/Logo.png" alt="Collabwave logo" width={250} height={100} />
      </Link>
      {user.role === 'brand' && <BrandMenu />}
      {user.role === 'blogger' && <BloggerMenu />}
    </Layout.Sider>
  );
};
