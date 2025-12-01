'use client';

import Image from 'next/image';
import Button from './Button';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <div className={styles.heroText}>
                    <h1 className={styles.heroTitle}>
                        Building Future Ready Enterprise with Intelligent Automations & Agentic AI
                    </h1>
                    <p className={styles.heroDescription}>
                        Bridging the gap between automation hype and real business efficiency.
                    </p>
                    <Button>Let's Talk Efficiency</Button>
                </div>
                <div className={styles.heroImageContainer}>
                    <Image
                        src="/hero.png"
                        alt="Professional working with laptop"
                        width={800}
                        height={600}
                        priority
                        className={styles.heroImage}
                    />
                </div>
            </div>
        </section>
    );
}
