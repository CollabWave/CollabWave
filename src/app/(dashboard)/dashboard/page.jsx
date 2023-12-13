import { user } from '@/mockData/user';

import { AdvertisementRecommendations } from '../components/AdvertisementRecommendations/AdvertisementRecommendations';
import { BloggerRecommendations } from '../components/BloggerRecommendations/BloggerRecommendations';

const Dashboard = () => {
  return user.role === 'blogger' ? <AdvertisementRecommendations /> : <BloggerRecommendations />;
};

export default Dashboard;
