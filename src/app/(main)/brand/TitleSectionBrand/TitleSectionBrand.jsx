import { Section } from '@/components/Section/Section';
import { BloggerTitle } from './BloggerTitle';
import { LogoCarousel } from './LogoCarousel';

import styles from '@/components/Footer/footer.module.css';
import { blogger_btn } from '../blogger.module.css';
import { roboto } from '@/utils/fonts';

export const TitleSectionBrand = () => {
  return (
    <Section>
      <BloggerTitle />
      <LogoCarousel />
      <button className={`${styles.button} ${blogger_btn} ${roboto.variable}`}>
        Become an influencer
      </button>
    </Section>
  );
};
