'use client';

import { useState } from 'react';

import { List } from 'antd';

import { influencers } from '@/mockData/influencers';

import { CategoriesFilter } from '../../components/CategoriesFilter/CategoriesFilter';
import { CollaboratorCard } from './CollaboratorCard';

import styles from './collaborations.module.css';
import sectionStyles from '../../components/AdvertisementRecommendations/advertisementRecommendations.module.css';
import { montserrat } from '@/utils/fonts';

const CollaborationsPage = () => {
  const [openFilters, setOpenFilters] = useState(false);
  const [filters, setFilters] = useState([]);

  const filteredInfluencers = influencers.filter(influencer =>
    influencer.area.some(el => filters.includes(el.value))
  );

  return (
    <div className={`${sectionStyles.sectionWrap} ${montserrat.className}`}>
      <ul className={styles.buttonsWrap}>
        <li>
          <button
            className={`${montserrat.className} ${styles.button} ${
              !openFilters ? 'text-blue' : null
            } reversed-blue-hover`}
            onClick={() => {
              setOpenFilters(false);
              setFilters([]);
            }}
          >
            All
          </button>
        </li>
        <li>
          <button
            className={`${montserrat.className} ${styles.button} ${
              openFilters ? 'text-blue' : null
            } reversed-blue-hover`}
            onClick={() => {
              setOpenFilters(!openFilters);
              setFilters([]);
            }}
          >
            {openFilters ? 'Close filters' : 'Open filters'}
          </button>
        </li>
      </ul>
      {openFilters && <CategoriesFilter setFilters={setFilters} />}
      {filters.length === 0 ? (
        <List
          itemLayout="horizontal"
          grid={{ gutter: [16, 24], column: 4 }}
          className="text"
          pagination={
            influencers.length > 8
              ? {
                  onChange: page => {
                    console.log(page);
                  },
                  pageSize: 8,
                }
              : false
          }
          dataSource={influencers}
          renderItem={item => (
            <li className={`${styles.card} secondary-background advertisement-card`} key={item.id}>
              <CollaboratorCard influencer={item} />
            </li>
          )}
        />
      ) : (
        <List
          itemLayout="horizontal"
          grid={{ gutter: [16, 24], column: 4 }}
          className="text"
          pagination={
            filteredInfluencers.length > 8
              ? {
                  onChange: page => {
                    console.log(page);
                  },
                  pageSize: 8,
                }
              : false
          }
          dataSource={filteredInfluencers}
          renderItem={item => (
            <li className={`${styles.card} secondary-background advertisement-card`} key={item.id}>
              <CollaboratorCard influencer={item} />
            </li>
          )}
        />
      )}
    </div>
  );
};

export default CollaborationsPage;
