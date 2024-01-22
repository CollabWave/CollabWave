'use client';

import { useState, useCallback } from 'react';

import { Col, Row, Button, Form, Checkbox } from 'antd';

import { LeftOutlined } from '@ant-design/icons';

import { CheckboxColumn } from './CheckboxColumn';

import personalStyles from '../personal-info/personalInfo.module.css';
import styles from './notifications.module.css';
import { montserrat } from '@/utils/fonts';

export const BloggerNotificationSettings = () => {
  const [checkedElements, setCheckedElements] = useState({
    1: [],
    2: [],
    3: [],
  });
  const [cancelPressed, setCancelPressed] = useState(false);

  const handleCheck = useCallback(
    mode => list => {
      setCancelPressed(false);
      setCheckedElements({ ...checkedElements, [mode]: list });
    },
    [checkedElements]
  );

  const onCancel = () => {
    setCancelPressed(true);
  };

  const onFinish = () => {};

  const options = [
    {
      id: 1,
      header: 'Email',
      headerRender: (text, props) => <Checkbox {...props}>{text}</Checkbox>,
      data: ['emailAdvertisement', 'emailExpiration'],
      dataRender: text => <Checkbox value={text} />,
    },
    {
      id: 2,
      header: 'SMS',
      headerRender: (text, props) => <Checkbox {...props}>{text}</Checkbox>,
      data: ['smsAdvertisement', 'smsExpiration'],
      dataRender: text => <Checkbox value={text} />,
    },
    {
      id: 3,
      header: 'Push',
      headerRender: (text, props) => <Checkbox {...props}>{text}</Checkbox>,
      data: ['pushAdvertisement', 'pushExpiration'],
      dataRender: text => <Checkbox value={text} />,
    },
    {
      id: 4,
      header: 'Activities',
      data: ['New Advertisement', 'Advertisement Expires'],
    },
  ];

  return (
    <>
      <div
        className={`${personalStyles.backWrap} text-blue ${montserrat.className}`}
        onClick={() => router.back()}
      >
        <LeftOutlined /> <p>Back</p>
      </div>
      <Col className={`${personalStyles.rightSide} profile-card`}>
        <Form name="notifications" onFinish={onFinish}>
          <h3 className={`${personalStyles.heading} ${montserrat.className} profile-heading`}>
            Notifications settings
          </h3>
          <p className={`${styles.text} ${montserrat.className} profile-heading`}>
            Choose how to receive notifications. These notification settings apply to the things you
            are watching.
          </p>
          <div className={styles.outerWrap}>
            {options.map(item => (
              <CheckboxColumn
                reset={cancelPressed}
                key={item.id}
                column={item}
                handleCheck={handleCheck(item.id)}
              />
            ))}
          </div>
          <Row className={personalStyles.buttonsWrap} gutter={[10, 10]} wrap={false}>
            <Col span={12}>
              <Button
                className={`${personalStyles.button} personal-info-cancel`}
                block
                type="ghost"
                onClick={onCancel}
              >
                Cancel
              </Button>
            </Col>
            <Col span={12}>
              <Button
                className={`${personalStyles.button} personal-info-save`}
                block
                type="primary"
                /* loading={loading}  */ htmlType="submit"
              >
                Save
              </Button>
            </Col>
          </Row>
        </Form>
      </Col>
    </>
  );
};
