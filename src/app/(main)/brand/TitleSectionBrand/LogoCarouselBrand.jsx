'use client';

import Image from 'next/image';

import facebook from '../../../../assets/images/svg/fbBrandCarousel.svg';
import instagram from '../../../../assets/images/svg/instaBrandCarousel.svg';
import tikTok from '../../../../assets/images/svg/tikTokBrandCarousel.svg';
import youtube from '../../../../assets/images/svg/youtubeBrandCarousel.svg';

import styles from '../../blogger/blogger.module.css';
import { brand_logo_carousel } from '../brand.module.css';

export const LogoCarouselBrand = () => {
  return (
    <div>
      <ul className={brand_logo_carousel}>
        <li className={styles.blogger_slider_icon}>
          <Image src={facebook} alt="facebook icon" />
        </li>
        <li className={styles.blogger_slider_icon}>
          <Image src={instagram} alt="Instagram icon" />
        </li>
        <li className={styles.blogger_slider_icon}>
          <Image src={tikTok} alt="Tik-tok icon" />
        </li>
        <li className={styles.blogger_slider_icon}>
          <Image src={youtube} alt="Youtube icon" />
        </li>
      </ul>
    </div>
  );
};
