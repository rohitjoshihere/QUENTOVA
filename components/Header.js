'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Button from './Button';
import styles from './Header.module.css';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when clicking on a link
    const handleLinkClick = () => {
        setMobileMenuOpen(false);
    };

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [mobileMenuOpen]);

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <div className={styles.logo}>
                        <Image
                            src="/logo.png"
                            alt="Questova Logo"
                            width={160}
                            height={45}
                            className={styles.logoImage}
                        />
                    </div>

                    {/* Desktop Menu */}
                    <ul className={styles.navMenu}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#solutions">Solutions</a></li>
                        <li><a href="#about">About Us</a></li>
                    </ul>

                    {/* Desktop Button */}
                    <div className={styles.desktopButton}>
                        <Button variant="small">Get in Touch</Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={`${styles.hamburger} ${mobileMenuOpen ? styles.active : ''}`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </nav>

                {/* Mobile Menu */}
                <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ''}`}>
                    <ul className={styles.mobileNavList}>
                        <li><a href="#home" onClick={handleLinkClick}>Home</a></li>
                        <li><a href="#services" onClick={handleLinkClick}>Services</a></li>
                        <li><a href="#solutions" onClick={handleLinkClick}>Solutions</a></li>
                        <li><a href="#about" onClick={handleLinkClick}>About Us</a></li>
                    </ul>
                    <div className={styles.mobileButton}>
                        <Button variant="small">Get in Touch</Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
