'use client';
import { useState } from 'react';
import Image from 'next/image';

import facebook from '../../../../assets/images/svg/fbBrandCarousel.svg';
import facebookHover from '../../../../assets/images/svg/fbBrandCarouselHover.svg';
import instagram from '../../../../assets/images/svg/instaBrandCarousel.svg';
import instagramHover from '../../../../assets/images/svg/instagramBrandCarouselHover.svg';
import tikTok from '../../../../assets/images/svg/tikTokBrandCarousel.svg';
import tikTokHover from '../../../../assets/images/svg/tikTokBrandCarouselHover.svg';
import youtube from '../../../../assets/images/svg/youtubeBrandCarousel.svg';
import youtubeHover from '../../../../assets/images/svg/youtubeBrandCarouselHover.svg';

import styles from '../../blogger/blogger.module.css';
import { brand_logo_carousel } from '../brand.module.css';

export const LogoCarouselBrand = () => {
  const [hoveredBrandIcon, setHoveredBrandIcon] = useState('');

  const handleLinkMouseEnter = iconName => {
    setHoveredBrandIcon(iconName);
  };
  const handleLinkMouseLeave = () => {
    setHoveredBrandIcon('');
  };

  return (
    <div>
      <ul className={brand_logo_carousel}>
        <li
          className={styles.blogger_slider_icon}
          onMouseEnter={() => handleLinkMouseEnter('facebook')}
          onMouseLeave={handleLinkMouseLeave}
        >
          {hoveredBrandIcon === 'facebook' ? (
            <Image priority src={facebookHover} alt="Facebook icon" />
          ) : (
            <Image priority src={facebook} alt="facebook icon" />
          )}
        </li>
        <li
          className={styles.blogger_slider_icon}
          onMouseEnter={() => handleLinkMouseEnter('instagram')}
          onMouseLeave={handleLinkMouseLeave}
        >
          {hoveredBrandIcon === 'instagram' ? (
            <Image priority src={instagramHover} alt="Instagram icon" />
          ) : (
            <Image priority src={instagram} alt="Instagram icon" />
          )}
        </li>
        <li
          className={styles.blogger_slider_icon}
          onMouseEnter={() => handleLinkMouseEnter('tiktok')}
          onMouseLeave={handleLinkMouseLeave}
        >
          {hoveredBrandIcon === 'tiktok' ? (
            <Image priority src={tikTokHover} alt="Tik-tok icon" />
          ) : (
            <Image priority src={tikTok} alt="Tik-tok icon" />
          )}
        </li>
        <li
          className={styles.blogger_slider_icon}
          onMouseEnter={() => handleLinkMouseEnter('youtube')}
          onMouseLeave={handleLinkMouseLeave}
        >
          {hoveredBrandIcon === 'youtube' ? (
            <Image priority src={youtubeHover} alt="Youtube icon" />
          ) : (
            <Image priority src={youtube} alt="Youtube icon" />
          )}
        </li>
      </ul>
    </div>
  );
};
