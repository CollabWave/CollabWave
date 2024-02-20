'use client';

import { useState } from 'react';

import { influencers } from '@/mockData/influencers';

import { CategoriesFilter } from '../../components/CategoriesFilter/CategoriesFilter';
import { SocialNetworksFilter } from '../../components/SocialNetworksFilter/SocialNetworksFilter';
import { CollaboratorsList } from './CollaboratorsList';

import styles from './collaborations.module.css';
import sectionStyles from '../../components/AdvertisementRecommendations/advertisementRecommendations.module.css';
import { montserrat } from '@/utils/fonts';

const CollaborationsPage = () => {
  const [openFilters, setOpenFilters] = useState(false);
  const [areaFilters, setAreaFilters] = useState([]);
  const [networkFilters, setNetworkFilters] = useState([]);

  const filteredInfluencers = influencers
    .filter(influencer => {
      if (networkFilters.length > 0) {
        return networkFilters.some(filter => Object.keys(influencer.socialLinks).includes(filter));
      }
      return true;
    })
    .filter(influencer => {
      if (areaFilters.length > 0) {
        return influencer.area.some(el => areaFilters.includes(el.value));
      }
      return true;
    });

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
              setAreaFilters([]);
              setNetworkFilters([]);
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
              setAreaFilters([]);
              setNetworkFilters([]);
            }}
          >
            {openFilters ? 'Close filters' : 'Open filters'}
          </button>
        </li>
      </ul>
      {openFilters && (
        <>
          <p className={`${styles.text} ${styles.filterText}`}>Choose the social network:</p>
          <SocialNetworksFilter filters={networkFilters} setFilters={setNetworkFilters} />
          <p className={`${styles.text} ${styles.filterText}`}>Choose the blogging area:</p>
          <CategoriesFilter setFilters={setAreaFilters} />
        </>
      )}
      {areaFilters.length === 0 && networkFilters.length === 0 ? (
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
