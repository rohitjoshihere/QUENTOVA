'use client';

import Image from 'next/image';
import Button from './Button';
import styles from './WhyQuestova.module.css';

export default function WhyQuestova() {
    return (
        <section className={styles.whyQuestova}>
            <div className={styles.container}>
                <div className={styles.whyContent}>
                    <div className={styles.whyText}>
                        <h2 className={styles.sectionTitle}>Why Questova?</h2>
                        <p className={styles.sectionDescription}>
                            Because we're more than just another AI company. We're your strategic partner in digital transformation, combining technical excellence with deep business acumen.
                        </p>
                        <ul className={styles.whyList}>
                            <li>
                                <strong>Proven Track Record:</strong> Successfully delivered 100+ enterprise solutions across healthcare, finance, retail, and manufacturing sectors.
                            </li>
                            <li>
                                <strong>Innovation-First Mindset:</strong> Our R&D team stays ahead of the curve, ensuring you benefit from the latest advancements in AI and automation.
                            </li>
                            <li>
                                <strong>End-to-End Support:</strong> From strategy and design to implementation and ongoing optimization, we're with you every step of the way.
                            </li>
                            <li>
                                <strong>Measurable Results:</strong> Our clients see an average of 40% efficiency gains and 30% cost reduction within the first year.
                            </li>
                        </ul>
                        <Button>Partner With Us</Button>
                    </div>
                    <div className={styles.whyImage}>
                        <div className={styles.whyImageWrapper}>
                            <Image
                                src="/why-image.png"
                                alt="Business professionals discussing"
                                width={600}
                                height={600}
                            />
                        </div>
                        <div className={`${styles.blob} ${styles.blob6}`}></div>
                        <div className={`${styles.blob} ${styles.blob7}`}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
