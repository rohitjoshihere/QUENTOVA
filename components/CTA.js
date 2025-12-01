'use client';

import Button from './Button';
import styles from './CTA.module.css';

export default function CTA() {
    return (
        <section className={styles.cta}>
            <div className={styles.ctaOverlay}></div>
            <div className={styles.container}>
                <div className={styles.ctaContent}>
                    <h2 className={styles.ctaTitle}>Let's Redefine Efficiency Together.</h2>
                    <p className={styles.ctaDescription}>
                        Ready to transform your business? Let's start a conversation about your goals and how we can help you achieve them.
                    </p>
                    <Button showIcon={false}>Contact Us</Button>
                </div>
            </div>
        </section>
    );
}
