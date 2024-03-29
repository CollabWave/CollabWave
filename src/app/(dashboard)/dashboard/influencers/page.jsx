'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

import { RightOutlined } from '@ant-design/icons';

import { influencers } from '@/mockData/influencers';
import { user } from '@/mockData/user';

import { BloggersList } from '../../components/BloggerCard/BloggersList';
import { CategoriesFilter } from '../../components/CategoriesFilter/CategoriesFilter';

import sectionStyles from '../../components/DashboardRecommendations/recommendations.module.css';
import personalStyles from '../profile/personal-info/personalInfo.module.css';
import listsStyles from '../advertisements/advertisements.module.css';
import { montserrat } from '@/utils/fonts';

export default function InfluencersPage() {
  const [viewAllChoosen, setViewAllChoosen] = useState(false);
  const [openFilters, setOpenFilters] = useState(false);
  const [filters, setFilters] = useState([]);
  const searchParams = useSearchParams();

  const performSearch = searchParams.toString() !== '';

  const areaInfluencers = influencers.filter(blogger =>
    blogger.area.find(area => area.value === user.area.value)
  );

  const filteredInfluencers = influencers.filter(blogger =>
    blogger.area.some(area => filters.includes(area.value))
  );

  const searchInfluencers = () => {
    const searchParameter = searchParams.toString().slice(0, searchParams.toString().indexOf('='));
    const query = searchParams.toString().slice(searchParams.toString().indexOf('=') + 1);
    let filteredInfluencers;
    switch (searchParameter) {
      case 'name':
        filteredInfluencers = influencers.filter(
          el =>
            el.firstName.toLowerCase().includes(query.toLowerCase()) ||
            el.lastName.toLowerCase().includes(query.toLowerCase()) ||
            el.nickname.toLowerCase().includes(query.toLowerCase())
        );
        break;
      case 'category':
        filteredInfluencers = influencers.filter(el =>
          el.area.find(category => category.value.includes(query.toLowerCase()))
        );
        break;
      case 'location':
        filteredInfluencers = influencers.filter(el =>
          el.location.toLowerCase().includes(query.toLowerCase())
        );
      default:
        break;
    }
    return filteredInfluencers;
  };
  return (
    <div className={sectionStyles.sectionWrap}>
      <h3 className={`${personalStyles.heading} ${montserrat.className} profile-heading`}>
        {performSearch
          ? `Found ${searchInfluencers().length} result(s) corresponding to ${searchParams
              .toString()
              .slice(searchParams.toString().indexOf('=') + 1)}`
          : 'Influencers'}
      </h3>
      {performSearch ? null : (
        <ul className={`${listsStyles.menuWrap} ${montserrat.className}`}>
          <li
            onClick={() => setViewAllChoosen(false)}
            className={`${listsStyles.menuItem} ${
              !viewAllChoosen ? 'sider__list_item sider__list_item_active' : 'sider__list_item'
            }`}
          >
            Available in your area
          </li>
          <li
            onClick={() => setViewAllChoosen(true)}
            style={{ display: 'flex', alignItems: 'center', gap: '10px' }}
            className={`${listsStyles.menuItem} ${
              viewAllChoosen ? 'sider__list_item sider__list_item_active' : 'sider__list_item'
            }`}
          >
            All <RightOutlined />
          </li>
        </ul>
      )}
      {!viewAllChoosen && (
        <>
          <div className={listsStyles.mobileList}>
            <BloggersList
              arr={performSearch ? searchInfluencers() : areaInfluencers}
              itemsCount={4}
              columnCount={1}
            />
          </div>
          <div className={listsStyles.tabletSmallList}>
            <BloggersList
              arr={performSearch ? searchInfluencers() : areaInfluencers}
              itemsCount={4}
              columnCount={2}
            />
          </div>
          <div className={listsStyles.tabletList}>
            <BloggersList
              arr={performSearch ? searchInfluencers() : areaInfluencers}
              itemsCount={6}
              columnCount={3}
            />
          </div>
          <div className={listsStyles.desktopList}>
            <BloggersList
              arr={performSearch ? searchInfluencers() : areaInfluencers}
              itemsCount={8}
              columnCount={4}
            />
          </div>
        </>
      )}
      {viewAllChoosen && (
        <>
          <button
            className={`${montserrat.className} ${listsStyles.filtersButton} text-blue`}
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
              <div className={listsStyles.mobileList}>
                <BloggersList arr={influencers} itemsCount={4} columnCount={1} />
              </div>
              <div className={listsStyles.tabletSmallList}>
                <BloggersList arr={influencers} itemsCount={4} columnCount={2} />
              </div>
              <div className={listsStyles.tabletList}>
                <BloggersList arr={influencers} itemsCount={6} columnCount={3} />
              </div>
              <div className={listsStyles.desktopList}>
                <BloggersList arr={influencers} itemsCount={8} columnCount={4} />
              </div>
            </>
          ) : (
            <>
              <div className={listsStyles.mobileList}>
                <BloggersList arr={filteredInfluencers} itemsCount={4} columnCount={1} />
              </div>
              <div className={listsStyles.tabletSmallList}>
                <BloggersList arr={filteredInfluencers} itemsCount={4} columnCount={2} />
              </div>
              <div className={listsStyles.tabletList}>
                <BloggersList arr={filteredInfluencers} itemsCount={6} columnCount={3} />
              </div>
              <div className={listsStyles.desktopList}>
                <BloggersList arr={filteredInfluencers} itemsCount={8} columnCount={4} />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
