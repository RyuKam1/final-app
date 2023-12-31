import React from 'react'
import styles from "./navbar.module.css"
import Link  from 'next/link'
import NavLink from './navLink/NavLink'

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
            {links.map(link => (
            <NavLink item={link} key={link.id}/>
            ))}
        </div>
    </div>
  )
}

export default Navbar