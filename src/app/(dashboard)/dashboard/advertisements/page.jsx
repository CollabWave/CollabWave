'use client';

import { useState } from 'react';

import { List } from 'antd';
import { RightOutlined } from '@ant-design/icons';

import { advertisements } from '@/mockData/advertisements';
import { user } from '@/mockData/user';

import { AdvertisementCard } from '../../components/AdvertisementCard/AdvertisementCard';
import { CategoriesFilter } from '../../components/CategoriesFilter/CategoriesFilter';

import styles from './advertisements.module.css';
import sectionStyles from '../../components/AdvertisementRecommendations/advertisementRecommendations.module.css';
import personalStyles from '../profile/personal-info/personalInfo.module.css';
import { montserrat } from '@/utils/fonts';

const AdvertisementOffersPage = () => {
  const [viewAllChoosen, setViewAllChoosen] = useState(false);
  const [openFilters, setOpenFilters] = useState(false);
  const [filters, setFilters] = useState([]);

  const userAreaAdvertisements = advertisements.reduce((acc, advertisement) => {
    user.area.find(el => el.value === advertisement.category) ? acc.push(advertisement) : acc;
    return acc;
  }, []);

  const filteredAdvertisements = advertisements.filter(advertisement =>
    filters.includes(advertisement.category)
  );

  return (
    <div className={sectionStyles.sectionWrap}>
      <h3 className={`${personalStyles.heading} ${montserrat.className} profile-heading`}>
        Advertisements
      </h3>
      <ul className={`${styles.menuWrap} ${montserrat.className}`}>
        <li
          onClick={() => setViewAllChoosen(false)}
          className={`${styles.menuItem} ${
            !viewAllChoosen ? 'sider__list_item sider__list_item_active' : 'sider__list_item'
          }`}
        >
          Available in your area
        </li>
        <li
          onClick={() => setViewAllChoosen(true)}
          style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
          className={`${styles.menuItem} ${
            viewAllChoosen ? 'sider__list_item sider__list_item_active' : 'sider__list_item'
          }`}
        >
          All <RightOutlined />
        </li>
      </ul>
      {!viewAllChoosen && (
        <List
          itemLayout="horizontal"
          grid={{ gutter: [16, 24], column: 4 }}
          className="text"
          pagination={
            userAreaAdvertisements.length > 8
              ? {
                  onChange: page => {
                    console.log(page);
                  },
                  pageSize: 8,
                }
              : false
          }
          dataSource={userAreaAdvertisements}
          renderItem={item => (
            <li className={`${styles.card} secondary-background advertisement-card`} key={item.id}>
              <AdvertisementCard advertisement={item} />
            </li>
          )}
        />
      )}
      {viewAllChoosen && (
        <>
          <button
            className={`${montserrat.className} ${styles.filtersButton} text-blue`}
            onClick={() => {
              setOpenFilters(!openFilters);
              setFilters([]);
            }}
          >
            {openFilters ? 'Close filters' : 'Open filters'}
          </button>
          {openFilters && <CategoriesFilter setFilters={setFilters} />}
          {filters.length === 0 ? (
            <List
              itemLayout="horizontal"
              grid={{ gutter: [16, 24], column: 4 }}
              className="text"
              pagination={
                advertisements.length > 8
                  ? {
                      onChange: page => {
                        console.log(page);
                      },
                      pageSize: 8,
                    }
                  : false
              }
              dataSource={advertisements}
              renderItem={item => (
                <li
                  className={`${styles.card} secondary-background advertisement-card`}
                  key={item.id}
                >
                  <AdvertisementCard advertisement={item} />
                </li>
              )}
            />
          ) : (
            <List
              itemLayout="horizontal"
              grid={{ gutter: [16, 24], column: 4 }}
              className="text"
              pagination={
                filteredAdvertisements.length > 8
                  ? {
                      onChange: page => {
                        console.log(page);
                      },
                      pageSize: 8,
                    }
                  : false
              }
              dataSource={filteredAdvertisements}
              renderItem={item => (
                <li
                  className={`${styles.card} secondary-background advertisement-card`}
                  key={item.id}
                >
                  <AdvertisementCard advertisement={item} />
                </li>
              )}
            />
          )}
        </>
      )}
    </div>
  );
};

export default AdvertisementOffersPage;
