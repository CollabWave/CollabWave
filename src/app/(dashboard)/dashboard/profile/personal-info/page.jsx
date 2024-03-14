import { ProfileLeftSide } from '../ProfileLeftSide';
import { BloggerPersonalInfo } from './BloggerPersonalInfo';
import { BrandPersonalInfo } from './BrandPersonalInfo';

import { user } from '@/mockData/user';

import styles from '../profile.module.css';

const PersonalInfoPage = () => {
  return (
    <>
      <div className={styles.wrapMobile}>
        {user.role === 'blogger' ? (
          <BloggerPersonalInfo user={user} />
        ) : (
          <BrandPersonalInfo user={user} />
        )}
      </div>
      <div className={styles.wrapDesktop}>
        <ProfileLeftSide />
        {user.role === 'blogger' ? (
          <BloggerPersonalInfo user={user} />
        ) : (
          <BrandPersonalInfo user={user} />
        )}
      </div>
    </>
  );
};

export default PersonalInfoPage;
