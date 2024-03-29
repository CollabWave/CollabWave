'use client';

import { useMemo, useRef } from 'react';

import { useRouter } from 'next/navigation';

import { Row, Col, Button, Carousel } from 'antd';

import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import { advertisements } from '@/mockData/advertisements';
import { user } from '@/mockData/user';
import { influencers } from '@/mockData/influencers';

import { AdvertisementCard } from '../AdvertisementRecommendationCard/AdvertisementCard';
import { BloggerCard } from '../BloggerCard/BloggerCard';

import styles from './recommendations.module.css';
import personalStyles from '../../dashboard/profile/personal-info/personalInfo.module.css';
import { montserrat } from '@/utils/fonts';

export const Recommendations = () => {
  const recommendations =
    user.role === 'blogger'
      ? advertisements.filter(
          advertisement =>
            advertisement.showLocation.includes(user.country) ||
            advertisement.showLocation.includes(user.continent) ||
            advertisement.showLocation.includes('World')
        )
      : influencers.filter(blogger => blogger.area.find(area => area.value === user.area.value));

  const recommendationsList = useMemo(() => {
    return recommendations.map((item, index) => (
      <div key={index}>
        {user.role === 'blogger' ? (
          <AdvertisementCard card={item} />
        ) : (
          <BloggerCard influencer={item} />
        )}
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
        {user.role === 'blogger' ? 'Advertisement recommendations' : 'Influencers recommendations'}
      </h3>
      <Row className={styles.buttonsWrap}>
        <Col>
          <Button
            className={`${montserrat.className} ${styles.viewAll} text blue-hover`}
            size="medium"
            borderd="false"
            type="text"
            onClick={() =>
              user.role === 'blogger'
                ? router.push('dashboard/advertisements')
                : router.push('dashboard/influencers')
            }
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
          {recommendationsList}
        </Carousel>
      </div>
      <div className={styles.smallTabletCarousel}>
        <Carousel
          ref={sliderSmallTabletRef}
          dots={false}
          slidesToShow={2}
          infinite={recommendationsList.length < 2 ? false : true}
        >
          {recommendationsList}
        </Carousel>
      </div>
      <div className={styles.tabletCarousel}>
        <Carousel
          ref={sliderTabletRef}
          dots={false}
          slidesToShow={3}
          infinite={recommendationsList.length < 3 ? false : true}
        >
          {recommendationsList}
        </Carousel>
      </div>
      <div className={styles.desktopCarousel}>
        <Carousel
          ref={sliderRef}
          dots={false}
          slidesToShow={4}
          infinite={recommendationsList.length < 4 ? false : true}
        >
          {recommendationsList}
        </Carousel>
      </div>
    </>
  );
};
