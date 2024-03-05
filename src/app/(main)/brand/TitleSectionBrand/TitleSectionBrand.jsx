'use client';

import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { setClientType, setRegistrationStep } from '@/redux/auth/authSlice';

import { Section } from '@/components/Section/Section';
import { BrandTitle } from './BrandTitle';
import { LogoCarouselBrand } from './LogoCarouselBrand';

import { roboto } from '@/utils/fonts';
import styles from '@/components/Footer/footer.module.css';
import { blogger_btn } from '../../blogger/blogger.module.css';

export const TitleSectionBrand = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleBrandButtonClick = e => {
    e.preventDefault();
    dispatch(setClientType('brand'));
    dispatch(setRegistrationStep(1));
    router.push('/registration');
  };
  return (
    <Section>
      <BrandTitle />
      <LogoCarouselBrand />
      <button
        className={`${styles.button} ${blogger_btn} ${roboto.variable}`}
        onClick={handleBrandButtonClick}
      >
        Create a brand account
      </button>
    </Section>
  );
};
