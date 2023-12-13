import Image from 'next/image';

import { useState, useRef } from 'react';

import { useSpring, a } from 'react-spring';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

import { Section } from '@/components/Section/Section';
import { SectionTitle } from '@/components/SectionTitle.jsx/SectionTitle';

import styles from './featuresSection.module.css';
import { roboto } from '../../../utils/fonts';

import cpa from '../../../assets/images/mainPage/cpa.webp';
import cpc from '../../../assets/images/mainPage/cpc.webp';
import cps from '../../../assets/images/mainPage/cps.webp';
import cpi from '../../../assets/images/mainPage/cpi.webp';
import cpm from '../../../assets/images/mainPage/cpm.webp';
import fixPrice from '../../../assets/images/mainPage/fixPrice.webp';

export const FeaturesSection = () => {
  const resizeRef = useRef();
  const featuresRef = useIntersectionObserver(resizeRef, {
    freezeOnceVisible: true,
  });

  const [flipped, set] = useState(false);
  const [card, setCard] = useState('cpa');

  const textStyle = useSpring({
    config: { duration: 5500 },
    from: { opacity: 0 },
    to: {
      opacity: featuresRef?.isIntersecting ? 1 : 0,
    },
    delay: 1000,
  });

  const borderStyle = useSpring({
    config: { duration: 3500 },
    from: { borderColor: 'transparent' },
    to: {
      borderColor: featuresRef?.isIntersecting ? '#82EFEE' : 'transparent',
    },
    delay: 2000,
  });

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <Section>
      <div ref={resizeRef} />
      <a.div
        style={{ ...borderStyle, borderWidth: '1px', borderStyle: 'solid' }}
        className={styles.features__titleBox}
      >
        <a.div style={textStyle} className={`${styles.features__wrap} ${styles.features__border}`}>
          <SectionTitle animate={false} color={'#82EFEE'} title={'FEATURES'} />
        </a.div>
        <a.p
          style={{ ...textStyle, ...borderStyle }}
          className={`${styles.features__description} ${roboto.variable} ${styles.features__wrap}`}
        >
          Our flexible solutions include easy project management, audience growth and
          <br /> revenue growth.
          <br />
          With a flexible CPA model (cost per action) we ensure that every action and every
          <br /> effort is rewarded.
          <br /> We provide you effective collaborations, support the entire path of advertising
          projects from idea to implementation through our management.
        </a.p>
      </a.div>
      <div className={styles.features__listWrap}>
        {card === 'cpa' && (
          <a.div
            className={styles.features__card}
            style={
              flipped
                ? {
                    opacity,
                    transform,
                    rotateX: '180deg',
                  }
                : {
                    opacity: opacity.to(o => 1 - o),
                    transform,
                  }
            }
          >
            <Image src={cpa} alt="Cost per action" />
            <p className={`${styles.features__cardText} ${roboto.variable}`}>
              (Cost Per Action) is the payment for advertising only for the completed target action.
              The target action can be such as: CPC (cost per click), CPS (cost per sale), CPI (cost
              per install), CPM (Cost Per Mille), and we have also added an option for FixPrice.
            </p>
          </a.div>
        )}
        {card === 'cpc' && (
          <a.div
            className={styles.features__card}
            style={
              flipped
                ? {
                    opacity,
                    transform,
                    rotateX: '180deg',
                  }
                : {
                    opacity: opacity.to(o => 1 - o),
                    transform,
                  }
            }
          >
            <Image src={cpc} alt="Cost per click" />
            <p className={`${styles.features__cardText} ${roboto.variable}`}>
              CPC (Cost Per Click): Payment is made for each click on the advertisement. Effective
              for increasing website traffic or drawing attention to specific content.
            </p>
          </a.div>
        )}
        {card === 'cps' && (
          <a.div
            className={styles.features__card}
            style={
              flipped
                ? {
                    opacity,
                    transform,
                    rotateX: '180deg',
                  }
                : {
                    opacity: opacity.to(o => 1 - o),
                    transform,
                  }
            }
          >
            <Image src={cps} alt="Cost per sale" />
            <p className={`${styles.features__cardText} ${roboto.variable}`}>
              CPS (Cost Per Sale): Advertisers pay only upon an actual sale of a product or service,
              ensuring high conversion rates and risk minimization.
            </p>
          </a.div>
        )}
        {card === 'cpi' && (
          <a.div
            className={styles.features__card}
            style={
              flipped
                ? {
                    opacity,
                    transform,
                    rotateX: '180deg',
                  }
                : {
                    opacity: opacity.to(o => 1 - o),
                    transform,
                  }
            }
          >
            <Image src={cpi} alt="Cost per install" />
            <p className={`${styles.features__cardText} ${roboto.variable}`}>
              CPI (Cost Per Install): Calculation is based on the number of app or program
              installations after clicking the ad. Ideal for promoting mobile applications.
            </p>
          </a.div>
        )}
        {card === 'cpm' && (
          <a.div
            className={styles.features__card}
            style={
              flipped
                ? {
                    opacity,
                    transform,
                    rotateX: '180deg',
                  }
                : {
                    opacity: opacity.to(o => 1 - o),
                    transform,
                  }
            }
          >
            <Image src={cpm} alt="Cost per mile" />
            <p className={`${styles.features__cardText} ${roboto.variable}`}>
              CPM (Cost Per Mille): Advertisers pay for every 1000 ad impressions. Suitable for
              creating broad brand visibility and awareness.
            </p>
          </a.div>
        )}
        {card === 'fixPrice' && (
          <a.div
            className={styles.features__card}
            style={
              flipped
                ? {
                    opacity,
                    transform,
                    rotateX: '180deg',
                  }
                : {
                    opacity: opacity.to(o => 1 - o),
                    transform,
                  }
            }
          >
            <Image src={fixPrice} alt="Fixed price" />
            <p className={`${styles.features__cardText} ${roboto.variable}`}>
              FixPrice (Fixed Price): An option with a predetermined price for a specific action,
              such as a post or video publication. Provides transparency and budget predictability.
            </p>
          </a.div>
        )}
        <ul className={styles.features__list}>
          <li
            onMouseOver={() => {
              if (card === 'cpa') return;
              set(state => !state);
              setCard('cpa');
            }}
            className={`${styles.features__listItem} ${roboto.variable}`}
          >
            CPA - Cost Per Action
          </li>
          <li
            onMouseOver={() => {
              if (card === 'cpc') return;
              set(state => !state);
              setCard('cpc');
            }}
            className={`${styles.features__listItem} ${roboto.variable}`}
          >
            CPC - Cost Per Click
          </li>
          <li
            onMouseOver={() => {
              if (card === 'cps') return;
              set(state => !state);
              setCard('cps');
            }}
            className={`${styles.features__listItem} ${roboto.variable}`}
          >
            CPS - Cost Per Sale
          </li>
          <li
            onMouseOver={() => {
              if (card === 'cpi') return;
              set(state => !state);
              setCard('cpi');
            }}
            className={`${styles.features__listItem} ${roboto.variable}`}
          >
            CPI - Cost Per Install
          </li>
          <li
            onMouseOver={() => {
              if (card === 'cpm') return;
              set(state => !state);
              setCard('cpm');
            }}
            className={`${styles.features__listItem} ${roboto.variable}`}
          >
            CPM - Cost Per Mille
          </li>
          <li
            onMouseOver={() => {
              if (card === 'fixPrice') return;
              set(state => !state);
              setCard('fixPrice');
            }}
            className={`${styles.features__listItem} ${roboto.variable}`}
          >
            FixPrice - Fixed Price
          </li>
        </ul>
      </div>
    </Section>
  );
};
