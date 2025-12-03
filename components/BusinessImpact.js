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
                            At Quentova, business impact comes first. AI is a means, not the mission. We help organizations rise above the noise of automation tools and technologies by focusing on what drives real value.
                        </p>
                        <p className={styles.sectionDescription}>
                            By deeply understanding your processes, metrics, and pain points, we tailor the right mix of automation, talent, and intelligence to deliver outcomes that matter.
                        </p>
                        {/* <Button>Discover Our Impact</Button> */}
                    </div>
                </div>
            </div>
        </section>
    );
}
