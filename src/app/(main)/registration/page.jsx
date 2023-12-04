'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Registration.module.css';
import blogger from '../../../image/blogger.jpeg';
import brand from '../../../image/brand.jpeg';
import RegistrationBlog from '../registrationBlog/RegistrationBlog';
import RegistrationBrand from '../registrationBrand/RegistrationBrand';
import RegistrationForm from '../registrationForm/RegistrationForm';
import RegistrationExtended from '../registrationExtended/RegistrationExtended';

const Registration = () => {
  const [state, setState] = useState(0);
  const [client, setClient] = useState('');
  const handleNextClick = () => {
    if (state === 0) {
      setState(1);
    } else {
      setState(2);
    }
  };
  return (
    <>
      {state === 0 && client === '' && (
        <div className={styles.container}>
          <ul className={styles.ul}>
            <li className={styles.li} data-tooltip="Блогер" onClick={() => setClient('blog')}>
              <Image src={blogger} alt="blogger" width="400" />
            </li>
            <li className={styles.li} data-tooltip="Бренд" onClick={() => setClient('brand')}>
              <Image src={brand} alt="brand" width="400" />
            </li>
          </ul>
        </div>
      )}

      {state === 0 && client === 'blog' && <RegistrationForm onNextClick={handleNextClick} />}
      {state === 1 && client === 'blog' && <RegistrationExtended onNextClick={handleNextClick} />}
      {state === 2 && client === 'blog' && <RegistrationBlog />}
      {state === 0 && client === 'brand' && <RegistrationBrand onNextClick={handleNextClick} />}
    </>
  );
};

export default Registration;
