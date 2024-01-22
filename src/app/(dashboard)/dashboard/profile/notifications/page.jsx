import { BloggerProfileLeftSide } from '../BloggerProfileLeftSide';
import { BrandProfileLeftSide } from '../BrandProfileLeftSIde';
import { BloggerNotificationSettings } from './BloggerNotificationsSettings';

import { user } from '@/mockData/user';

import styles from '../profile.module.css';

const NotificationsPage = () => {
  return user.role === 'blogger' ? (
    <>
      <div className={styles.wrapMobile}>
        <BloggerNotificationSettings />
      </div>
      <div className={styles.wrapDesktop}>
        <BloggerProfileLeftSide user={user} />
        <BloggerNotificationSettings />
      </div>
    </>
  ) : (
    <div className={styles.wrap}>
      <BrandProfileLeftSide />
    </div>
  );
};

export default NotificationsPage;
