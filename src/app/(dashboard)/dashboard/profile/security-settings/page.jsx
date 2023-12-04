import { BloggerProfileLeftSide } from '../BloggerProfileLeftSide';
import { BrandProfileLeftSide } from '../BrandProfileLeftSIde';
import { SecuritySettings } from './SecuritySettings';

import { user } from '@/mockData/user';

import styles from '../profile.module.css';

const SecuritySettingsPage = () => {
  return user.role === 'blogger' ? (
    <div className={styles.wrap}>
      <BloggerProfileLeftSide user={user} />
      <SecuritySettings user={user} />
    </div>
  ) : (
    <div className={styles.wrap}>
      <BrandProfileLeftSide />
      <SecuritySettings user={user} />
    </div>
  );
};

export default SecuritySettingsPage;
