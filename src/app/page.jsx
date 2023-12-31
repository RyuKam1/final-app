"use client"

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Postframe from "@/components/postframe/Postframe";

function Main() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json.slice(0, 6)));
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>Stay Curious.</h1>
          <p className={styles.desc}>
            Discover stories, thinking, and expertise from writers on any topic.
          </p>
          <a href="/blogs">
          <button className={styles.btn}>Start Reading</button>
          </a>
        </div>
      </div>
      <div className={styles.popularBlogs}>
        <h2 className={styles.blogsTitle}>Discover Popular Blogs</h2>
        <div className={styles.blogs}>

            {posts.map((post, index) => (
              <div key={index}>
                <Postframe blogPost={post} postId={post.id}/>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
