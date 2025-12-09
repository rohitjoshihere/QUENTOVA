'use client';

import Image from 'next/image';
import styles from './ServicesHero.module.css';

export default function ServicesHero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1 className={styles.title}>
                        End-to-End Business <br />
                        Efficiency Services <br />
                        Focused on Intelligent <br />
                        Automation
                    </h1>
                    <p className={styles.description}>
                        At Quentova, we believe that technology should
                        <br /> make your business run better — not make your 
                        <br /> business about technology.
                        <br /> Our end-to-end automation services are built 
                        <br /> around one clear goal: to deliver measurable, 
                        <br /> predictable business impact.
                    </p>
                </div>
            </div>
        </section>
    );
}
