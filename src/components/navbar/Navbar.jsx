import React from 'react'
import styles from "./navbar.module.css"
import Link  from 'next/link'

function Navbar() {
    const links = [
        {
            id: 1,
            title: "Home",
            url: '/'
        },
        {
            id: 2,
            title: "Blogs",
            url: '/blogs'
        },
        {
            id: 3,
            title: "About",
            url: '/about'
        },
        {
            id: 4,
            title: "Contact",
            url: '/contact'
        },

    ]
  return (
    <div className={styles.container}>
        <Link href="/" className={styles.logo}>YuBlog</Link>

        <div className={styles.links}>
            {links.map(link => (<Link href={link.url}>{link.title}</Link>))}
            <button className={styles.logout}>Logout</button>
        </div>
    </div>
  )
}

export default Navbar