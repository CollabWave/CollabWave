'use client';

import { useState } from 'react';

import { Table, Modal } from 'antd';

import { BloggerColumns } from './TableColumns';
import { TasksModal } from './TasksModal';

import { projects } from '@/mockData/projects';
import { sortAgainstStatus, addKeysToArray } from '@/utils/utils';

import styles from '../projects.module.css';
import personalStyles from '../../profile/personal-info/personalInfo.module.css';
import { montserrat } from '@/utils/fonts';

let resultsClicked = false;

export const setClicked = () => {
  resultsClicked = true;
};

export const BloggerProjects = () => {
  const [projectToShow, setProjectToShow] = useState('');
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 5,
  });

  const handleTableChange = pagination => {
    return setPagination(pagination);
  };

  const projectsWithKeys = addKeysToArray(projects);

  const sortedProjects = sortAgainstStatus(projectsWithKeys);

  return (
    <>
      <div className={`${styles.wrap} section-wrap`}>
        <h3 className={`${personalStyles.heading} ${montserrat.className} profile-heading`}>
          Projects
        </h3>
        <Table
          className={styles.table}
          columns={BloggerColumns}
          dataSource={sortedProjects}
          pagination={pagination}
          onChange={handleTableChange}
          onRow={r => ({
            onClick: () => {
              if (resultsClicked) setProjectToShow(r.id);
              resultsClicked = false;
            },
          })}
        />
      </div>
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
