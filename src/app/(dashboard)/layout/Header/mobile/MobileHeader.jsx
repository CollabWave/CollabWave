import { Row, Flex } from 'antd';

import { Divide as Hamburger } from 'hamburger-react';

import { HeaderProfile } from '@/app/(dashboard)/components/HeaderProfile/HeaderProfile';
import { Notifications } from '@/app/(dashboard)/components/Notifications/Notifications';
import { HeaderSearch } from '@/app/(dashboard)/components/HeaderSearch/HeaderSearch';
import { Settings } from '@/app/(dashboard)/components/Settings/Settings';

import styles from './mobileHeader.module.css';

export const MobileHeader = ({ isOpen, setIsOpen }) => {
  return (
    <Row className={`${styles.header} header`}>
      <HeaderProfile />
      <Flex gap="large">
        <Notifications />
        <HeaderSearch />
        <Settings />
      </Flex>
      <Hamburger size={25} toggled={isOpen} toggle={setIsOpen} />
    </Row>
  );
};
