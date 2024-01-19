import Link from 'next/link';

import {
  DashboardOutlined,
  FileSearchOutlined,
  BulbOutlined,
  UsergroupAddOutlined,
  LineChartOutlined,
  NotificationOutlined,
  TeamOutlined,
} from '@ant-design/icons';

const getItem = (label, key, icon, children, type) => {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
};

export const bloggerMenu = [
  getItem(
    'Dashboard',
    'sub1',
    <Link className="" href="/dashboard">
      <DashboardOutlined style={{ fontSize: '210%' }} />
    </Link>
  ),
  getItem(
    'Advertisement offers',
    'sub2',
    <Link className="" href="/dashboard/advertisements">
      <FileSearchOutlined style={{ fontSize: '210%' }} />
    </Link>
  ),
  getItem(
    'Projects',
    'sub3',
    <Link className="" href="/dashboard/projects">
      <BulbOutlined style={{ fontSize: '210%' }} />
    </Link>
  ),
  getItem(
    'Collaborations',
    'sub4',
    <Link className="" href="/dashboard/collaborations">
      <UsergroupAddOutlined style={{ fontSize: '210%' }} />
    </Link>
  ),
  getItem(
    'Statistics',
    'sub5',
    <Link className="" href="/dashboard/statistics">
      <LineChartOutlined style={{ fontSize: '210%' }} />
    </Link>
  ),
];

export const brandMenu = [
  getItem(
    'Dashboard',
    'sub1',
    <Link className="" href="/dashboard">
      <DashboardOutlined style={{ fontSize: '210%' }} />
    </Link>
  ),
  getItem(
    'Influencers for you',
    'sub2',
    <Link className="" href="/dashboard/influencers">
      <TeamOutlined style={{ fontSize: '210%' }} />
    </Link>
  ),
  getItem(
    'Create advertisement',
    'sub3',
    <Link className="" href="/dashboard/create-advertisement">
      <NotificationOutlined style={{ fontSize: '210%' }} />
    </Link>
  ),
  getItem(
    'Projects',
    'sub4',
    <Link className="" href="/dashboard/projects">
      <BulbOutlined style={{ fontSize: '210%' }} />
    </Link>
  ),
  getItem(
    'Statistics',
    'sub5',
    <Link className="" href="/dashboard/statistics">
      <LineChartOutlined style={{ fontSize: '210%' }} />
    </Link>
  ),
];
