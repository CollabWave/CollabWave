'use client';

import { Tag, Popover } from 'antd';

import { setClicked } from './BloggerProjects';

import styles from '../projects.module.css';
import { montserrat } from '@/utils/fonts';

export const BloggerColumns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Project',
    dataIndex: 'project',
    key: 'project',
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
