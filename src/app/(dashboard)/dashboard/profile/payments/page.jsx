import { BloggerProfileLeftSide } from '../BloggerProfileLeftSide';
import { BrandProfileLeftSide } from '../BrandProfileLeftSIde';
import { Payments } from './Payments';

import { user } from '@/mockData/user';

import styles from '../profile.module.css';

const PaymentsPage = () => {
  return user.role === 'blogger' ? (
    <div className={styles.wrap}>
      <BloggerProfileLeftSide user={user} />
      <Payments />
    </div>
  ) : (
    <div className={styles.wrap}>
      <BrandProfileLeftSide />
      <Payments />
    </div>
  );
};

export default PaymentsPage;
