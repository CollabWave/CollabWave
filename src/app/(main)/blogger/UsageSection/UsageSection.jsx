import { Section } from '@/components/Section/Section';
import { about__cardText } from '../../../homepage/AboutSection/aboutSection.module.css';
import styles from '../blogger.module.css';
import { SectionTitle } from '@/components/SectionTitle.jsx/SectionTitle';

export const UsageSection = () => {
  return (
    <Section>
      <SectionTitle animate={false} color={'#82efee'} title={` HOW CAN I USE IT?`} />
      <p className={`${about__cardText} ${styles.usage_text}`}>
        You don&#39;t need a massive following to work with top-tier brands. Even if you have only
        <span className={styles.usage_span}>1000 followers</span> , you can still choose which
        famous global brands to promote as an influencer. With your loyal followers, you can earn a
        commission on every sale you generate.
      </p>
    </Section>
  );
};
