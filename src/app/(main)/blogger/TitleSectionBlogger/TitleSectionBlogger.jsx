'use client';
import Link from 'next/link';
import { Section } from '@/components/Section/Section';
import { BloggerTitle } from './BloggerTitle';
import { LogoCarousel } from './LogoCarousel';
import RegistrationForm from '../../../(auth)/registrationForm/RegistrationForm';

import { useDispatch, useSelector } from 'react-redux';
import { setClientType, setRegistrationStep } from '@/redux/auth/authSlice';

import styles from '@/components/Footer/footer.module.css';
import { blogger_btn } from '../blogger.module.css';
import { roboto } from '@/utils/fonts';

const TitleSectionBlogger = () => {
  const dispatch = useDispatch();
  const clientType = useSelector(state => state.auth.clientType);
  const registrationStep = useSelector(state => state.auth.registrationStep);

  const handleNextClick = () => {
    dispatch(setRegistrationStep(1));
    console.log('blahblah');
  };
  const handleClientSelection = selectedClient => {
    dispatch(setClientType(selectedClient));
    console.log('tratra');
  };

  return (
    <Section>
      <BloggerTitle title={`FOR BLOGERS `} />
      <LogoCarousel />
      <Link href="registration">
        <button
          className={`${styles.button} ${blogger_btn} ${roboto.variable}`}
          // onClick={() => {
          //   handleClientSelection('blog');
          //   handleNextClick();
          // }}
        >
          Become an influencer
        </button>
      </Link>
    </Section>
  );
};

export default TitleSectionBlogger;
