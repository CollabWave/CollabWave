'use client';

import { useState } from 'react';

import { Col, Row, Form, Input, Button } from 'antd';

import { useTheme } from 'next-themes';

import { alerts } from '@/app/(dashboard)/components/feedback/Alerts';

import formStyles from '../personal-info/personalInfo.module.css';
import { montserrat } from '@/utils/fonts';

export const PasswordForm = ({ user }) => {
  const [form] = Form.useForm();
  const [valuesForm, setValuesForm] = useState(user);
  const [isLoading, setLoading] = useState(false);

  const { resolvedTheme } = useTheme();

  let modalBackgroundColor = resolvedTheme === 'dark' ? '#dbd8e3' : 'rgb(248, 251, 255)';

  const passwordPattern = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/);

  const onFinish = async values => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alerts.successAlert('Your password is successfully changed!', modalBackgroundColor);
      console.log(values);
    }, 1000);
  };

  return (
    <Form
      layout="vertical"
      name="passwordForm"
      form={form}
      initialValues={valuesForm}
      onValuesChange={v => setValuesForm(v)}
      onFinish={onFinish}
    >
      <Row gutter={{ md: 15, xl: 30 }}>
        <Col span={24}>
          <h3 className={`${formStyles.heading} ${montserrat.className} profile-heading`}>
            Change Password
          </h3>
        </Col>
        <Col xs={24} md={12} xl={24}>
          <Form.Item
            label={
              <p className={`${formStyles.label} ${montserrat.className} profile-input-label`}>
                Current Password
              </p>
            }
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
            name="password"
          >
            <Input.Password className={`${formStyles.input} profile-input`} />
          </Form.Item>
        </Col>
        <Col xs={24} md={12} xl={24}>
          <Form.Item
            label={
              <p className={`${formStyles.label} ${montserrat.className} profile-input-label`}>
                New Password
              </p>
            }
            validateTrigger="onBlur"
            rules={[
              {
                required: true,
                message: 'Please input new password!',
              },
              {
                pattern: passwordPattern,
                message:
                  'Your password should be minimum eight characters and contain at least one uppercase letter, one lowercase letter and one number',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') !== value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error('Your new password cannot be the same as the previous one')
                  );
                },
              }),
            ]}
            name="new-password"
          >
            <Input.Password className={`${formStyles.input} profile-input`} />
          </Form.Item>
        </Col>
        <Col xs={24} md={12} xl={24}>
          <Form.Item
            label={
              <p className={`${formStyles.label} ${montserrat.className} profile-input-label`}>
                Confirm Password
              </p>
            }
            validateTrigger="onBlur"
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('new-password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('Two passwords that you entered do not match'));
                },
              }),
            ]}
            name="confirm-password"
          >
            <Input.Password className={`${formStyles.input} profile-input`} />
          </Form.Item>
        </Col>
        <Col xs={24} md={12} xl={24}>
          <Button
            style={{ width: '100%', marginTop: '30px' }}
            className={`${formStyles.button} personal-info-save`}
            loading={isLoading}
            type="primary"
            htmlType="submit"
          >
            Confirm
          </Button>
        </Col>
      </Row>
    </Form>
  );
};
