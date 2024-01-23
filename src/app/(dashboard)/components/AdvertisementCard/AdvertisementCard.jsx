import Image from 'next/image';
import Link from 'next/link';

import { CreditCardOutlined, TagOutlined } from '@ant-design/icons';

import styles from './advertisementCard.module.css';
import { montserrat } from '@/utils/fonts';

export const AdvertisementCard = ({ advertisement }) => {
  return (
    <Link
      href={`/dashboard/advertisements/${advertisement.id}`}
      className={`${styles.cardWrap} ${montserrat.className}`}
    >
      <Image
        style={advertisement.logo ? { opacity: 1 } : { opacity: 0 }}
        width={40}
        height={40}
        alt="brand logo"
        src={advertisement.logo}
      />
      <div className={styles.rightWrap}>
        <h4 className={styles.title}>{advertisement.brand}</h4>
        <div>
          <div className={styles.featuresWrap} style={{ marginBottom: '15px' }}>
            <TagOutlined />
            <p>{advertisement.category}</p>
          </div>
          <div className={styles.featuresWrap}>
            <CreditCardOutlined />
            <p>{advertisement.paymentType}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};
