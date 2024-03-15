import { List } from 'antd';

import { BloggerCard } from './BloggerCard';

import styles from './bloggerCard.module.css';

export const BloggersList = ({ arr, itemsCount, columnsCount }) => {
  return (
    <List
      itemLayout="horizontal"
      grid={{ gutter: [16, 24], column: columnsCount }}
      className="text"
      pagination={
        arr.length > itemsCount
          ? {
             /*  onChange: page => {
                console.log(page);
              }, */
              pageSize: itemsCount,
            }
          : false
      }
      dataSource={arr}
      renderItem={item => (
        <li className={`${styles.card} secondary-background advertisement-card`} key={item.id}>
          <BloggerCard influencer={item} />
        </li>
      )}
    />
  );
};
