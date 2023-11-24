import Link from 'next/link';
import { Space } from 'antd';

import { usePathname } from 'next/navigation';

import { NotificationOutlined, TeamOutlined, BulbOutlined } from '@ant-design/icons';

import styles from './sideMenu.module.css';
import { montserrat } from '@/utils/fonts';

export const BrandMenu = () => {
  const pathname = usePathname();

  return (
    <ul className={`${styles.list} ${montserrat.className} sider__list`}>
      <li>
        <Link className="" href="/dashboard/influencers">
          <Space
            size={15}
            className={
              pathname.endsWith('influencers')
                ? 'sider__list_item sider__list_item_active'
                : 'sider__list_item'
            }
          >
            <TeamOutlined style={{ fontSize: '150%' }} />
            Influencers for you
          </Space>
        </Link>
      </li>
      <li>
        <Link className="" href="/dashboard/create-advertisement">
          <Space
            size={15}
            className={
              pathname.endsWith('create-advertisement')
                ? 'sider__list_item sider__list_item_active'
                : 'sider__list_item'
            }
          >
            <NotificationOutlined style={{ fontSize: '150%' }} />
            Create advertisement
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
    </ul>
  );
};
