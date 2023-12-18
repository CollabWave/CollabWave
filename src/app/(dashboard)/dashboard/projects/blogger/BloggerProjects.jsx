'use client';

import { useState } from 'react';

import { sortAgainstStatus } from '@/utils/utils';

import { ProjectsTable } from '@/app/(dashboard)/components/ProjectsTable/ProjectsTable';

import personalStyles from '../../profile/personal-info/personalInfo.module.css';
import { montserrat } from '@/utils/fonts';
import { projects } from '@/mockData/projects';

export const BloggerProjects = () => {
  const sortedProjects = sortAgainstStatus(projects);

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
      <div className="right-main-wrap section-wrap">
        <h3 className={`${personalStyles.heading} ${montserrat.className} profile-heading`}>
          Projects
        </h3>
        <ProjectsTable
          projects={sortedProjects}
          handleSearch={handleSearch}
          handleReset={handleReset}
        />
      </div>
    </>
  );
};
