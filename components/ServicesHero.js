'use client';

import Image from 'next/image';
import styles from './ServicesHero.module.css';

export default function ServicesHero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        End-to-End Business <br className={styles.desktopBr} />
                        Efficiency Services <br className={styles.desktopBr} />
                        Focused on Intelligent <br className={styles.desktopBr} />
                        Automation
                    </h1>
                    <p className={styles.description}>
                        At Quentova, we believe that technology should
                        <br className={styles.desktopBr} /> make your business run better — not make your
                        <br className={styles.desktopBr} /> business about technology.
                        <br className={styles.desktopBr} /> Our end-to-end automation services are built
                        <br className={styles.desktopBr} /> around one clear goal: to deliver measurable,
                        <br className={styles.desktopBr} /> predictable business impact.
                    </p>
                </div>
                <div className={styles.image}>
                    <img src='/hero2.jpg' alt="hero-image" />
                </div>
            </div>
        </section>
    );
}
