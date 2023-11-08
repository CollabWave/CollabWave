import { useRef } from 'react';

import Image from 'next/image';

import { useSpring, animated } from 'react-spring';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

import Carousel from 'react-multi-carousel';

import { blog } from '@/mockData/blog';

import { Section } from '@/components/Section/Section';
import { SectionTitle } from '@/components/SectionTitle.jsx/SectionTitle';
import { BlogCard } from './BlogCard';

import arrowLeft from '../../../assets/images/mainPage/svg/arrowLeft.svg';
import arrowRight from '../../../assets/images/mainPage/svg/arrowRight.svg';

import styles from './blogSection.module.css';
import 'react-multi-carousel/lib/styles.css';

export const BlogSection = () => {
  const blogTriggerRef = useRef();
  const dataRef = useIntersectionObserver(blogTriggerRef, {
    freezeOnceVisible: true,
  });

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const carouselStyle = useSpring({
    config: { duration: 2000 },
    from: { opacity: 0, bottom: '-500px' },
    to: {
      opacity: dataRef?.isIntersecting ? 1 : 0,
      bottom: dataRef?.isIntersecting ? '0px' : '-500px',
    },
  });

  return (
    <Section>
      <SectionTitle title={'BLOG'} color={'#FFD439'} animate={false} animateFromLeft={true} />
      <div ref={blogTriggerRef} />
      <animated.div style={carouselStyle} className={styles.relativeWrap}>
        <Carousel
          draggable={false}
          responsive={responsive}
          infinite={true}
          keyBoardControl={true}
          removeArrowOnDeviceType={['tablet', 'mobile']}
          containerClass={styles.list}
          arrows
          customRightArrow={
            <Image className={styles.rightArrow} priority src={arrowRight} alt="Next post" />
          }
          customLeftArrow={
            <Image className={styles.leftArrow} priority src={arrowLeft} alt="Previous post" />
          }
        >
          {blog.map((post, i) => (
            <BlogCard key={i} post={post} />
          ))}
        </Carousel>
      </animated.div>
    </Section>
  );
};
