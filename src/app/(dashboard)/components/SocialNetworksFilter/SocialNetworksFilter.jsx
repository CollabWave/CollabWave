import Image from 'next/image';

import styles from './socialNetworkFilter.module.css';

import tiktok from '../../../../assets/images/svg/tikTokHover.svg';
import instagram from '../../../../assets/images/svg/instagramHover.svg';
import telegram from '../../../../assets/images/svg/telegramHover.svg';
import youtube from '../../../../assets/images/svg/youtubeHover.svg';

export const SocialNetworksFilter = ({ filters, setFilters }) => {
  return (
    <div className={styles.iconsContainer}>
      <Image
        className={styles.icon}
        priority
        src={telegram}
        alt="Telegram icon"
        onClick={() => setFilters([...filters, 'telegram'])}
      />
      <Image
        className={styles.icon}
        priority
        src={instagram}
        alt="Instagram icon"
        onClick={() => setFilters([...filters, 'instagram'])}
      />
      <Image
        className={styles.icon}
        priority
        src={youtube}
        alt="Youtube icon"
        onClick={() => setFilters([...filters, 'youtube'])}
      />
      <Image
        className={styles.icon}
        priority
        src={tiktok}
        alt="Tiktok icon"
        onClick={() => setFilters([...filters, 'tiktok'])}
      />
    </div>
  );
};
