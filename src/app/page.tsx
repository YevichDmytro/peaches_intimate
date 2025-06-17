import Link from 'next/link';
import React from 'react';
import styles from './page.module.scss';

const page = () => {
  return (
    <div className={styles.page}>
      <ol className={styles.menu}>
        <li className={styles.menuItem}>
          <Link href='/log-in'>
            Login
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href='/product'>
            Product
          </Link>
        </li>
        <li className={styles.menuItem}>
          <Link href='/product-list'>
            Product List
          </Link>
        </li>
      </ol>
    </div>
  );
};

export default page;
