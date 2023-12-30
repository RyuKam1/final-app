import React from "react";
import Image from "next/image";
import styles from "./postframe.module.css";

function postFrame({ blogPost, widthMode }) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src={"/cover.png"}
          alt="cover"
          fill={true}
          className={styles.img}
        />
      </div>
      <div className={styles.info}>
        <h2 className={styles.title}>{blogPost.title}</h2>
        <div className={styles.descContainer}>
          <p className={styles.desc}>{blogPost.body}</p>
        </div>
        <button className={styles.btn}>Read More</button>
      </div>
    </div>
  );
}

export default postFrame;
