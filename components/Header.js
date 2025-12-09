'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from './Button';
import styles from './Header.module.css';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

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

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Solutions', href: '/solutions' },
        { name: 'About Us', href: '/about' },
    ];

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <div className={styles.logo}>
                        <Link href="/">
                            <Image
                                src="/logo.png"
                                alt="Questova Logo"
                                width={160}
                                height={45}
                                className={styles.logoImage}
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <ul className={styles.navMenu}>
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    className={`${styles.navLink} ${pathname === item.href ? styles.active : ''}`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
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
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <Link
                                    href={item.href}
                                    onClick={handleLinkClick}
                                    className={`${styles.mobileNavLink} ${pathname === item.href ? styles.active : ''}`}
                                >
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className={styles.mobileButton}>
                        <Button variant="small">Get in Touch</Button>
                    </div>
                </div>
            </div>
        </header>
    );
}
