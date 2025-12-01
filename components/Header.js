'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from './Button';
import styles from './Header.module.css';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <div className={styles.logo}>
                        <Image
                            src="/logo.jpg"
                            alt="Questova Logo"
                            width={160}
                            height={45}
                            className={styles.logoImage}
                        />
                    </div>
                    <ul className={styles.navMenu}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#solutions">Solutions</a></li>
                        <li><a href="#about">About Us</a></li>
                    </ul>
                    <Button variant="small">Get in Touch</Button>
                </nav>
            </div>
        </header>
    );
}
