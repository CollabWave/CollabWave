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
  const [hoveredBrandIcon, setHoveredBrandIcon] = useState('');

  const handleLinkMouseEnter = iconName => {
    setHoveredBrandIcon(iconName);
  };

  const handleLinkMouseLeave = () => {
    setHoveredBrandIcon('');
  };

  return (
    <div>
      <ul className={styles.logo_carousel}>
        <li
          className={styles.blogger_slider_icon}
          onMouseEnter={() => handleLinkMouseEnter('adidas')}
          onMouseLeave={handleLinkMouseLeave}
        >
          {hoveredBrandIcon === 'adidas' ? (
            <Image src={adidasHover} alt="Adidas icon" />
          ) : (
            <Image src={adidas} alt="Adidas icon" />
          )}
        </li>
        <li
          className={styles.blogger_slider_icon}
          onMouseEnter={() => handleLinkMouseEnter('burger')}
          onMouseLeave={handleLinkMouseLeave}
        >
          {hoveredBrandIcon === 'burger' ? (
            <Image src={burgerKingHover} alt="Burger King icon" />
          ) : (
            <Image src={burgerKing} alt="Burger King icon" />
          )}
        </li>
        <li
          className={styles.blogger_slider_icon}
          onMouseEnter={() => handleLinkMouseEnter('nike')}
          onMouseLeave={handleLinkMouseLeave}
        >
          {hoveredBrandIcon === 'nike' ? (
            <Image src={nikeHover} alt="Nike icon" />
          ) : (
            <Image src={nike} alt="Nike icon" />
          )}
        </li>
        <li
          className={styles.blogger_slider_icon}
          onMouseEnter={() => handleLinkMouseEnter('apple')}
          onMouseLeave={handleLinkMouseLeave}
        >
          {hoveredBrandIcon === 'apple' ? (
            <Image src={appleHover} alt="Apple icon" />
          ) : (
            <Image src={apple} alt="Apple icon" />
          )}
        </li>
        <li
          className={styles.blogger_slider_icon}
          onMouseEnter={() => handleLinkMouseEnter('cola')}
          onMouseLeave={handleLinkMouseLeave}
        >
          {hoveredBrandIcon === 'cola' ? (
            <Image src={cocaColaHover} alt="Coca-cola icon" />
          ) : (
            <Image src={cocaCola} alt="Coca-cola icon" />
          )}
        </li>
        <li
          className={styles.blogger_slider_icon}
          onMouseEnter={() => handleLinkMouseEnter('mcdonalds')}
          onMouseLeave={handleLinkMouseLeave}
        >
          {hoveredBrandIcon === 'mcdonalds' ? (
            <Image src={mcDonaldsHover} alt="McDonald's icon" />
          ) : (
            <Image src={mcDonalds} alt="McDonald's icon" />
          )}
        </li>
        <li
          className={styles.blogger_slider_icon}
          onMouseEnter={() => handleLinkMouseEnter('puma')}
          onMouseLeave={handleLinkMouseLeave}
        >
          {hoveredBrandIcon === 'puma' ? (
            <Image src={pumaHover} alt="Puma icon" />
          ) : (
            <Image src={puma} alt="Puma icon" />
          )}
        </li>
      </ul>
    </div>
  );
};
