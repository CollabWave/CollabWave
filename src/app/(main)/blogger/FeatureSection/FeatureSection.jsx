import { Section } from '@/components/Section/Section';
import { SectionTitle } from '@/components/SectionTitle.jsx/SectionTitle';
import Image from 'next/image';

import styles from '../blogger.module.css';
import { about__cardText } from '../../../homepage/AboutSection/aboutSection.module.css';

import connection from '../../../../assets/images/svg/connection.svg';
import mouthpiece from '../../../../assets/images/svg/mouthpiece.svg';
import moneyFace from '../../../../assets/images/svg/moneyFace.svg';
import analytics from '../../../../assets/images/svg/analytics.svg';
import earth from '../../../../assets/images/svg/earth.svg';

export const FeatureSection = () => {
  return (
    <Section>
      <SectionTitle animate={false} color={'#FFD439'} title={`FEATURES`} />

      <div className={styles.features_list_wrapper}>
        <ul className={styles.features_list}>
          <li>
            <Image src={connection} alt="Connection icon" priority />
            <p className={`${styles.features_text} ${about__cardText} `}>
              Our platform is where creativity meets commerce. For our bloggers, we provide many
              opportunities.
            </p>
          </li>
          <li>
            <Image src={mouthpiece} alt="Mouthpiece icon" priority />
            <p className={`${styles.features_text} ${about__cardText} `}>
              Visibility: With our broad brand partnerships, your ideas and content will get the
              attention they deserve. You will be able to share your unique voice with millions of
              people around.
            </p>
          </li>
          <li>
            <Image src={moneyFace} alt="Money mouth face icon" priority />
            <p className={`${styles.features_text} ${about__cardText} `}>
              Earnings: We value your creative energy and offer fair monetization. With our
              platform, your hobby can become a source of additional income, and sometimes the main
              income.
            </p>
          </li>
          <li>
            <Image src={analytics} alt="Analytics icon" priority />
            <p className={`${styles.features_text} ${about__cardText} `}>
              Analytics: We provide you with unique tools to analyse your content. You will be able
              to study the reactions of your audience, understand their interests and better adapt
              to their needs.
            </p>
          </li>
          <li>
            <Image src={earth} alt="Earth icon" priority />
            <p className={`${styles.features_text} ${about__cardText} `}>
              Network: The platform connects you with like-minded people and industry professionals.
              Sharing experiences, learning new things, and maybe even inspiration for future
              projects.
            </p>
          </li>
        </ul>
      </div>
    </Section>
  );
};
