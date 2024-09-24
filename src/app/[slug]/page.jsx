import Menu from "@/components/Menu/Menu";
import styles from "./singlepage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum sdlfhs hfahskf hak shf kahf kasdh.{" "}
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Atharva Magre</span>
              <span className={styles.date}>01.01.2024</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              impedit saepe odio eos aut eius rerum. Consequatur sunt sequi in
              dignissimos incidunt ducimus doloremque? Dolorum nisi magni iste.
              Cum, debitis?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              impedit saepe odio eos aut eius rerum. Consequatur sunt sequi in
              dignissimos incidunt ducimus doloremque? Dolorum nisi magni iste.
              Cum, debitis?
            </p>
            <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              impedit saepe odio eos aut eius rerum. Consequatur sunt sequi in
              dignissimos incidunt ducimus doloremque? Dolorum nisi magni iste.
              Cum, debitis?
            </p>
            <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
              impedit saepe odio eos aut eius rerum. Consequatur sunt sequi in
              dignissimos incidunt ducimus doloremque? Dolorum nisi magni iste.
              Cum, debitis?
            </p>
          </div>
          <div className={styles.comment}>
            <Comments/>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
