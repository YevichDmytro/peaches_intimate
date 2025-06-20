'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from '@/app/page.module.scss';

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/log-in');
  }, [router]);

  return (
    <div className={styles.page}>
      <ol className={styles.menu}>
        <li className={styles.menuItem}>
          <Link href='/log-in'>Login</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href='/product'>Product</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href='/product-list'>Product List</Link>
        </li>
      </ol>
    </div>
  );
};

export default Page;
