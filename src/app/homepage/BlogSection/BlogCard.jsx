import Link from 'next/link';
import Image from 'next/image';

import styles from './blogSection.module.css';

export const BlogCard = ({ post }) => {
  /* const imagePath = "http://localhost:3030/blogImages/";  */ //заменить на переменную из .env

  return (
    <>
      <Link className={styles.card} href={`/blog/${post.slug}`}>
        <Image
          style={{ borderRadius: '7px' }}
          width={517}
          height={570}
          src={post.image}
          /* {`${imagePath}${post.image}`} */ alt={post.title}
        />
        <p className={styles.title}>{post.title}</p>
      </Link>
    </>
  );
};
