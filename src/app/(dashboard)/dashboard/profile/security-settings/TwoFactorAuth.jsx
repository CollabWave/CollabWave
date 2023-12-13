'use client';

import { useState } from 'react';

import { Row, Col, Form, Switch, Radio, Input, Button, Modal } from 'antd';

import { phonePattern } from '@/utils/common';

import { SecurityCodeForm } from './SecurityCodeForm';

import formStyles from '../personal-info/personalInfo.module.css';
import styles from './securitySettings.module.css';
import { montserrat } from '@/utils/fonts';

export const TwoFactorAuth = ({ user }) => {
  const [valuesForm, setValuesForm] = useState(user);
  const [isEnabled, setEnabled] = useState(true /* user?.email.verified || user?.phone.verified */);
  const [selectedOption, setSelectedOption] = useState('email');
  const [verifyClicked, setVerifyClicked] = useState(false);

  const onVerify = () => {
    console.log('verify');
  };

  return (
    <>
      <Form
        name="twoFactorAuth"
        requiredMark="optional"
        layout="vertical"
        initialValues={{
          email: user.email,
          phone: user.phone,
        }}
        onValuesChange={v => setValuesForm(v)}
        onFinish={() => setVerifyClicked(true)}
      >
        <Row>
          <Col span={24}>
            <Form.Item>
              <Row gutter={[10, 10]} justify="space-between" align="middle">
                <Col span={20}>
                  <h3 className={`${formStyles.heading} ${montserrat.className} profile-heading`}>
                    Two-factor authentication
                  </h3>
                </Col>
                <Col span={4}>
                  <Row justify="end">
                    <Col>
                      <Form.Item name="2fa">
                        <Switch checked={isEnabled} onChange={setEnabled} />
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form.Item>
          </Col>

          {isEnabled && (
            <Col span={24}>
              <Radio.Group value={selectedOption} onChange={e => setSelectedOption(e.target.value)}>
                <Radio value="phone" /* disabled={user?.phone.verified} */>
                  <Form.Item
                    className={styles.formItem}
                    name="phone"
                    label={
                      <p
                        className={`${formStyles.label} ${montserrat.className} profile-input-label`}
                      >
                        Phone
                      </p>
                    }
                    rules={[
                      { required: true, message: 'This field is required!' },
                      {
                        pattern: phonePattern,
                        message: 'Wrong phone number format!',
                      },
                    ]}
                  >
                    <Input
                      className={`${formStyles.input} profile-input`} /* disabled={verified} */
                    />
                  </Form.Item>
                </Radio>
                <Radio value="email" /* disabled={user?.email.verified} */>
                  <Form.Item
                    className={styles.formItem}
                    name="email"
                    label={
                      <p
                        className={`${formStyles.label} ${montserrat.className} profile-input-label`}
                      >
                        Email
                      </p>
                    }
                    rules={[
                      { required: true, message: 'This field is required!' },
                      {
                        type: 'email',
                        message: 'Please input a valid email address!',
                      },
                    ]}
                  >
                    <Input
                      className={`${formStyles.input} profile-input`} /* disabled={verified} */
                    />
                  </Form.Item>
                </Radio>
              </Radio.Group>
              <Button
                className={`${styles.button} ${montserrat.variable}`}
                type="link"
                htmlType="submit"
              >
                Verify
              </Button>
            </Col>
          )}
        </Row>
      </Form>

      <Modal
        width={'700px'}
        destroyOnClose
        open={verifyClicked}
        footer={false}
        closable={false}
        onCancel={() => setVerifyClicked(false)}
      >
        <SecurityCodeForm device={selectedOption} onBack={() => setVerifyClicked(false)} onFinish={onVerify} />
      </Modal>
    </>
  );
};
