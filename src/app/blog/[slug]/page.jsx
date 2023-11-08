'use client';

import { usePathname } from 'next/navigation';

export default function BlogPage() {
  const slug = usePathname();
  return <p>Post: {slug}</p>;
}
