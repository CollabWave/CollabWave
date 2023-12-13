import { user } from '@/mockData/user';

import { BloggerProjects } from './blogger/BloggerProjects';
import { BrandProjects } from './brand/BrandProjects';

const ProjectsPage = () => {
  return user.role === 'blogger' ? <BloggerProjects /> : <BrandProjects />;
};

export default ProjectsPage;
