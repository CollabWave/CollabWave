import Image from 'next/image';

import { Flex } from 'antd';

import styles from './influencerInfoModal.module.css';
import { montserrat } from '@/utils/fonts';

export const InfluencerInfoModal = ({ influencer }) => {
  return (
    <div className={`${styles.container} ${montserrat.className}`}>
      <Image src={influencer.photo} width={150} height={191} alt={`${influencer.nickname} photo`} />
      <h3 className={`${styles.heading} text`}>{influencer.nickname}</h3>
      <Flex gap={5}>
        <p className="secondary-text">Location:</p>
        <p className="text">{influencer.location}</p>
      </Flex>
      <Flex gap={5}>
        <p className="secondary-text">Followers:</p>
        <p className="text">{influencer.followers}</p>
      </Flex>
    </div>
  );
};
