'use client';

import { useMemo, useRef } from 'react';

import { useRouter } from 'next/navigation';

import { Row, Col, Button, Carousel } from 'antd';

import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import { advertisements } from '@/mockData/advertisements';

import { AdvertisementCard } from './AdvertisementCard';

import styles from './advertisementRecommendations.module.css';
import personalStyles from '../../dashboard/profile/personal-info/personalInfo.module.css';
import { montserrat } from '@/utils/fonts';

export const AdvertisementRecommendations = () => {
  const advertisementsList = useMemo(() => {
    return advertisements.map((item, index) => (
      <div key={index}>
        <AdvertisementCard card={item} />
      </div>
    ));
  }, [advertisements]);

  const sliderRef = useRef(null);

  const router = useRouter();

  return (
    <>
      <h3 className={`${personalStyles.heading} ${montserrat.className} profile-heading`}>
        Advertisement recommendations
      </h3>
      <Row className={styles.buttonsWrap}>
        <Col>
          <Button
            className={`${montserrat.className} ${styles.viewAll} text blue-hover`}
            size="medium"
            borderd="false"
            type="text"
            onClick={() => router.push('dashboard/advertisements')}
          >
            View All
          </Button>
        </Col>

        <Col>
          <Button
            type="text"
            size="medium"
            onClick={() => sliderRef.current && sliderRef.current.prev()}
          >
            <LeftOutlined className={`${styles.arrow} arrow blue-hover`} />
          </Button>
        </Col>

        <Col>
          <Button
            type="text"
            size="medium"
            onClick={() => sliderRef.current && sliderRef.current.next()}
          >
            <RightOutlined className={`${styles.arrow} arrow blue-hover`} />
          </Button>
        </Col>
      </Row>
      <Carousel style={{ marginBottom: '30px' }} ref={sliderRef} dots={false} slidesToShow={4}>
        {advertisementsList}
      </Carousel>
    </>
  );
};
