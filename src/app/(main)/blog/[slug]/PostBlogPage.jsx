import Image from 'next/image';
import Link from 'next/link';

import { usePathname, useRouter } from 'next/navigation';

/* import { useSelector } from 'react-redux';

import { selectBlogState } from '@/redux/blog/blogSlice'; */

import { blog } from '@/mockData/blog';

import styles from './postBlogPage.module.css';
import { cinzel, roboto } from '@/utils/fonts';

export const PostBlogPage = () => {
  const slug = usePathname();
  /* const blog = useSelector(selectBlogState); */
  const router = useRouter();

  const match = slug.match(/\/([^\/]+)$/);
  const postToShow = blog.find(post => post.slug === match[1]);

  const lastPosts = blog.slice(-3);

  /* const imagePath = 'http://localhost:3030/blogImages/'; */ //заменить на переменную из .env
  return (
    <div className={styles.container}>
      <div className={styles.pageWrap}>
        {postToShow && (
          <div>
            <h2 className={`${styles.title} ${cinzel.variable}`}>{postToShow.title}</h2>
            <div className={styles.postWrap}>
              <div className={styles.imageWrap}>
                <Image
                  sizes="100vw"
                  className={styles.image}
                  width={517}
                  height={570}
                  src={postToShow.image} /* {`${imagePath}${postToShow.image}`} */
                  alt={postToShow.title}
                />
              </div>
              <p
                className={`${styles.text} ${roboto.variable}`}
                dangerouslySetInnerHTML={{ __html: postToShow.text }}
              ></p>
            </div>
            <div className={styles.buttonWrap}>
              <button onClick={() => router.push('/blog')} className={styles.button}>
                <span className={styles.circle} aria-hidden="true">
                  <span className={`${styles.icon} ${styles.arrow}`}></span>
                </span>
                <span className={`${styles.buttonText} ${roboto.variable}`}>Read More Posts</span>
              </button>
            </div>
          </div>
        )}
        <div className={styles.allPostsWrap}>
          <h3 className={`${styles.smallTitle} ${cinzel.variable}`}>Latest posts:</h3>
          <ul>
            {lastPosts.map(post => (
              <li>
                <Link href={`/blog/${post.slug}`}>
                  <Image
                    width={250}
                    height={275}
                    src={post.image} /* {`${imagePath}${post.image}`} */
                    alt={post.title}
                  />
                  <p className={`${styles.smallText} ${roboto.variable}`}>
                    {post.title.split(' ').length > 5
                      ? `${post.title.split(' ').slice(0, 4).join(' ')}...`
                      : post.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
