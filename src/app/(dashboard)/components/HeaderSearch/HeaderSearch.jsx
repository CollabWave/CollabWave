'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { Modal, Dropdown, Checkbox } from 'antd';

import { SearchOutlined, SlidersOutlined } from '@ant-design/icons';

import { user } from '@/mockData/user';

import styles from './headerSearch.module.css';
import { montserrat } from '@/utils/fonts';

export const HeaderSearch = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterOption, setFilterOption] = useState('');
  const [query, setQuery] = useState('');

  const router = useRouter();

  const handleOnClickOption = e => {
    e.stopPropagation();
  };

  const items = [
    {
      key: '1',
      label: (
        <div role="button" className="search-dropdown" onClick={e => handleOnClickOption(e)}>
          <Checkbox
            checked={filterOption === 'name'}
            onChange={e => {
              if (e.target.checked) {
                setFilterOption('name');
                return;
              }
              setFilterOption('');
            }}
          >
            Name
          </Checkbox>
        </div>
      ),
    },
    {
      key: '2',
      label: (
        <div role="button" className="search-dropdown" onClick={e => handleOnClickOption(e)}>
          <Checkbox
            checked={filterOption === 'brand'}
            onChange={e => {
              if (e.target.checked) {
                setFilterOption('brand');
                return;
              }
              setFilterOption('');
            }}
          >
            Brand
          </Checkbox>
        </div>
      ),
    },
    {
      key: '3',
      label: (
        <div role="button" className="search-dropdown" onClick={e => handleOnClickOption(e)}>
          <Checkbox
            checked={filterOption === 'area'}
            onChange={e => {
              if (e.target.checked) {
                setFilterOption('area');
                return;
              }
              setFilterOption('');
            }}
          >
            Area
          </Checkbox>
        </div>
      ),
    },
    {
      key: '4',
      label: (
        <div role="button" className="search-dropdown" onClick={e => handleOnClickOption(e)}>
          <Checkbox
            checked={filterOption === 'location'}
            onChange={e => {
              if (e.target.checked) {
                setFilterOption('location');
                return;
              }
              setFilterOption('');
            }}
          >
            Location
          </Checkbox>
        </div>
      ),
    },
  ];

  const findAdvertisements = () => {
    if (filterOption === '' || filterOption === 'name') {
      router.push(`/dashboard/advertisements?name=${query}`);
      return;
    }
    switch (filterOption) {
      case 'brand':
        router.push(`/dashboard/advertisements?brand=${query}`);
        break;
      case 'area':
        router.push(`/dashboard/advertisements?category=${query}`);
        break;
      case 'location':
        router.push(`/dashboard/advertisements?location=${query}`);
      default:
        break;
    }
  };

  return (
    <>
      <div className={styles.wraper}>
        <input
          className={`${styles.input} ${montserrat.className} header__search`}
          placeholder={user.role === 'brand' ? 'Find influencer' : 'Find advertisement'}
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              findAdvertisements();
            }
          }}
        />
        <SearchOutlined
          className={`${styles.icon} ${styles.desktopIcon} icon__search`}
          onClick={() => findAdvertisements()}
        />
        <Dropdown
          className={`${montserrat.className}`}
          trigger="click"
          menu={{
            items,
          }}
          placement="bottom"
        >
          <SlidersOutlined className={`${styles.icon} ${styles.filterDesktopIcon} icon__search`} />
        </Dropdown>
      </div>
      <SearchOutlined
        className={`${styles.mobileIcon} icon__search`}
        onClick={() => setIsModalOpen(true)}
      />
      <Modal
        open={isModalOpen}
        closable={false}
        footer={null}
        onCancel={() => setIsModalOpen(false)}
        destroyOnClose
      >
        <SearchOutlined
          className={`${styles.icon} ${styles.modalIcon} icon__search`}
          onClick={() => {
            findAdvertisements();
            setIsModalOpen(false);
          }}
        />
        <input
          className={`${styles.mobileInput} ${montserrat.className} header__searchMobile`}
          placeholder={user.role === 'brand' ? 'Find influencer' : 'Find advertisement'}
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={e => {
            if (e.key === 'Enter') {
              findAdvertisements();
              setIsModalOpen(false);
            }
          }}
        />
        <Dropdown
          className={`${montserrat.className}`}
          trigger="click"
          menu={{
            items,
          }}
          placement="bottomLeft"
        >
          <SlidersOutlined className={`${styles.icon} ${styles.filterMobileIcon} icon__search`} />
        </Dropdown>
      </Modal>
    </>
  );
};
