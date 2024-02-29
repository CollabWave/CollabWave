'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useState } from 'react';

/* import { useSelector } from 'react-redux';

import { selectBlogState } from '@/redux/blog/blogSlice'; */

import { blog } from '@/mockData/blog';

import search from '../../../assets/images/svg/search.svg';

import styles from './blog.module.css';
import { cinzel, roboto } from '@/utils/fonts';

export const BlogMainPage = () => {
  /* const blog = useSelector(selectBlogState); */
  const [filteredPosts, setFilteredPosts] = useState(blog);
  const [query, setQuery] = useState('');

  /* const imagePath = 'http://localhost:3030/blogImages/'; */ //заменить на переменную из .env
  return (
    <div className={styles.container}>
      <h2 className={`${styles.title} ${cinzel.variable}`}>Blog</h2>
      <div className={styles.upperWrap}>
        <ul className={styles.buttonsWrap}>
          <li>
            <button
              className={`${styles.allPostsButton} ${roboto.variable}`}
              type="button"
              onClick={() => setFilteredPosts(blog)}
            >
              All posts
            </button>
          </li>
          <li>
            <button
              className={`${styles.allPostsButton} ${roboto.variable}`}
              type="button"
              onClick={() => setFilteredPosts(blog.filter(post => post.category === 'collabwave'))}
            >
              Our news
            </button>
          </li>
          <li>
            <button
              className={`${styles.allPostsButton} ${roboto.variable}`}
              type="button"
              onClick={() => setFilteredPosts(blog.filter(post => post.category === 'bloggers'))}
            >
              Bloggers
            </button>
          </li>
          <li>
            <button
              className={`${styles.allPostsButton} ${roboto.variable}`}
              type="button"
              onClick={() => setFilteredPosts(blog.filter(post => post.category === 'brands'))}
            >
              Brands
            </button>
          </li>
        </ul>

        <form
          onSubmit={e => {
            e.preventDefault();
            setFilteredPosts(
              blog.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
            );
          }}
          className={styles.inputWrap}
        >
          <Image className={styles.searchIcon} src={search} priority width={22} height={22} />

          <input
            className={`${styles.input} ${roboto.variable}`}
            type="search"
            placeholder="Search post"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </form>
      </div>
      <ul className={styles.postsWrap}>
        {filteredPosts.map(post => (
          <li key={post.slug} className={styles.postLi}>
            <Link href={`/blog/${post.slug}`}>
              <div className={styles.post}>
                <Image
                  className={styles.image}
                  width={320}
                  height={353}
                  src={post.image}/* {`${imagePath}${post.image}`} */
                  alt={post.title}
                />
                <p className={`${styles.postTitle} ${roboto.variable}`}>{post.title}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
