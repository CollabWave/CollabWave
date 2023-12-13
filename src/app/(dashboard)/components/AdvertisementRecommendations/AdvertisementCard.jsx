import Image from 'next/image';

import { Card, Button, Avatar } from 'antd';

import { CreditCardOutlined, EnvironmentOutlined } from '@ant-design/icons';

export const AdvertisementCard = ({ card }) => {
  return (
    <Card>
      <Image width={250} height={354} src={card.poster} alt="advertisement poster" />
      <Button type="ghost">View</Button>
      <div>
        <div>
          <Avatar src={card.logo} alt="brand logo" shape="circle" size={64} />
        </div>
        <h4>{card.brand}</h4>
        <div>
          <EnvironmentOutlined />
          <p>{card.location.city}</p>
        </div>
        <div>
          <CreditCardOutlined />
          <p>{card.paymentType}</p>
        </div>
      </div>
    </Card>
  );
};
