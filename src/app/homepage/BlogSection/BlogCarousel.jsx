import Image from 'next/image';

import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { selectBlogState } from '@/redux/blog/blogSlice';

import Carousel from 'react-multi-carousel';

import { BlogCard } from './BlogCard';

import arrowLeft from '../../../assets/images/mainPage/svg/arrowLeft.svg';
import arrowRight from '../../../assets/images/mainPage/svg/arrowRight.svg';

import styles from './blogSection.module.css';
import 'react-multi-carousel/lib/styles.css';
import { fetchBlogPosts } from '@/redux/blog/blogOperations';

export const BlogCarousel = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlogPosts());
  }, []);

  const blog = useSelector(selectBlogState);

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

  return (
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
  );
};
