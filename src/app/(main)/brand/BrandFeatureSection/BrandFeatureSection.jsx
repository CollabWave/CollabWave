import { Section } from '@/components/Section/Section';
import { SectionTitle } from '@/components/SectionTitle.jsx/SectionTitle';
import Image from 'next/image';

import connection from '../../../../assets/images/svg/connection.svg';
import mouthpiece from '../../../../assets/images/svg/mouthpiece.svg';
import moneyFace from '../../../../assets/images/svg/moneyFace.svg';
import analytics from '../../../../assets/images/svg/analytics.svg';
import earth from '../../../../assets/images/svg/earth.svg';

import { about__cardText } from '../../../homepage/AboutSection/aboutSection.module.css';
import styles from '../../blogger/blogger.module.css';

export const BrandFeatureSection = () => {
  return (
    <Section>
      <SectionTitle animate={false} color={'#FFD439'} title={`FEATURES`} />
      <div className={styles.features_list_wrapper}>
        <ul className={styles.features_list}>
          <li>
            <Image src={connection} alt="Connection icon" />
            <p className={`${styles.features_text} ${about__cardText} `}>
              Our platform is where business meets creativity. We provide many opportunities for our
              brands.
            </p>
          </li>
          <li>
            <Image src={mouthpiece} alt="Mouthpiece icon" />
            <p className={`${styles.features_text} ${about__cardText} `}>
              Visibility: Thanks to our extensive partnerships with bloggers, your products and
              services will get the attention they deserve. Your brand will be able to gain more
              exposure and reach millions of people.
            </p>
          </li>
          <li>
            <Image src={moneyFace} alt="Money mouth face icon" />
            <p className={`${styles.features_text} ${about__cardText} `}>
              Earning: We value your business and offer honest monetization. With our platform, your
              brand can save time in finding a blogger who will bring you customers, which will
              increase your income and popularity.
            </p>
          </li>
          <li>
            <Image src={analytics} alt="Analytics icon" />
            <p className={`${styles.features_text} ${about__cardText} `}>
              Analytics: We provide you unique blogger selection tools. You can choose it according
              to the criteria you need, as well as find reviews about the blogger.
            </p>
          </li>
          <li>
            <Image src={earth} alt="Earth icon" />
            <p className={`${styles.features_text} ${about__cardText} `}>
              Network: The platform connects you with bloggers and professionals in your field,
              saving you time and guaranteeing your money.
            </p>
          </li>
        </ul>
      </div>
    </Section>
  );
};
