'use client'

import styles from './styles.module.css';
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Nav() {
    const pathname = usePathname();

    const links = [
        { href: "/home", label: "Home" },
        { href: "/register", label: "Register" },
        { href: "/login", label: "Login" },
        { href: "/items", label: "Items" },
        { href: "/create_item", label: "Create Item" },
    ]
    return (
        <nav className={styles.container}>
            <ul className={styles.nav_links}>
                {links.map((link, index) => (
                    <li key={index}>
                        <Link
                            href={link.href}
                            passHref
                            className={`${styles.nav_link} ${pathname === link.href ? styles.active_link : ''}`}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}