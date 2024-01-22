'use client';

import { Col, Row } from 'antd';

import { LeftOutlined } from '@ant-design/icons';

import { useRouter } from 'next/navigation';

import { PasswordForm } from './PasswordForm';
import { TwoFactorAuth } from './TwoFactorAuth';

import personalStyles from '../personal-info/personalInfo.module.css';
import { montserrat } from '@/utils/fonts';

export const SecuritySettings = ({ user }) => {
  const router = useRouter();

  return (
    <>
      <div
        className={`${personalStyles.backWrap} text-blue ${montserrat.className}`}
        onClick={() => router.back()}
      >
        <LeftOutlined /> <p>Back</p>
      </div>
      <Col className={`${personalStyles.rightSide} profile-card`}>
        <Row gutter={[30, 0]}>
          <Col xs={24} xl={10}>
            <PasswordForm user={user} />
          </Col>
          <Col xs={24} xl={14}>
            <TwoFactorAuth user={user} />
          </Col>
        </Row>
      </Col>
    </>
  );
};
