import { user } from '@/mockData/user';

import { Recommendations } from '../components/DashboardRecommendations/Recommendations';
import { ActiveProjects } from '../components/ActiveProjects/ActiveProjects';

import styles from '../components/DashboardRecommendations/recommendations.module.css';

const Dashboard = () => {
  return (
    <div className={styles.sectionWrap}>
      <Recommendations />
      <ActiveProjects />
    </div>
  );
};

export default Dashboard;
