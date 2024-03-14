import { ProfileLeftSide } from '../ProfileLeftSide';
import { BloggerNotificationSettings } from './BloggerNotificationsSettings';

import styles from '../profile.module.css';

const NotificationsPage = () => {
  return (
    <>
      <div className={styles.wrapMobile}>
        <BloggerNotificationSettings />
      </div>
      <div className={styles.wrapDesktop}>
        <ProfileLeftSide />
        <BloggerNotificationSettings />
      </div>
    </>
  );
};

export default NotificationsPage;
