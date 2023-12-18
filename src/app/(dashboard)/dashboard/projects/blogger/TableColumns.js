'use client';

import { Tag, Popover, Button, Input, Space } from 'antd';

import { SearchOutlined } from '@ant-design/icons';

import { setClicked } from '@/app/(dashboard)/components/ProjectsTable/ProjectsTable';

import styles from '../projects.module.css';
import { montserrat } from '@/utils/fonts';

const sorter = (a, b) => (isNaN(a) && isNaN(b) ? (a || '').localeCompare(b || '') : a - b);

export const BloggerColumns = (handleSearch, handleReset) => [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Project',
    dataIndex: 'project',
    key: 'project',
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div
        style={{
          padding: 8,
        }}
        onKeyDown={e => e.stopPropagation()}
      >
        <Input
          className={`${montserrat.className} ${styles.searchInput}`}
          placeholder={`Search project`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, 'project')}
          style={{
            marginBottom: 8,
            display: 'block',
          }}
        />
        <Space>
          <Button
            className={`${montserrat.className} ${styles.searchBtn}`}
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, 'project')}
            icon={<SearchOutlined />}
          >
            Search
          </Button>
          <Button
            className={`${montserrat.className} ${styles.searchBtn}`}
            onClick={() => clearFilters && handleReset(clearFilters)}
          >
            Reset
          </Button>
          <Button
            className={`${montserrat.className} ${styles.searchBtn}`}
            onClick={() => {
              close();
            }}
          >
            Close
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => (
      <SearchOutlined
        className="profile-input-label"
        style={{
          fontSize: '190%',
        }}
      />
    ),
    onFilter: (value, record) =>
      record['project'].toString().toLowerCase().includes(value.toLowerCase()),
    render: (text, row) => (
      <a className="security-link" href={`/dashboard/projects/${row.id}`}>
        {text}
      </a>
    ),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: text => {
      const color = text === 'active' ? '#01914e' : text === 'closed' ? '#b53a57' : '#f7b345';
      return (
        <Tag className={styles.tag} color={color}>
          {text.toUpperCase()}
        </Tag>
      );
    },
  },
  {
    title: 'Link for subscribers',
    dataIndex: 'linkForSubscribers',
    key: 'linkForSubscribers',
    render: text => {
      if (text === '') return;
      return (
        <Popover
          color="#9b9c86"
          placement="right"
          content={
            <div>
              <p className={`${styles.popoverText} ${montserrat.variable}`}>Copied to clipboard!</p>
            </div>
          }
          trigger={'click'}
        >
          <button
            className={`${styles.copyButton} copy-button`}
            onClick={() => {
              navigator.clipboard.writeText(text);
            }}
          >
            Copy
          </button>
        </Popover>
      );
    },
  },
  {
    title: 'Promo Code',
    dataIndex: 'promoCode',
    key: 'promoCode',
  },
  {
    title: 'Fulfillment',
    dataIndex: 'fulfillment',
    render: (_, row) => <p>{`${row.tasksDone}/${row.tasksToDo}`}</p>,
  },
  {
    title: 'Payment',
    dataIndex: 'payment',
    key: 'payment',
    sorter: (a, b) => sorter(Number(a.payment.slice(0, -1)), Number(b.payment.slice(0, -1))),
  },
  {
    title: ' ',
    key: 'action',
    render: (_, row) => (
      <a
        onClick={() => {
          setClicked();
        }}
        className="security-link"
      >
        Tasks and results
      </a>
    ),
  },
];
