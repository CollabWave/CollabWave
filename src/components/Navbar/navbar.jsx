'use client';

import { useState } from 'react';
import { Button } from '../Button/button';
import styles from './Navbar.module.css';
import Image from 'next/image';
import { moreNavigation, languages } from '../../app/utils/common';
import Link from 'next/link';
import useOutsideClickClose from '@/hooks/outsideClickClose';

export default function NavBar() {
  // const [isOpenMore, setIsOpenMore] = useState(false);
  const [isOpenLangMenu, setIsOpenLangMenu] = useState(false);
  const { ref, isShow, setIsShow } = useOutsideClickClose(false);
  // const { ref2, isShow2, setIsShow2 } = useOutsideClickClose(false);

  return (
    <div className={styles.navbar}>
      <div className={styles.ul}>
        {' '}
        <nav>
          {' '}
          <ul style={{}} className={styles.ul}>
            <li className={styles.li}>
              <Link className="" href="/">
                <Image src="/Logo.png" alt="Logo GetPromo icon" width={250} height={100} />
              </Link>
            </li>
            <li className={styles.li}>
              <Link
                href="bloger"
                // onClick={e => {
                //   e.preventDefault();
                // }}
              >
                <p>I’m bloger</p>
              </Link>
            </li>
            <li className={styles.li}>
              <Link
                href="brand"
                // onClick={e => {
                //   e.preventDefault();
                // }}
              >
                <p>I’m brand</p>
              </Link>
            </li>
            <li className={styles.li}>
              <Button
                isOpen={isShow}
                setIsOpen={setIsShow}
                onClick={e => {
                  e.preventDefault();
                  setIsOpen(!isOpen);
                }}
                href=""
              >
                {<p className={styles.more_space_icon}>More</p>}

                {
                  <div>
                    <svg
                      className={isShow ? styles.up : styles.down}
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
                }
              </Button>
              {isShow && (
                <div ref={ref} className={styles.dropDownMoreMenu}>
                  <ul className={styles.ulMore}>
                    {moreNavigation &&
                      moreNavigation.map((navItem, index) => {
                        return (
                          <li
                            // className={styles.liMore}
                            key={[navItem.name, index, navItem.href].join(':;$')}
                          >
                            <Link
                              href={navItem.href}
                              className=""
                              onClick={() => {
                                setIsShow(!isShow);
                              }}
                            >
                              <p className={styles.pMore}>{navItem.name}</p>
                            </Link>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              )}
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
              <Button
                isOpen={isOpenLangMenu}
                setIsOpen={setIsOpenLangMenu}
                // isOpen={isShow2}
                // setIsOpen={setIsShow2}
                onClick={e => {
                  e.preventDefault();
                  setIsOpen(!isOpen);
                }}
                // onClick={e => {
                //   e.preventDefault();
                //   setIsOpenLangMenu(!isOpen);
                // }}
                href=""
                className={styles.ul}
              >
                <Image
                  className={styles.more_space_icon}
                  src="/Icon_world.png"
                  alt="Icon World with drop down menu"
                  width={29}
                  height={29}
                />
                <div>
                  {' '}
                  <svg
                    className={isOpenLangMenu ? styles.up : styles.down}
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
              </Button>
              {/* {isOpenLangMenu && ( */}
              {isOpenLangMenu && (
                <div ref={ref} className={styles.dropDownLangMenu}>
                  <ul className={styles.ulMore}>
                    {languages &&
                      languages.map((navItem, index) => {
                        return (
                          <li key={[navItem.name, index].join(':;$')}>
                            <Link
                              href={navItem.href}
                              className=""
                              // onClick={() => {
                              //   setIsShow(!isShow);
                              // }}
                              onClick={() => {
                                setIsOpenLangMenu(!isOpenLangMenu);
                                // setIsShow2(!isShow2);
                              }}
                            >
                              <p className={styles.pMore}>{navItem.name}</p>
                            </Link>
                          </li>
                        );
                      })}
                  </ul>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
