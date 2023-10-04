'use client';

import { useState } from 'react';
import { Button } from '../Button/button';
import styles from './Navbar.module.css';
import Image from 'next/image';
import { navigation } from '../../utils/common';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <div className={styles.navbar}>
      <div className={styles.ul}>
        {' '}
        <nav>
          {' '}
          <ul className={styles.ul}>
            <li className={styles.li}>
              <a className="" href="/">
                <Image src="/Logo.png" alt="Logo GetPromo icon" width={250} height={100} />
              </a>
            </li>
            <li className={styles.li}>
              <a
                href=""
                onClick={e => {
                  e.preventDefault();
                }}
              >
                <p>I m blogger</p>
              </a>
            </li>
            <li className={styles.li}>
              <a
                href=""
                onClick={e => {
                  e.preventDefault();
                }}
              >
                <p>I m brand</p>
              </a>
            </li>
            <li className={styles.li}>
              <a
                onClick={e => {
                  e.preventDefault();
                  setIsOpen(!isOpen);
                }}
                href=""
                className={styles.ul}
              >
                <p className={styles.more_space_icon}>More</p>

                <div>
                  <svg
                    className={isOpen ? styles.up : styles.down}
                    width="12"
                    height="6"
                    viewBox="0 0 24 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M23.4999 0.000249863C23.3759 0.000249863 23.2509 0.0462494 23.1539 0.13925L11.9999 10.8082L0.845866 0.13925C0.645866 -0.0527506 0.329866 -0.0447502 0.138866 0.15425C-0.0521337 0.35425 -0.0451337 0.67125 0.153866 0.86125L11.6539 11.8612C11.8479 12.0463 12.1519 12.0463 12.3459 11.8612L23.8459 0.86125C24.0449 0.67125 24.0519 0.35425 23.8609 0.15425C23.7629 0.0522499 23.6319 0.000249863 23.4999 0.000249863Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </a>
            </li>
          </ul>
        </nav>
        <nav>
          <ul className={styles.ul}>
            {' '}
            <li className={styles.li}>
              <a href="">
                <p>Sign up</p>
              </a>
            </li>
            <li className={styles.li}>
              <a href="">
                <p>Log in</p>
              </a>
            </li>
            <li className={styles.li}>
              <a
                href=""
                onClick={e => {
                  e.preventDefault();
                }}
              >
                <Image
                  src="/Icon_world.png"
                  alt="Icon World with drop down menu"
                  width={41}
                  height={29}
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* <Button>{"Some Text"}</Button> */}
    </div>
  );
}
