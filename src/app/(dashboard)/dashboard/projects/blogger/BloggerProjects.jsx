import { sortAgainstStatus } from '@/utils/utils';

import { ProjectsTable } from '@/app/(dashboard)/components/ProjectsTable/ProjectsTable';

import personalStyles from '../../profile/personal-info/personalInfo.module.css';
import { montserrat } from '@/utils/fonts';
import { projects } from '@/mockData/projects';

export const BloggerProjects = () => {
  const sortedProjects = sortAgainstStatus(projects);

  return (
    <>
      <div className="right-main-wrap section-wrap">
        <h3 className={`${personalStyles.heading} ${montserrat.className} profile-heading`}>
          Projects
        </h3>
        <ProjectsTable projects={sortedProjects} />
      </div>
    </>
  );
};
