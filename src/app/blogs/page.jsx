"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import PostFrame from "@/components/postframe/Postframe";

function Blogs() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, []);

  return (
    <div>
      <div className={styles.container}>
        {posts.map((post) => (
          <>
            {/* <Link href={`/dashboard/posts/${post.id}`}>{post.title}</Link> */}
            <PostFrame blogPost = {post} key={post.id}/>
            <br />
          </>
        ))}
      </div>
    </div>
  );
}

export default Blogs;