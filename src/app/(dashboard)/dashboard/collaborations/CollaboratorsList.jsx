import { List } from 'antd';

import { CollaboratorCard } from './CollaboratorCard';

import styles from './collaborations.module.css';

export const CollaboratorsList = ({ arr, itemsCount, columnsCount }) => {
  return (
    <List
      itemLayout="horizontal"
      grid={{ gutter: [16, 24], column: columnsCount }}
      className={`${styles.list} text`}
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
          <CollaboratorCard influencer={item} />
        </li>
      )}
    />
  );
};
