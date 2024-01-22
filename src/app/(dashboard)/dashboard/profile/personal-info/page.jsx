import { BloggerProfileLeftSide } from '../BloggerProfileLeftSide';
import { BrandProfileLeftSide } from '../BrandProfileLeftSIde';
import { BloggerPersonalInfo } from './BloggerPersonalInfo';

import { user } from '@/mockData/user';

import styles from '../profile.module.css';

const PersonalInfoPage = () => {
  return user.role === 'blogger' ? (
    <>
      <div className={styles.wrapMobile}>
        <BloggerPersonalInfo user={user} />
      </div>
      <div className={styles.wrapDesktop}>
        <BloggerProfileLeftSide user={user} />
        <BloggerPersonalInfo user={user} />
      </div>
    </>
  ) : (
    <BrandProfileLeftSide />
  );
};

export default PersonalInfoPage;
