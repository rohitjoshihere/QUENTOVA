'use client';

import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerContent}>
                    <div className={styles.footerColumn}>
                        <div className={styles.footerLogo}>
                            <Image
                                src="/logo2.png"
                                alt="Questova Logo"
                                width={100}
                                height={100}
                                className={styles.logoImage}
                            />
                        </div>
                        <p className={styles.footerDescription}>
                            We are a team of passionate innovators dedicated to helping businesses thrive in the age of AI and automation.
                        </p>
                        <p className={styles.footerCopyright}>
                            © 2025 Questova Inc. | All Rights Reserved
                        </p>
                    </div>

                    <div className={styles.footerColumn}>
                        <h4 className={styles.footerTitle}>Services</h4>
                        <ul className={styles.footerLinks}>
                            <li><a href="#">AI Consulting</a></li>
                            <li><a href="#">Process Automation</a></li>
                            <li><a href="#">Custom Development</a></li>
                            <li><a href="#">Integration Services</a></li>
                        </ul>
                    </div>

                    <div className={styles.footerColumn}>
                        <h4 className={styles.footerTitle}>Products</h4>
                        <ul className={styles.footerLinks}>
                            <li><a href="#">AI Platform</a></li>
                            <li><a href="#">Workflow Engine</a></li>
                            <li><a href="#">Analytics Suite</a></li>
                            <li><a href="#">API Gateway</a></li>
                        </ul>
                    </div>

                    <div className={styles.footerColumn}>
                        <h4 className={styles.footerTitle}>Resources</h4>
                        <ul className={styles.footerLinks}>
                            <li><a href="#">Documentation</a></li>
                            <li><a href="#">Case Studies</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Webinars</a></li>
                        </ul>
                    </div>

                    <div className={styles.footerColumn}>
                        <h4 className={styles.footerTitle}>About Us</h4>
                        <ul className={styles.footerLinks}>
                            <li><a href="#">Our Story</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
