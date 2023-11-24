import { SearchOutlined } from '@ant-design/icons';

import styles from './headerSearch.module.css';
import { montserrat } from '@/utils/fonts';

export const HeaderSearch = () => {
  return (
    <div className={styles.wraper}>
      <input
        className={`${styles.input} ${montserrat.className} header__search`}
        placeholder="Find influencer"
      />
      <SearchOutlined className="icon__search" />
    </div>
  );
};
