'use client';

import Button from './Button';
import styles from './BusinessImpact.module.css';

export default function BusinessImpact() {
    return (
        <section className={styles.businessImpact}>
            <div className={styles.container}>
                <div className={styles.impactContent}>
                    <div className={styles.impactIllustration}>
                        <div className={styles.illustrationWrapper}>
                            <img src="/section2.png" alt="Business Impact" />
                        </div>
                    </div>
                    <div className={styles.impactText}>
                        <h2 className={styles.sectionTitle}>Business Impact. Not Just Automation.</h2>
                        <p className={styles.sectionDescription}>
                            At Questova, we don't just implement AI or automate processes—we transform how businesses operate. Our solutions are designed to deliver measurable ROI through increased efficiency, reduced costs, and enhanced decision-making capabilities.
                        </p>
                        <p className={styles.sectionDescription}>
                            We work closely with your team to understand your unique challenges and craft solutions that integrate seamlessly with your existing infrastructure, ensuring minimal disruption and maximum value from day one.
                        </p>
                        <Button>Discover Our Impact</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
