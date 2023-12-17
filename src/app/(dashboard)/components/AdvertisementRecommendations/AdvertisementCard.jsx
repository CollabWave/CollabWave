'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { Card, Button, Avatar } from 'antd';

import { CreditCardOutlined, EnvironmentOutlined } from '@ant-design/icons';

import styles from './advertisementRecommendations.module.css';
import { montserrat } from '@/utils/fonts';

export const AdvertisementCard = ({ card }) => {
  const [cardHovered, setCardHovered] = useState(false);

  const router = useRouter();

  return (
    <Card
      onMouseEnter={() => setCardHovered(true)}
      onMouseLeave={() => setCardHovered(false)}
      bordered={false}
      className={`${styles.card} secondary-background ${montserrat.className} advertisement-card`}
      cover={<img className={styles.poster} alt="advertisement poster" src={card.poster} />}
      style={cardHovered ? { backgroundImage: `url(${card.poster})` } : null}
    >
      <Button
        className={`${styles.viewButton} ghost-button`}
        type="ghost"
        onClick={() => router.push(`/dashboard/projects/${card.id}`)}
      >
        View
      </Button>
      <div>
        <div>
          <Avatar
            className={styles.avatar}
            src={card.logo}
            alt="brand logo"
            shape="circle"
            size={64}
          />
        </div>
        <h4 className={`${styles.cardTitle} heading-small`}>{card.brand}</h4>
        <div className={`${styles.cardBottomWrap} secondary-text`}>
          <div className={styles.cardDescriptionWrap}>
            <EnvironmentOutlined />
            <p>{card.location.city}</p>
          </div>
          <div className={styles.cardDescriptionWrap}>
            <CreditCardOutlined />
            <p>{card.paymentType}</p>
          </div>
        </div>
      </div>
    </Card>
  );
};
