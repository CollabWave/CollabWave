'use client';

import { useState } from 'react';

import { influencers } from '@/mockData/influencers';

import { CategoriesFilter } from '../../components/CategoriesFilter/CategoriesFilter';
import { CollaboratorsList } from './CollaboratorsList';

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
        <>
          <div className={styles.mobileList}>
            <CollaboratorsList arr={influencers} itemsCount={4} columnCount={1} />
          </div>
          <div className={styles.tabletSmallList}>
            <CollaboratorsList arr={influencers} itemsCount={4} columnCount={2} />
          </div>
          <div className={styles.tabletList}>
            <CollaboratorsList arr={influencers} itemsCount={6} columnCount={3} />
          </div>
          <div className={styles.desktopList}>
            <CollaboratorsList arr={influencers} itemsCount={8} columnCount={4} />
          </div>
        </>
      ) : (
        <>
          <div className={styles.mobileList}>
            <CollaboratorsList arr={filteredInfluencers} itemsCount={4} columnCount={1} />
          </div>
          <div className={styles.tabletSmallList}>
            <CollaboratorsList arr={filteredInfluencers} itemsCount={4} columnCount={2} />
          </div>
          <div className={styles.tabletList}>
            <CollaboratorsList arr={filteredInfluencers} itemsCount={6} columnCount={3} />
          </div>
          <div className={styles.desktopList}>
            <CollaboratorsList arr={filteredInfluencers} itemsCount={8} columnCount={4} />
          </div>
        </>
      )}
    </div>
  );
};

export default CollaborationsPage;
