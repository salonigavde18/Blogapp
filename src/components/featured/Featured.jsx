import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";
const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Saloni here!</b>
        <br />
        <p className={styles.title2}>Discover my stories and creative ideas.</p>
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Get to know me -
          </h1>
          <p className={styles.postDesc}>
          This Full Stack Blog Application, built using Next.js 14 and Prisma, offers a seamless platform for creating, managing, and exploring blog posts. With a focus on performance and scalability, it features a modern UI, user authentication, and efficient data handling. Explore articles, leave comments, and stay updated with the latest posts!
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
