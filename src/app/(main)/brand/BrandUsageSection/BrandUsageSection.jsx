import { Section } from '@/components/Section/Section';
import { SectionTitle } from '@/components/SectionTitle.jsx/SectionTitle';

import styles from '../../blogger/blogger.module.css';
import { about_cardText } from '../../../homepage/AboutSection/aboutSection.module.css';

export const BrandUsageSection = () => {
  return (
    <Section>
      <SectionTitle animate={false} color={'#82efee'} title={` HOW CAN I USE IT?`} />
      <p className={`${about_cardText} ${styles.usage_text}`}>
        You don&#39;t have to be a big brand to work with top bloggers. You can choose which famous
        and best bloggers will promote your brand. With your quality product, you can get a large
        flow of customers by partnering with bloggers on our platform.
      </p>
    </Section>
  );
};
