import Link from 'next/link';
import { Space } from 'antd';

import { usePathname } from 'next/navigation';

import { UsergroupAddOutlined, FileSearchOutlined, BulbOutlined } from '@ant-design/icons';

import styles from './sideMenu.module.css';
import { montserrat } from '@/utils/fonts';

export const BloggerMenu = () => {
  const pathname = usePathname();

  return (
    <ul className={`${styles.list} ${montserrat.className} sider__list`}>
      <li>
        <Link className="" href="/dashboard/advertisements">
          <Space
            size={15}
            className={
              pathname.endsWith('advertisements')
                ? 'sider__list_item sider__list_item_active'
                : 'sider__list_item'
            }
          >
            <FileSearchOutlined style={{ fontSize: '150%' }} />
            Advertisement offers
          </Space>
        </Link>
      </li>
      <li>
        <Link className="" href="/dashboard/projects">
          <Space
            size={15}
            className={
              pathname.endsWith('projects')
                ? 'sider__list_item sider__list_item_active'
                : 'sider__list_item'
            }
          >
            <BulbOutlined style={{ fontSize: '150%' }} />
            Projects
          </Space>
        </Link>
      </li>
      <li>
        <Link className="" href="/dashboard/collaborations">
          <Space
            size={15}
            className={
              pathname.endsWith('collaborations')
                ? 'sider__list_item sider__list_item_active'
                : 'sider__list_item'
            }
          >
            <UsergroupAddOutlined style={{ fontSize: '150%' }} />
            Collaborations
          </Space>
        </Link>
      </li>
    </ul>
  );
};
