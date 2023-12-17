'use client';

import { useState } from 'react';

import { Table, Modal } from 'antd';

import { addKeysToArray } from '@/utils/utils';

import { BloggerColumns } from '../../dashboard/projects/blogger/TableColumns';
import { TasksModal } from '../../dashboard/projects/blogger/TasksModal';

import styles from './projectsTable.module.css';

let resultsClicked = false;

export const setClicked = () => {
  resultsClicked = true;
};

export const ProjectsTable = ({ projects }) => {
  const [projectToShow, setProjectToShow] = useState('');
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
  });

  const handleTableChange = pagination => {
    return setPagination(pagination);
  };

  const projectsWithKeys = addKeysToArray(projects);
  return (
    <>
      <Table
        className={styles.table}
        columns={BloggerColumns}
        dataSource={projectsWithKeys}
        pagination={pagination}
        onChange={handleTableChange}
        onRow={r => ({
          onClick: () => {
            if (resultsClicked) setProjectToShow(r.id);
            resultsClicked = false;
          },
        })}
      />
      <Modal
        open={projectToShow}
        width={'80%'}
        footer={false}
        destroyOnClose
        onCancel={() => setProjectToShow('')}
      >
        <TasksModal projectId={projectToShow} />
      </Modal>
    </>
  );
};
