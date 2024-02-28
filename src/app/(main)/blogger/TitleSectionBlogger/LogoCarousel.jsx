'use client';

import Image from 'next/image';

import styles from '../blogger.module.css';

import adidas from '../../../../assets/images/svg/adidas.svg';
import burgerKing from '../../../../assets/images/svg/burgerKing.svg';
import nike from '../../../../assets/images/svg/nike.svg';
import apple from '../../../../assets/images/svg/apple.svg';
import cocaCola from '../../../../assets/images/svg/cocaCola.svg';
import mcDonalds from '../../../../assets/images/svg/mcDonalds.svg';
import puma from '../../../../assets/images/svg/puma.svg';

export const LogoCarousel = () => {
  return (
    <div>
      <ul className={styles.logo_carousel}>
        <li className={styles.blogger_slider_icon}>
          <Image src={adidas} alt="Adidas icon" />
        </li>
        <li className={styles.blogger_slider_icon}>
          <Image src={burgerKing} alt="Burger King icon" />
        </li>
        <li className={styles.blogger_slider_icon}>
          <Image src={nike} alt="Nike icon" />
        </li>
        <li className={styles.blogger_slider_icon}>
          <Image src={apple} alt="Apple icon" />
        </li>
        <li className={styles.blogger_slider_icon}>
          <Image src={cocaCola} alt="Coca-cola icon" />
        </li>
        <li className={styles.blogger_slider_icon}>
          <Image src={mcDonalds} alt="McDonald's icon" />
        </li>
        <li className={styles.blogger_slider_icon}>
          <Image src={puma} alt="Puma icon" />
        </li>
      </ul>
    </div>
  );
};
