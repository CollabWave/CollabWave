'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

import { RightOutlined } from '@ant-design/icons';

import { advertisements } from '@/mockData/advertisements';
import { user } from '@/mockData/user';

import { AdvertisementList } from './AdvertisementsList';
import { CategoriesFilter } from '../../components/CategoriesFilter/CategoriesFilter';

import styles from './advertisements.module.css';
import sectionStyles from '../../components/AdvertisementRecommendations/advertisementRecommendations.module.css';
import personalStyles from '../profile/personal-info/personalInfo.module.css';
import { montserrat } from '@/utils/fonts';

const AdvertisementOffersPage = () => {
  const [viewAllChoosen, setViewAllChoosen] = useState(false);
  const [openFilters, setOpenFilters] = useState(false);
  const [filters, setFilters] = useState([]);
  const searchParams = useSearchParams();

  const performSearch = searchParams.toString() !== '';

  const userAreaAdvertisements = advertisements.reduce((acc, advertisement) => {
    user.area.find(el => el.value === advertisement.category) ? acc.push(advertisement) : acc;
    return acc;
  }, []);

  const filteredAdvertisements = advertisements.filter(advertisement =>
    filters.includes(advertisement.category)
  );

  const searchAdvertisements = () => {
    const searchParameter = searchParams.toString().slice(0, searchParams.toString().indexOf('='));
    const query = searchParams.toString().slice(searchParams.toString().indexOf('=') + 1);
    let filteredAdvertisements;
    switch (searchParameter) {
      case 'name':
        filteredAdvertisements = advertisements.filter(el =>
          el.project.toLowerCase().includes(query.toLowerCase())
        );
        break;
      case 'brand':
        filteredAdvertisements = advertisements.filter(el =>
          el.brand.toLowerCase().includes(query.toLowerCase())
        );
        break;
      case 'category':
        filteredAdvertisements = advertisements.filter(el =>
          el.category.toLowerCase().includes(query.toLowerCase())
        );
        break;
      case 'location':
        filteredAdvertisements = advertisements.filter(
          el =>
            el.location.country.toLowerCase().includes(query.toLowerCase()) ||
            el.location.city.toLowerCase().includes(query.toLowerCase())
        );
      default:
        break;
    }
    return filteredAdvertisements;
  };

  return (
    <div className={sectionStyles.sectionWrap}>
      <h3 className={`${personalStyles.heading} ${montserrat.className} profile-heading`}>
        {performSearch
          ? `Found ${searchAdvertisements().length} result(s) corresponding to ${searchParams
              .toString()
              .slice(searchParams.toString().indexOf('=') + 1)}`
          : 'Advertisements'}
      </h3>
      {performSearch ? null : (
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
      )}
      {!viewAllChoosen && (
        <>
          <div className={styles.mobileList}>
            <AdvertisementList
              arr={performSearch ? searchAdvertisements() : userAreaAdvertisements}
              itemsCount={4}
              columnCount={1}
            />
          </div>
          <div className={styles.tabletSmallList}>
            <AdvertisementList
              arr={performSearch ? searchAdvertisements() : userAreaAdvertisements}
              itemsCount={4}
              columnCount={2}
            />
          </div>
          <div className={styles.tabletList}>
            <AdvertisementList
              arr={performSearch ? searchAdvertisements() : userAreaAdvertisements}
              itemsCount={6}
              columnCount={3}
            />
          </div>
          <div className={styles.desktopList}>
            <AdvertisementList
              arr={performSearch ? searchAdvertisements() : userAreaAdvertisements}
              itemsCount={8}
              columnCount={4}
            />
          </div>
        </>
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
            <>
              <div className={styles.mobileList}>
                <AdvertisementList arr={advertisements} itemsCount={4} columnCount={1} />
              </div>
              <div className={styles.tabletSmallList}>
                <AdvertisementList arr={advertisements} itemsCount={4} columnCount={2} />
              </div>
              <div className={styles.tabletList}>
                <AdvertisementList arr={advertisements} itemsCount={6} columnCount={3} />
              </div>
              <div className={styles.desktopList}>
                <AdvertisementList arr={advertisements} itemsCount={8} columnCount={4} />
              </div>
            </>
          ) : (
            <>
              <div className={styles.mobileList}>
                <AdvertisementList arr={filteredAdvertisements} itemsCount={4} columnCount={1} />
              </div>
              <div className={styles.tabletSmallList}>
                <AdvertisementList arr={filteredAdvertisements} itemsCount={4} columnCount={2} />
              </div>
              <div className={styles.tabletList}>
                <AdvertisementList arr={filteredAdvertisements} itemsCount={6} columnCount={3} />
              </div>
              <div className={styles.desktopList}>
                <AdvertisementList arr={filteredAdvertisements} itemsCount={8} columnCount={4} />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default AdvertisementOffersPage;
