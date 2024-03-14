import Image from 'next/image';
import Link from 'next/link';

import { Menu } from 'antd';

import { bloggerMenu, brandMenu } from './menuItems';

import { user } from '@/mockData/user';

import { montserrat } from '@/utils/fonts';

export const MobileMenu = ({ collapsed, setCollapsed }) => {

  return (
    <>
      <Link className="" href="/dashboard">
        <Image src="/Logo.png" alt="Collabwave logo" width={200} height={80} />
      </Link>
      <Menu
        className={montserrat.className}
        mode="inline"
        items={user.role === 'blogger' ? bloggerMenu : brandMenu}
        onClick={() => (collapsed ? setCollapsed(!collapsed) : null)}
      />
    </>
  );
};
