import { user } from '@/mockData/user';

import { AdvertisementRecommendations } from '../components/AdvertisementRecommendations/AdvertisementRecommendations';
import { BloggerRecommendations } from '../components/BloggerRecommendations/BloggerRecommendations';
import { ActiveProjects } from '../components/ActiveProjects/ActiveProjects';

import styles from '../components/AdvertisementRecommendations/advertisementRecommendations.module.css';

const Dashboard = () => {
  return (
    <div className={styles.sectionWrap}>
      {user.role === 'blogger' ? <AdvertisementRecommendations /> : <BloggerRecommendations />}
      <ActiveProjects />
    </div>
  );
};

export default Dashboard;
