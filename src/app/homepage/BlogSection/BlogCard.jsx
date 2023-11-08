import Link from 'next/link';
import Image from 'next/image';

import styles from './blogSection.module.css';

export const BlogCard = ({ post }) => {
  return (
    <>
      <Link className={styles.card} href={`/blog/${post.slug}`}>
        <Image width={517} height={570} src={`${post.image}`} alt={post.title} />
        <p className={styles.title}>{post.title}</p>
      </Link>
    </>
  );
};
