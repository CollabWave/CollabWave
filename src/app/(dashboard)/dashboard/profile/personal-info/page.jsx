import { BloggerProfileLeftSide } from '../BloggerProfileLeftSide';
import { BrandProfileLeftSide } from '../BrandProfileLeftSIde';
import { BloggerPersonalInfo } from './BloggerPersonalInfo';

import styles from '../profile.module.css';

const PersonalInfoPage = () => {
  const user = {
    role: 'blogger',
    firstName: 'Mark',
    lastName: 'Cooper',
    nickName: '@MaCoo',
    area: [
      { id: 1, value: 'fashon' },
      { id: 14, value: 'sports' },
    ],
    gender: 'male',
    language: 'english',
    birthDate: '1995/09/01',
    phone: '+372 55596908',
    email: 'mark.cooper@gmail.com',
    country: 'EE',
    city: 'Tallinn',
    address1: 'Peterburi tee 34',
    address2: '',
    zipCode: '11413',
    facebook: 'https://www.facebook.com/profile.php?id=61550583685200',
    instagram: 'https://www.instagram.com/collab_wave/',
    tiktok: '',
    telegram: '',
    youtube: '',
  };

  return user.role === 'blogger' ? (
    <div className={styles.wrap}>
      <BloggerProfileLeftSide user={user} />
      <BloggerPersonalInfo user={user} />
    </div>
  ) : (
    <BrandProfileLeftSide />
  );
};

export default PersonalInfoPage;
