'use client';

import { useState } from 'react';

import { Table, Modal } from 'antd';

import { addKeysToArray } from '@/utils/utils';

import { BloggerColumns } from '../../dashboard/projects/blogger/TableColumns';
import { TasksModal } from '../../dashboard/projects/blogger/tasksModal/TasksModal';

import styles from './projectsTable.module.css';

let resultsClicked = false;

export const setClicked = () => {
  resultsClicked = true;
};

export const ProjectsTable = ({ projects, handleSearch, handleReset }) => {
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
        columns={BloggerColumns(handleSearch, handleReset)}
        dataSource={projectsWithKeys}
        pagination={pagination}
        scroll={{ x: 800 }}
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
