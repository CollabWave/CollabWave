import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Registration.module.css';
import blogger from '../../../image/blogger.jpeg';
import brand from '../../../image/brand.jpeg';

const Registration = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.ul}>
        <Link href="registrationForm" className={styles.link}>
          <li className={[styles.li, styles.imageLeft].join(' ')}>
            <Image src={blogger} alt="blogger" width="400" />
          </li>
        </Link>
        <Link href="registrationBrand" className={styles.link}>
          <li className={[styles.li, styles.imageRight].join(' ')}>
            <Image src={brand} alt="brand" width="400" />
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Registration;
