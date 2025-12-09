'use client';

import Image from 'next/image';
import styles from './HowWeDeliver.module.css';

export default function HowWeDeliver() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>How We Deliver</h2>
                    <div className={styles.textBlock}>
                        <p>
                            Every automation we deliver is backed by our frameworks — eliminate guesswork and subjectivity from every automation lifecycle stage. They make every automation measurable, repeatable, and governed by data, not opinion.
                        </p>
                        <p>
                            Our Frameworks and Platforms include:
                        </p>
                        <ul className={styles.list}>
                            <li>Future Ready Team Design Framework | AI Readiness Assessment | Reliability Scans Run | Ops Platform</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/frameworks-image.png"
                        alt="How We Deliver"
                        width={600}
                        height={500}
                        className={styles.image}
                    />
                </div>
            </div>
        </section>
    );
}
