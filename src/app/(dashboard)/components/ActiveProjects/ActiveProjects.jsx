'use client';

import { useState } from 'react';

import { projects } from '@/mockData/projects';

import { ProjectsTable } from '../ProjectsTable/ProjectsTable';

import personalStyles from '../../dashboard/profile/personal-info/personalInfo.module.css';
import { montserrat } from '@/utils/fonts';

export const ActiveProjects = () => {
  const activeProjects = projects.filter(project => project.status === 'active');

  const [_, setSearchText] = useState('');

  const handleSearch = (selectedKeys, confirm) => {
    confirm();
    setSearchText(selectedKeys[0]);
  };
  const handleReset = clearFilters => {
    clearFilters();
    setSearchText('');
  };

  return (
    <>
      <h3 className={`${personalStyles.heading} ${montserrat.className} profile-heading`}>
        In Progress
      </h3>
      <ProjectsTable
        projects={activeProjects}
        handleSearch={handleSearch}
        handleReset={handleReset}
      />
    </>
  );
};
