'use client';

import { useState, useEffect } from 'react';

import { Form, Row, Col, Input, DatePicker, Tooltip, Button, Popover } from 'antd';

import { CopyOutlined } from '@ant-design/icons';

import dayjs from 'dayjs';

import styles from '../projects.module.css';
import formStyles from '../../profile/personal-info/personalInfo.module.css';
import { montserrat } from '@/utils/fonts';

export const TaskDescription = ({ task }) => {
  const [form] = Form.useForm();
  const [valuesForm, setValuesForm] = useState({ ...task });

  useEffect(() => {
    setValuesForm({ ...task });
    form.setFieldsValue({ ...task });
    task.periodOfExecution
      ? form.setFieldValue('execution-period', [
          dayjs(task.periodOfExecution.split(' - ')[0], dateFormat),
          dayjs(task.periodOfExecution.split(' - ')[1], dateFormat),
        ])
      : null;
  }, [task, form]);

  const { RangePicker } = DatePicker;
  const dateFormat = 'YYYY/MM/DD';

  return (
    <div className={styles.rightContainer}>
      {task && (
        <Form layout="vertical" form={form} onValuesChange={v => setValuesForm(v)}>
          <Row gutter={{ xs: 10, md: 15, xl: 30 }}>
            <Col span={24} style={{ marginBottom: '35px' }}>
              <p className={`${styles.smallText} text`}>{valuesForm.description}</p>
            </Col>
            <Col xs={24} md={7}>
              <Form.Item
                initialValue={valuesForm.type}
                shouldUpdate
                label={
                  <p className={`${formStyles.label} ${montserrat.className} profile-input-label`}>
                    Type
                  </p>
                }
                name="type"
              >
                <Input disabled className={`${formStyles.input} profile-input`} />
              </Form.Item>
            </Col>
            <Col xs={24} md={8}>
              <Form.Item
                label={
                  <p className={`${formStyles.label} ${montserrat.className} profile-input-label`}>
                    Period of execution
                  </p>
                }
                name={'execution-period'}
              >
                {valuesForm.periodOfExecution && (
                  <RangePicker
                    className={`${formStyles.input} profile-input`}
                    style={{ width: '100%', color: '#fff' }}
                    defaultValue={[
                      dayjs(valuesForm.periodOfExecution.split(' - ')[0], dateFormat),
                      dayjs(valuesForm.periodOfExecution.split(' - ')[1], dateFormat),
                    ]}
                    format={dateFormat}
                    disabled
                    onClick={e => console.log(e.target)}
                  />
                )}
              </Form.Item>
            </Col>
            <Col xs={24} md={7}>
              <Form.Item
                initialValue={valuesForm.status}
                label={
                  <p className={`${formStyles.label} ${montserrat.className} profile-input-label`}>
                    Status
                  </p>
                }
                name="status"
              >
                <Input disabled className={`${formStyles.input} profile-input`} />
              </Form.Item>
            </Col>
            <Col xs={24} md={7}>
              <Form.Item
                initialValue={valuesForm.status}
                label={
                  <p className={`${formStyles.label} ${montserrat.className} profile-input-label`}>
                    Hashtags
                  </p>
                }
                name="hashtags"
              >
                <Input
                  disabled
                  className={`${formStyles.input} profile-input text`}
                  suffix={
                    <Tooltip title={'Copy to clipboard'}>
                      <Popover
                        color="#9b9c86"
                        placement="right"
                        content={
                          <div>
                            <p className={`${styles.popoverText} ${montserrat.className}`}>
                              Copied to clipboard!
                            </p>
                          </div>
                        }
                        trigger={'click'}
                      >
                        <Button
                          size="small"
                          onClick={() => {
                            navigator.clipboard.writeText(task.hashtags);
                          }}
                          type="text"
                          icon={
                            <CopyOutlined
                              className="icon-account-input"
                              style={{ fontSize: '24px' }}
                            />
                          }
                        />
                      </Popover>
                    </Tooltip>
                  }
                />
              </Form.Item>
            </Col>
            <Col xs={24} md={15}>
              <Form.Item
                initialValue={valuesForm.wordsToUse}
                label={
                  <p className={`${formStyles.label} ${montserrat.className} profile-input-label`}>
                    Words to use
                  </p>
                }
                name="wordsToUse"
              >
                <Input disabled className={`${formStyles.input} profile-input`} />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      )}
    </div>
  );
};
