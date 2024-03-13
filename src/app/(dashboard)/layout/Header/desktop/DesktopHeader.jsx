import { Row, Col } from 'antd';

import { HeaderSearch } from '../../../components/HeaderSearch/HeaderSearch';
import { HeaderFullscreen } from '../../../components/FullScreen/HeaderFullScreen';
import { Notifications } from '../../../components/Notifications/Notifications';
import { Settings } from '../../../components/Settings/Settings';
import { HeaderProfile } from '../../../components/HeaderProfile/HeaderProfile';

import styles from './desktopHeader.module.css';

export const DesktopHeader = () => {
  return (
    <Row className={`${styles.header} header`}>
      <Col md={1} />
      <Col md={8}>
        <HeaderSearch />
      </Col>
      <Col md={2} />
      <Col md={2}>
        <HeaderFullscreen />
      </Col>
      <Col style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }} md={2}>
        <Notifications />
      </Col>
      <Col style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }} md={2}>
        <Settings />
      </Col>
      <Col style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }} md={6}>
        <HeaderProfile />
      </Col>
    </Row>
  );
};
