'use client';

import { useRouter } from 'next/navigation';

import { Section } from '@/components/Section/Section';
import { BloggerTitle } from './BloggerTitle';
import { LogoCarousel } from './LogoCarousel';

import { useDispatch } from 'react-redux';
import { setClientType, setRegistrationStep } from '@/redux/auth/authSlice';

import styles from '@/components/Footer/footer.module.css';
import { blogger_btn } from '../blogger.module.css';
import { roboto } from '@/utils/fonts';

const TitleSectionBlogger = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleBloggerButtonClick = e => {
    e.preventDefault();
    dispatch(setClientType('blog'));
    dispatch(setRegistrationStep(1));
    router.push('/registration');
  };

  return (
    <Section>
      <BloggerTitle />
      <LogoCarousel />
      <button
        className={`${styles.button} ${blogger_btn} ${roboto.variable}`}
        onClick={handleBloggerButtonClick}
      >
        Create a blogger account
      </button>
    </Section>
  );
};

export default TitleSectionBlogger;
