import { ProfileLeftSide } from '../ProfileLeftSide';
import { BrandProfileLeftSide } from '../BrandProfileLeftSIde';
import { Payments } from './Payments';

import { user } from '@/mockData/user';
import styles from '../profile.module.css';

const PaymentsPage = () => {
  return (
    <>
      <div className={styles.wrapMobile}>
      <Payments />
      </div>
      <div className={styles.wrapDesktop}>
        <ProfileLeftSide />
        <Payments />
      </div>
    </>
  );
};

export default PaymentsPage;
