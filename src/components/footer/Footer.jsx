import React from 'react'
import styles from "./footer.module.css";
import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
        <Image src="/logo.png" alt="lama blog" width={50} height={50} />
        <h1 className={styles.logoText}>Digital Diary</h1>
        </div>
        <p className={styles.desc}>
        Your go-to platform for insightful articles and stories.
        Explore a wide range of topics, stay updated with the latest trends, and dive into a world of knowledge with BlogOn.
        </p>
        <p>© 2024 Digital Diary. All Rights Reserved.</p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/x.png" alt="" width={18} height={18} />
          <Image src="/linkedin.png" alt="" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
      <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">X</Link>
          <Link href="/">LinkedIn</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
