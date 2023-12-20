'use client';

import { useState, useEffect } from 'react';

import { Form, Row, Col, Input, DatePicker, Tooltip, Button, Upload, Modal } from 'antd';

import { PlusOutlined } from '@ant-design/icons';

import dayjs from 'dayjs';
import { getBase64 } from '@/utils/utils';

import styles from '../projects.module.css';
import formStyles from '../../profile/personal-info/personalInfo.module.css';
import { montserrat } from '@/utils/fonts';

export const TaskResults = ({ task, projectId }) => {
  const [resultsForm] = Form.useForm();

  const [valuesForm, setValuesForm] = useState({ ...task });
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    setValuesForm({ ...task });
    resultsForm.setFieldsValue({ ...task });
    resultsForm.setFieldValue('date', dayjs(task.datePublished, dateFormat));
    setFileList([]);
    if (task.status === 'submitted') {
      setFileList([...task.screenshots]);
    }
  }, [task, resultsForm]);

  const dateFormat = 'YYYY/MM/DD';

  const handleCancel = () => setPreviewOpen(false);
  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const uploadButton = (
    <div className={`${montserrat.className} text ${styles.uploadButton}`}>
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  const onFormCancel = () => {
    resultsForm.setFieldsValue({ ...task });
    resultsForm.setFieldValue('date', dayjs(task.datePublished, dateFormat));
    setFileList([...task.screenshots]);
  };

  return (
    <>
      <div className={styles.rightContainer}>
        {task && (
          <Form layout="vertical" form={resultsForm} onValuesChange={v => setValuesForm(v)}>
            <Row gutter={{ xs: 10, md: 15, xl: 30 }}>
              <Col span={24} style={{ marginBottom: '15px' }}>
                <p className={`${styles.smallText} text`}>
                  You have to submit the {valuesForm.type} you prepared for verification. You will
                  receive a notification after the customer reviews your {valuesForm.type}. If it is
                  approved, you can then make a post and add the link here.
                </p>
              </Col>
              <Col xs={24} md={7}>
                <Form.Item
                  initialValue={valuesForm.status}
                  label={
                    <p
                      className={`${formStyles.label} ${montserrat.className} profile-input-label`}
                    >
                      Status
                    </p>
                  }
                  name="status"
                >
                  <Input disabled className={`${formStyles.input} profile-input`} />
                </Form.Item>
              </Col>
              <Col xs={24} md={8}>
                <Form.Item
                  label={
                    <p
                      className={`${formStyles.label} ${montserrat.className} profile-input-label`}
                    >
                      Published
                    </p>
                  }
                  name={'date'}
                >
                  {valuesForm.datePublished && (
                    <DatePicker
                      className={`${formStyles.input} profile-input`}
                      style={{ width: '100%', color: '#fff' }}
                      defaultValue={dayjs(valuesForm.datePublished, dateFormat)}
                      format={dateFormat}
                      disabled
                    />
                  )}
                  {valuesForm.datePublished === '' && task.status === 'verified' && (
                    <DatePicker
                      className={`${formStyles.input} profile-input`}
                      style={{ width: '100%', color: '#fff' }}
                      format={dateFormat}
                    />
                  )}
                  {valuesForm.datePublished === '' && task.status === 'not started' && (
                    <div>
                      <Tooltip
                        title={`You need to send your ${task.type} for a verification first`}
                      >
                        <div>
                          <DatePicker
                            className={`${formStyles.input} profile-input`}
                            style={{ width: '100%', color: '#fff' }}
                            format={dateFormat}
                            disabled
                          />
                        </div>
                      </Tooltip>
                    </div>
                  )}
                </Form.Item>
              </Col>
              <Col xs={24} md={8}>
                <Form.Item
                  initialValue={valuesForm.link}
                  label={
                    <p
                      className={`${formStyles.label} ${montserrat.className} profile-input-label`}
                    >
                      Link
                    </p>
                  }
                  name="link"
                >
                  <Input
                    disabled={valuesForm.status === 'verified' ? false : true}
                    className={`${formStyles.input} profile-input`}
                  />
                </Form.Item>
              </Col>
              <Col span={24}>
                <Form.Item
                  label={
                    <p
                      className={`${formStyles.label} ${montserrat.className} profile-input-label`}
                    >
                      {valuesForm.status === 'not started'
                        ? `Add your ${valuesForm.type} for verification`
                        : valuesForm.status === 'verified'
                        ? `Add your post screenshot`
                        : 'Add more screenshots'}
                    </p>
                  }
                  name="upload"
                >
                  <Upload
                    className="screen-upload"
                    action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={handlePreview}
                    onChange={handleChange}
                  >
                    {fileList.length >= 8 ? null : uploadButton}
                  </Upload>
                </Form.Item>
              </Col>
            </Row>
            <Row className={formStyles.buttonsWrap} gutter={[8, 8]} wrap={false}>
              <Col span={9}></Col>
              <Col span={7}>
                <Button
                  className={`${formStyles.button} personal-info-cancel`}
                  block
                  type="ghost"
                  onClick={onFormCancel}
                >
                  Cancel
                </Button>
              </Col>
              <Col span={7}>
                <Button
                  className={`${formStyles.button} personal-info-save`}
                  block
                  type="primary"
                  /* loading={loading}  */ htmlType="submit"
                >
                  {valuesForm.status === 'not started'
                    ? 'Submit for verification'
                    : 'Submit results'}
                </Button>
              </Col>
            </Row>
          </Form>
        )}
      </div>
      <Modal open={previewOpen} title={previewTitle} footer={null} onCancel={handleCancel}>
        <img
          alt="example"
          style={{
            width: '100%',
          }}
          src={previewImage}
        />
      </Modal>
    </>
  );
};
