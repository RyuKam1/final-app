"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";

function SinglePage({ params }) {
  const [singlePost, setSinglePost] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((response) => response.json())
      .then((json) => {
        setSinglePost(json);
      });
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{singlePost.title}</h1>
      <br />
      <div className={styles.imageContainer}>
        <Image src={`/covers/${params.id}.png`} alt="cover" fill={true} className={styles.img}/>
      </div>
      <br />
      <p className={styles.desc}>{singlePost.body}</p>
      <br />
    </div>
  );
}

export default SinglePage;
