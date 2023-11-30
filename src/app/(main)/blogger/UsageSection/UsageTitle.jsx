import styles from '@/components/SectionTitle.jsx/SectionTitle.module.css';
import { usage_title } from '../blogger.module.css';

export const UsageTitle = () => {
  return (
    <>
      <h1 className={`${styles.title} ${usage_title}`}>HOW CAN I USE IT?</h1>
    </>
  );
};
