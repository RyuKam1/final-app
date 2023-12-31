import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./postframe.module.css";

function postFrame({ blogPost, postId }) {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          // src={`/components/api/covers/${postId}.png`}
          src={`/covers/${postId}.png`}
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
        <a href= {`/blogs/${postId}`}>
        <button className={styles.btn}>Read More</button>
        </a>
      </div>
    </div>
  );
}

export default postFrame;
