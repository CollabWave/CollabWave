import { SearchOutlined } from '@ant-design/icons';
import { user } from '@/mockData/user';

import styles from './headerSearch.module.css';
import { montserrat } from '@/utils/fonts';

export const HeaderSearch = () => {
  return (
    <div className={styles.wraper}>
      <input
        className={`${styles.input} ${montserrat.className} header__search`}
        placeholder={user.role === 'brand' ? 'Find influencer' : 'Find advertisement'}
      />
      <SearchOutlined className="icon__search" />
    </div>
  );
};
