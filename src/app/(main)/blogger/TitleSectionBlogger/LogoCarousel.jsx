'use client';

import Image from 'next/image';

import styles from '../blogger.module.css';

import adidas from '../../../../assets/images/svg/adidas.svg';
import adidasHover from '../../../../assets/images/svg/adidasHover.svg';
import burgerKing from '../../../../assets/images/svg/burgerKing.svg';
import burgerKingHover from '../../../../assets/images/svg/burgerKingHover.svg';
import nike from '../../../../assets/images/svg/nike.svg';
import nikeHover from '../../../../assets/images/svg/nikeHover.svg';
import apple from '../../../../assets/images/svg/apple.svg';
import appleHover from '../../../../assets/images/svg/appleHover.svg';
import cocaCola from '../../../../assets/images/svg/cocaCola.svg';
import cocaColaHover from '../../../../assets/images/svg/cocaColaHover.svg';
import mcDonalds from '../../../../assets/images/svg/mcDonalds.svg';
import mcDonaldsHover from '../../../../assets/images/svg/mcDonaldsHover.svg';
import puma from '../../../../assets/images/svg/puma.svg';
import pumaHover from '../../../../assets/images/svg/pumaHover.svg';
import { useState } from 'react';

export const LogoCarousel = () => {
  const [hoveredBloggerIcon, setHoveredBloggerIcon] = useState('');

  const handleLinkMouseEnter = iconName => {
    setHoveredBloggerIcon(iconName);
  };

  const handleLinkMouseLeave = () => {
    setHoveredBloggerIcon('');
  };

  return (
    <div>
      <ul className={styles.logo_carousel}>
        <li
          className={styles.blogger_slider_icon}
          onMouseEnter={() => handleLinkMouseEnter('adidas')}
          onMouseLeave={handleLinkMouseLeave}
        >
          {hoveredBloggerIcon === 'adidas' ? (
            <Image priority src={adidasHover} alt="Adidas icon" />
          ) : (
            <Image priority src={adidas} alt="Adidas icon" />
          )}
        </li>
        <li
          className={styles.blogger_slider_icon}
          onMouseEnter={() => handleLinkMouseEnter('burger')}
          onMouseLeave={handleLinkMouseLeave}
        >
          {hoveredBloggerIcon === 'burger' ? (
            <Image priority src={burgerKingHover} alt="Burger King icon" />
          ) : (
            <Image priority src={burgerKing} alt="Burger King icon" />
          )}
        </li>
        <li
          className={styles.blogger_slider_icon}
          onMouseEnter={() => handleLinkMouseEnter('nike')}
          onMouseLeave={handleLinkMouseLeave}
        >
          {hoveredBloggerIcon === 'nike' ? (
            <Image priority src={nikeHover} alt="Nike icon" />
          ) : (
            <Image priority src={nike} alt="Nike icon" />
          )}
        </li>
        <li
          className={styles.blogger_slider_icon}
          onMouseEnter={() => handleLinkMouseEnter('apple')}
          onMouseLeave={handleLinkMouseLeave}
        >
          {hoveredBloggerIcon === 'apple' ? (
            <Image priority src={appleHover} alt="Apple icon" />
          ) : (
            <Image priority src={apple} alt="Apple icon" />
          )}
        </li>
        <li
          className={styles.blogger_slider_icon}
          onMouseEnter={() => handleLinkMouseEnter('cola')}
          onMouseLeave={handleLinkMouseLeave}
        >
          {hoveredBloggerIcon === 'cola' ? (
            <Image priority src={cocaColaHover} alt="Coca-cola icon" />
          ) : (
            <Image priority src={cocaCola} alt="Coca-cola icon" />
          )}
        </li>
        <li
          className={styles.blogger_slider_icon}
          onMouseEnter={() => handleLinkMouseEnter('mcdonalds')}
          onMouseLeave={handleLinkMouseLeave}
        >
          {hoveredBloggerIcon === 'mcdonalds' ? (
            <Image priority src={mcDonaldsHover} alt="McDonald's icon" />
          ) : (
            <Image priority src={mcDonalds} alt="McDonald's icon" />
          )}
        </li>
        <li
          className={styles.blogger_slider_icon}
          onMouseEnter={() => handleLinkMouseEnter('puma')}
          onMouseLeave={handleLinkMouseLeave}
        >
          {hoveredBloggerIcon === 'puma' ? (
            <Image priority src={pumaHover} alt="Puma icon" />
          ) : (
            <Image priority src={puma} alt="Puma icon" />
          )}
        </li>
      </ul>
    </div>
  );
};
