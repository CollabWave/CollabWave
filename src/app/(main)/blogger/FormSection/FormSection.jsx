import { Section } from '@/components/Section/Section';
import { SectionTitle } from '@/components/SectionTitle.jsx/SectionTitle';

import { about__cardText } from '../../../homepage/AboutSection/aboutSection.module.css';
import styles from '../blogger.module.css';

export const FormSection = () => {
  return (
    <Section>
      <SectionTitle animate={false} color={'#82efee'} title={`AFTER PARTY`} />
      <p className={`${about__cardText} ${styles.form_text}`}>
        You can enjoy our app, earn money, and collaborate with other bloggers. The only downside is
        that it can be addictive.
      </p>
    </Section>
  );
};
