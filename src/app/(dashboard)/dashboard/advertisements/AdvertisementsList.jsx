import { List } from 'antd';

import { AdvertisementCard } from '../../components/AdvertisementCard/AdvertisementCard';

import styles from './advertisements.module.css';

export const AdvertisementList = ({ arr, columnCount, itemsCount }) => {
  return (
    <List
      itemLayout="horizontal"
      grid={{ gutter: [16, 24], column: columnCount }}
      className="text"
      pagination={
        arr.length > itemsCount
          ? {
              onChange: page => {
                console.log(page);
              },
              pageSize: itemsCount,
            }
          : false
      }
      dataSource={arr}
      renderItem={item => (
        <li className={`${styles.card} secondary-background advertisement-card`} key={item.id}>
          <AdvertisementCard advertisement={item} />
        </li>
      )}
    />
  );
};
