import Image from 'next/image';
import Link from 'next/link';
import { Layout } from 'antd';

import { useTheme } from 'next-themes';

import styles from './sideMenu.module.css';

export const SideMenu = () => {
  const { resolvedTheme } = useTheme();

  return (
    <Layout.Sider className={`${styles.sider} sider`} width={360}>
      <Link className="" href="/dashboard">
        <Image src="/Logo.png" alt="Collabwave logo" width={250} height={100} />
      </Link>
    </Layout.Sider>
  );
};
