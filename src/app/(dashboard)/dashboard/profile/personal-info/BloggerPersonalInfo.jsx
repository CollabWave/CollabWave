'use client';

import { useState } from 'react';

import { Row, Col, Form, Input, Select, Space, DatePicker, Tooltip, Button } from 'antd';
import {
  ManOutlined,
  WomanOutlined,
  FileTextOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';

import ReactCountryFlag from 'react-country-flag';
import countryList from 'country-list';
import dayjs from 'dayjs';
import { getCountryData } from 'countries-list';

import { blogAreas, phonePattern, websitePattern } from '@/utils/common';

import { FacebookIcon } from '@/app/(dashboard)/components/Icons/FacebookIcon';
import { TelegramIcon } from '@/app/(dashboard)/components/Icons/TelegramIcon';
import { TiktokIcon } from '@/app/(dashboard)/components/Icons/TiktokIcon';

import styles from './personalInfo.module.css';
import { montserrat } from '@/utils/fonts';

export const BloggerPersonalInfo = ({ user }) => {
  const [form] = Form.useForm();
  const [valuesForm, setValuesForm] = useState(user);

  const dateFormat = 'YYYY/MM/DD';
  const countries = countryList.getData();

  const countriesSelectOptions = countries.map(country => (
    <Select.Option key={country.name} value={country.code}>
      <div className={styles.flagWrap}>
        <ReactCountryFlag
          className={styles.flag}
          countryCode={country.code}
          svg
          alt="country flag"
        />
        {country.name}
      </div>
    </Select.Option>
  ));

  const areasSelectOptions = blogAreas.map(area => (
    <Select.Option key={area.id} value={area.value}></Select.Option>
  ));

  const getHref = href => {
    if (!href) return;
    return href.startsWith('http' || 'https')
      ? href
      : href.startsWith('www')
      ? `https://${href}`
      : `https://www.${href}`;
  };

  const onFinish = values => {
    const userData = { ...values };

    if (user.countryCode !== values.countryCode) {
      const userCountryData = getCountryData(values.countryCode);
      userData.country = userCountryData.name;
      userData.continent = userCountryData.continent;
    }
    //send userData to server
  };

  const onCancel = () => {
    form.setFieldsValue(user);
  };

  return (
    <Col md={15} className={`${styles.rightSide} profile-card`}>
      <Form
        layout="vertical"
        form={form}
        initialValues={valuesForm}
        onValuesChange={v => setValuesForm(v)}
        onFinish={onFinish}
      >
        <Row gutter={{ xs: 10, md: 15, xl: 30 }}>
          <Col span={24}>
            <h3 className={`${styles.heading} ${montserrat.className} profile-heading`}>
              Personal Info
            </h3>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label={
                <p className={`${styles.label} ${montserrat.className} profile-input-label`}>
                  First Name
                </p>
              }
              name="firstName"
            >
              <Input className={`${styles.input} profile-input`} />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label={
                <p className={`${styles.label} ${montserrat.className} profile-input-label`}>
                  Last Name
                </p>
              }
              name="lastName"
            >
              <Input className={`${styles.input} profile-input`} />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label={
                <p className={`${styles.label} ${montserrat.className} profile-input-label`}>
                  Nickname
                </p>
              }
              name="nickName"
            >
              <Input className={`${styles.input} profile-input`} />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label={
                <p className={`${styles.label} ${montserrat.className} profile-input-label`}>
                  Gender
                </p>
              }
              name="gender"
            >
              <Select className={`${styles.input} profile-input`}>
                <Select.Option value="male">
                  <Space align="center">
                    <ManOutlined />
                    Male
                  </Space>
                </Select.Option>
                <Select.Option value="female">
                  <Space align="center">
                    <WomanOutlined />
                    Female
                  </Space>
                </Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label={
                <p className={`${styles.label} ${montserrat.className} profile-input-label`}>
                  Birth Date
                </p>
              }
            >
              <DatePicker
                className={`${styles.input} profile-input`}
                style={{ width: '100%', color: '#fff' }}
                defaultValue={dayjs(user.birthDate, dateFormat)}
                format={dateFormat}
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label={
                <p className={`${styles.label} ${montserrat.className} profile-input-label`}>
                  Language
                </p>
              }
              name="language"
            >
              <Select className={`${styles.input} profile-input`}>
                <Select.Option value="english">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <ReactCountryFlag
                      style={{
                        fontSize: '30px',
                        lineHeight: '30px',
                      }}
                      svg
                      countryCode="GB"
                      alt="country flag"
                    />
                    English
                  </div>
                </Select.Option>
                <Select.Option value="ukrainian">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <ReactCountryFlag
                      style={{
                        fontSize: '30px',
                        lineHeight: '30px',
                      }}
                      svg
                      countryCode="UA"
                      alt="country flag"
                    />
                    Ukrainian
                  </div>
                </Select.Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={24}>
            <h3
              style={{ marginTop: '50px' }}
              className={`${styles.heading} ${montserrat.className} profile-heading`}
            >
              Contact Info
            </h3>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label={
                <p className={`${styles.label} ${montserrat.className} profile-input-label`}>
                  Phone
                </p>
              }
              name="phone"
              rules={[
                { required: true, message: 'This field is required!' },
                {
                  pattern: phonePattern,
                  message: 'Wrong phone number format!',
                },
              ]}
            >
              <Input className={`${styles.input} profile-input`} />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label={
                <p className={`${styles.label} ${montserrat.className} profile-input-label`}>
                  Email
                </p>
              }
              name="email"
              rules={[
                { required: true, message: 'This field is required!' },
                {
                  type: 'email',
                  message: 'Please input a valid email address!',
                },
              ]}
            >
              <Input className={`${styles.input} profile-input`} />
            </Form.Item>
          </Col>
          <Col span={24}>
            <h3
              style={{ marginTop: '50px' }}
              className={`${styles.heading} ${montserrat.className} profile-heading`}
            >
              Address
            </h3>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label={
                <p className={`${styles.label} ${montserrat.className} profile-input-label`}>
                  Country
                </p>
              }
              name="countryCode"
            >
              <Select
                className={`${styles.input} profile-input`}
                showSearch
                filterOption={(input, option) =>
                  option?.value.toLowerCase().includes(input.toLowerCase())
                }
              >
                {countriesSelectOptions}
              </Select>
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label={
                <p className={`${styles.label} ${montserrat.className} profile-input-label`}>
                  City
                </p>
              }
              name="city"
            >
              <Input className={`${styles.input} profile-input`} />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label={
                <p className={`${styles.label} ${montserrat.className} profile-input-label`}>
                  Address 1
                </p>
              }
              name="address1"
            >
              <Input className={`${styles.input} profile-input`} />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label={
                <p className={`${styles.label} ${montserrat.className} profile-input-label`}>
                  Address 2
                </p>
              }
              name="address2"
            >
              <Input className={`${styles.input} profile-input`} />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              label={
                <p className={`${styles.label} ${montserrat.className} profile-input-label`}>
                  Zip Code
                </p>
              }
              name="zipCode"
            >
              <Input className={`${styles.input} profile-input`} />
            </Form.Item>
          </Col>
          <Col span={24}>
            <h3
              style={{ marginTop: '50px' }}
              className={`${styles.heading} ${montserrat.className} profile-heading`}
            >
              Accounts
            </h3>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              name="facebook"
              rules={[
                {
                  pattern: websitePattern,
                  message: 'Please input a valid URL!',
                },
              ]}
            >
              <Input
                className={`${styles.input} profile-input`}
                prefix={<FacebookIcon />}
                suffix={
                  <Tooltip title={'Open in new tab'}>
                    <Button
                      size="small"
                      href={getHref(valuesForm.facebook)}
                      target="_blank"
                      type="text"
                      icon={
                        <FileTextOutlined
                          className="icon-account-input"
                          style={{ fontSize: '24px' }}
                        />
                      }
                    />
                  </Tooltip>
                }
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              name="instagram"
              rules={[
                {
                  pattern: websitePattern,
                  message: 'Please input a valid URL!',
                },
              ]}
            >
              <Input
                className={`${styles.input} profile-input`}
                prefix={<InstagramOutlined style={{ fontSize: '30px' }} />}
                suffix={
                  <Tooltip title={'Open in new tab'}>
                    <Button
                      size="small"
                      href={getHref(valuesForm.instagram)}
                      target="_blank"
                      disabled={!user.instagram}
                      type="text"
                      icon={
                        <FileTextOutlined
                          className="icon-account-input"
                          style={{ fontSize: '24px' }}
                        />
                      }
                    />
                  </Tooltip>
                }
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              name="youtube"
              rules={[
                {
                  pattern: websitePattern,
                  message: 'Please input a valid URL!',
                },
              ]}
            >
              <Input
                className={`${styles.input} profile-input`}
                prefix={<YoutubeOutlined style={{ fontSize: '30px' }} />}
                suffix={
                  <Tooltip title={'Open in new tab'}>
                    <Button
                      size="small"
                      href={getHref(valuesForm.youtube)}
                      target="_blank"
                      disabled={!user.youtube}
                      type="text"
                      icon={
                        <FileTextOutlined
                          className="icon-account-input"
                          style={{ fontSize: '24px' }}
                        />
                      }
                    />
                  </Tooltip>
                }
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              name="telegram"
              rules={[
                {
                  pattern: websitePattern,
                  message: 'Please input a valid URL!',
                },
              ]}
            >
              <Input
                className={`${styles.input} profile-input`}
                prefix={<TelegramIcon />}
                suffix={
                  <Tooltip title={'Open in new tab'}>
                    <Button
                      size="small"
                      href={getHref(valuesForm.telegram)}
                      target="_blank"
                      disabled={!user.telegram}
                      type="text"
                      icon={
                        <FileTextOutlined
                          className="icon-account-input"
                          style={{ fontSize: '24px' }}
                        />
                      }
                    />
                  </Tooltip>
                }
              />
            </Form.Item>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item
              name="tiktok"
              rules={[
                {
                  pattern: websitePattern,
                  message: 'Please input a valid URL!',
                },
              ]}
            >
              <Input
                className={`${styles.input} profile-input`}
                prefix={<TiktokIcon />}
                suffix={
                  <Tooltip title={'Open in new tab'}>
                    <Button
                      size="small"
                      href={getHref(valuesForm.tiktok)}
                      target="_blank"
                      disabled={!user.tiktok}
                      type="text"
                      icon={
                        <FileTextOutlined
                          className="icon-account-input"
                          style={{ fontSize: '24px' }}
                        />
                      }
                    />
                  </Tooltip>
                }
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <h3
              style={{ marginTop: '50px' }}
              className={`${styles.heading} ${montserrat.className} profile-heading`}
            >
              Areas
            </h3>
          </Col>
          <Col xs={24} md={12}>
            <Form.Item name="area">
              <Select
                mode="multiple"
                className={`${styles.input} profile-input`}
                showSearch
                filterOption={(input, option) =>
                  option?.value.toLowerCase().includes(input.toLowerCase())
                }
              >
                {areasSelectOptions}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row className={styles.buttonsWrap} gutter={[10, 10]} wrap={false}>
          <Col span={12}>
            <Button
              className={`${styles.button} personal-info-cancel`}
              block
              type="ghost"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </Col>
          <Col span={12}>
            <Button
              className={`${styles.button} personal-info-save`}
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
  );
};
