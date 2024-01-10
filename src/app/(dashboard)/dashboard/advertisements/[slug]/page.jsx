'use client';

import { Image, Flex, Col, Avatar, Collapse } from 'antd';
import { TrademarkOutlined } from '@ant-design/icons';

import { usePathname } from 'next/navigation';

import { advertisements } from '@/mockData/advertisements';
import { getLocationsFromArr } from '@/utils/utils';
import { paymentTypes } from '@/utils/common';

import { PaymentCollapse } from './components/PaymentCollapse';
import { ProductCollapse } from './components/ProductCollapse';
import { PostsCollaps } from './components/PostsCollaps';
import { ContentCollapse } from './components/ContentCollapse';
import { InvolvingCollapse } from './components/InvolvingCollapse';

import layoutStyles from '../../profile/profile.module.css';
import personalStyles from '../../profile/personal-info/personalInfo.module.css';
import styles from './advertisement-slug.module.css';
import { montserrat } from '@/utils/fonts';

const ProjectDescriptionPage = () => {
  const pathname = usePathname();

  const id = pathname.match(/\/([^\/]+)$/);
  const advertisementToShow = advertisements.find(
    advertisement => advertisement.id.toString() === id[1]
  );

  const locations = getLocationsFromArr(advertisementToShow.showLocation);

  const projectDescription = [
    {
      key: '1',
      label: 'Actions and payments',
      children: <PaymentCollapse advertisement={advertisementToShow} />,
    },
    {
      key: '2',
      label: 'Product and its advantages',
      children: <ProductCollapse advertisement={advertisementToShow} />,
    },
    {
      key: '3',
      label: 'Posts and ideas',
      children: <PostsCollaps advertisement={advertisementToShow} />,
    },
    {
      key: '4',
      label: 'Required content',
      children: <ContentCollapse advertisement={advertisementToShow} />,
    },
    {
      key: '5',
      label: 'Involving mechanics',
      children: <InvolvingCollapse advertisement={advertisementToShow} />,
    },
  ];

  return (
    <div className={`${layoutStyles.wrap} ${montserrat.className}`}>
      <Col className={`${layoutStyles.leftSide} profile-card`} md={7}>
        <div className={layoutStyles.avatarWraper}>
          {advertisementToShow.logo ? (
            <Avatar
              shape="circle"
              size={150}
              src={<img src={advertisementToShow.logo} alt="brand logo" />}
            />
          ) : (
            <Avatar icon={<TrademarkOutlined />} shape="circle" alt="brand logo" size={150} />
          )}
        </div>
        <Flex vertical gap="middle">
          <Flex vertical gap={5}>
            <p className={`${styles.smallHeading} secondary-text`}>Customer</p>
            <p className={styles.text}>{advertisementToShow.brand}</p>
          </Flex>
          <Flex vertical gap={5}>
            <p className={`${styles.smallHeading} secondary-text`}>Web-page</p>
            <a
              target="_blank"
              className={`${styles.text} profile-nav-link`}
              href={advertisementToShow.webPage}
            >
              {advertisementToShow.webPage}
            </a>
          </Flex>
          <Flex vertical gap={5}>
            <p className={`${styles.smallHeading} secondary-text`}>Category</p>
            <p className={styles.text}>{advertisementToShow.category}</p>
          </Flex>
          <Flex vertical gap={5}>
            <p className={`${styles.smallHeading} secondary-text`}>Payment type</p>
            <p className={styles.text}>
              {advertisementToShow.paymentType} - {paymentTypes[advertisementToShow.paymentType]}
            </p>
          </Flex>
          <Flex vertical gap={5}>
            <p className={`${styles.smallHeading} secondary-text`}>Available in locations</p>
            <p className={styles.text}>{locations}</p>
          </Flex>
        </Flex>
      </Col>
      <Col md={15} className={`${personalStyles.rightSide} profile-card`}>
        <h3 className={`${personalStyles.heading} ${montserrat.className} profile-heading`}>
          {advertisementToShow.project || advertisementToShow.brand}
        </h3>
        <Collapse
          ghost
          items={projectDescription}
          className={`${montserrat.className} ${styles.text} text-imp`}
        />
      </Col>
    </div>
  );
};

export default ProjectDescriptionPage;
