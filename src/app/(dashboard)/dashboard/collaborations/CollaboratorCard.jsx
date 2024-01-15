import Image from 'next/image';
import Link from 'next/link';

import { Flex, Space } from 'antd';
import { EnvironmentOutlined } from '@ant-design/icons';

import styles from './collaborations.module.css';
import { montserrat } from '@/utils/fonts';

import tiktok from '../../../../assets/images/svg/tikTokHover.svg';
import instagram from '../../../../assets/images/svg/instagramHover.svg';
import telegram from '../../../../assets/images/svg/telegramHover.svg';
import youtube from '../../../../assets/images/svg/youtubeHover.svg';

export const CollaboratorCard = ({ influencer }) => {
  function formatCompactNumber(number) {
    const formatter = new Intl.NumberFormat('en', { notation: 'compact' });
    return formatter.format(number);
  }
  return (
    <div className={montserrat.className}>
      <Image
        style={{ borderRadius: 0 }}
        width={200}
        height={256}
        alt={`${influencer.nickname} photo`}
        src={influencer.photo}
      />
      <div className={styles.cardBottom}>
        <Flex justify="space-between" align="center" style={{ marginBottom: '6px' }}>
          <p style={{ fontSize: '16px' }}>{influencer.nickname}</p>
          <Link
            className={styles.socialLink}
            target="_blank"
            href={
              influencer.socialLinks.telegram ||
              influencer.socialLinks.instagram ||
              influencer.socialLinks.youtube ||
              influencer.socialLinks.tiktok
            }
          >
            {influencer.socialLinks.telegram ? (
              <Image priority src={telegram} alt="Telegram icon" />
            ) : influencer.socialLinks.instagram ? (
              <Image priority src={instagram} alt="Instagram icon" />
            ) : influencer.socialLinks.youtube ? (
              <Image priority src={youtube} alt="Youtube icon" />
            ) : (
              <Image priority src={tiktok} alt="Tiktok icon" />
            )}
          </Link>
        </Flex>
        <p
          style={{ marginBottom: '6px' }}
          className={`${styles.text} secondary-text`}
        >{`${formatCompactNumber(influencer.followers)} followers`}</p>
        <Space className={`${styles.text} secondary-text`}>
          <EnvironmentOutlined />
          <p>{influencer.location}</p>
        </Space>
      </div>
    </div>
  );
};
