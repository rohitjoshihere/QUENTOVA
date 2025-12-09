'use client';

import styles from './SharedSuccess.module.css';

export default function SharedSuccess() {
    return (
        <section className={styles.section}>
            <div className={styles.overlay}></div>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Aligned for Shared Success</h2>
                    <p className={styles.description}>
                        Our engagement philosophy goes beyond contracts — it&apos;s built on commitment and partnership.
                        Each model is governed by three guiding principles that define how we work:
                    </p>
                    <ul className={styles.list}>
                        <li>1) Outcome linked pricing models</li>
                        <li>2) Aligned objectives</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
