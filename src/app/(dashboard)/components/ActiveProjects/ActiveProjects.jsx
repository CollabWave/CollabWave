import { projects } from '@/mockData/projects';

import { ProjectsTable } from '../ProjectsTable/ProjectsTable';

import personalStyles from '../../dashboard/profile/personal-info/personalInfo.module.css';
import { montserrat } from '@/utils/fonts';

export const ActiveProjects = () => {
  const activeProjects = projects.filter(project => project.status === 'active');

  return (
    <>
      <h3 className={`${personalStyles.heading} ${montserrat.className} profile-heading`}>
        In Progress
      </h3>
      <ProjectsTable projects={activeProjects} />
    </>
  );
};
