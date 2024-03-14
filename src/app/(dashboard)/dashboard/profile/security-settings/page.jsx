import { ProfileLeftSide } from '../ProfileLeftSide';
import { SecuritySettings } from './SecuritySettings';

import { user } from '@/mockData/user';

import styles from '../profile.module.css';

const SecuritySettingsPage = () => {
  return (
    <>
      <div className={styles.wrapMobile}>
        <SecuritySettings user={user} />
      </div>
      <div className={styles.wrapDesktop}>
        <ProfileLeftSide />
        <SecuritySettings user={user} />
      </div>
    </>
  );
};

export default SecuritySettingsPage;
