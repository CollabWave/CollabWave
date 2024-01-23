'use client';

import { useMemo, useRef } from 'react';

import { useRouter } from 'next/navigation';

import { Row, Col, Button, Carousel } from 'antd';

import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import { advertisements } from '@/mockData/advertisements';
import { user } from '@/mockData/user';

import { AdvertisementCard } from './AdvertisementCard';

import styles from './advertisementRecommendations.module.css';
import personalStyles from '../../dashboard/profile/personal-info/personalInfo.module.css';
import { montserrat } from '@/utils/fonts';

export const AdvertisementRecommendations = () => {
  const recommendations = advertisements.filter(
    advertisement =>
      advertisement.showLocation.includes(user.country) ||
      advertisement.showLocation.includes(user.continent) ||
      advertisement.showLocation.includes('World')
  );

  const advertisementsList = useMemo(() => {
    return recommendations.map((item, index) => (
      <div key={index}>
        <AdvertisementCard card={item} />
      </div>
    ));
  }, [recommendations]);

  const sliderRef = useRef(null);
  const sliderTabletRef = useRef(null);
  const sliderSmallTabletRef = useRef(null);
  const sliderMobileRef = useRef(null);

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
            onClick={() => {
              sliderRef.current && sliderRef.current.prev();
              sliderTabletRef.current && sliderTabletRef.current.prev();
              sliderSmallTabletRef.current && sliderSmallTabletRef.current.prev();
              sliderMobileRef.current && sliderMobileRef.current.prev();
            }}
          >
            <LeftOutlined className={`${styles.arrow} arrow blue-hover`} />
          </Button>
        </Col>

        <Col>
          <Button
            type="text"
            size="medium"
            onClick={() => {
              sliderRef.current && sliderRef.current.next();
              sliderTabletRef.current && sliderTabletRef.current.next();
              sliderSmallTabletRef.current && sliderSmallTabletRef.current.next();
              sliderMobileRef.current && sliderMobileRef.current.next();
            }}
          >
            <RightOutlined className={`${styles.arrow} arrow blue-hover`} />
          </Button>
        </Col>
      </Row>
      <div className={styles.mobileCarousel}>
        <Carousel ref={sliderMobileRef} dots={false} slidesToShow={1}>
          {advertisementsList}
        </Carousel>
      </div>
      <div className={styles.smallTabletCarousel}>
        <Carousel ref={sliderSmallTabletRef} dots={false} slidesToShow={2}>
          {advertisementsList}
        </Carousel>
      </div>
      <div className={styles.tabletCarousel}>
        <Carousel ref={sliderTabletRef} dots={false} slidesToShow={3}>
          {advertisementsList}
        </Carousel>
      </div>
      <div className={styles.desktopCarousel}>
        <Carousel ref={sliderRef} dots={false} slidesToShow={4}>
          {advertisementsList}
        </Carousel>
      </div>
    </>
  );
};
