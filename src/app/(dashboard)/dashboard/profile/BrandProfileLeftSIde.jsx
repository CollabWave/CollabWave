import { Col, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import styles from './profile.module.css';

export const BrandProfileLeftSide = () => {
  return (
    <Col className={styles.leftSide} md={7}>
      <div className={styles.avatarWraper}>
        <Avatar icon={<UserOutlined />} shape="circle" alt="Profile picture" size={150} />
      </div>
    </Col>
  );
};
