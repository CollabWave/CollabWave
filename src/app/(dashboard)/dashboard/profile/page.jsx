import { user } from '@/mockData/user';

import { BloggerProfileLeftSide } from './BloggerProfileLeftSide';
import { BrandProfileLeftSide } from './BrandProfileLeftSIde';

const ProfilePage = () => {
  return user.role === 'blogger' ? (
    <BloggerProfileLeftSide user={user} />
  ) : (
    <BrandProfileLeftSide />
  );
};

export default ProfilePage;
