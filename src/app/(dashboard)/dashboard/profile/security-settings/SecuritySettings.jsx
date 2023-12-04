import { Col, Row } from 'antd';

import { PasswordForm } from './PasswordForm';
import { TwoFactorAuth } from './TwoFactorAuth';

import personalStyles from '../personal-info/personalInfo.module.css';

export const SecuritySettings = ({ user }) => {
  return (
    <Col md={15} className={`${personalStyles.rightSide} profile-card`}>
      <Row gutter={[30, 0]}>
        <Col xs={24} xl={10}>
          <PasswordForm user={user} />
        </Col>
        <Col xs={24} xl={14}>
          <TwoFactorAuth user={user} />
        </Col>
      </Row>
    </Col>
  );
};
