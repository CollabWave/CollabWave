import { Section } from '@/components/Section/Section';
import { SectionTitle } from '@/components/SectionTitle.jsx/SectionTitle';

import { about__cardText } from '../../../homepage/AboutSection/aboutSection.module.css';
import styles from '../../blogger/blogger.module.css';
import { CreateForm } from '@/components/CreateForm/CreateForm';

export const BrandFormSection = () => {
  return (
    <Section>
      <SectionTitle animate={false} color={'#82efee'} title={`AFTER PARTY`} />
      <p className={`${about__cardText} ${styles.form_text}`}>
        You can use our platform, collaborate with bloggers and increase the flow of customers,
        which will contribute to the growth of your business. The only drawback is that it can be
        addictive.
      </p>
      <CreateForm />
    </Section>
  );
};
