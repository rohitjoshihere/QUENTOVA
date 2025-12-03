'use client';

import Image from 'next/image';
import Button from './Button';
import styles from './Frameworks.module.css';

export default function Frameworks() {
    return (
        <section className={styles.frameworks}>
            <div className={styles.container}>
                {/* <div className={styles.frameworksContent}> */}
                <div className={styles.frameworksText}>
                    <h2 className={styles.sectionTitle}>Refined Frameworks. Reliable Outcomes.</h2>
                    <p className={styles.sectionDescription}>
                        Our frameworks are built on years of implementation experience, ensuring automation is designed, delivered, and supported with consistency. Together, our core components form a reliable foundation: the RunOps Platform and Reliability Scan enhance operational stability, while the Automation Framework and AI Readiness Assessment bring clarity to implementation. With the Future Ready Team Structure and SSC Maturity Levels, organizations can scale automation with confidence and long-term sustainability.
                    </p>
                    <Button>View Our Approach</Button>
                </div>
                {/* </div> */}
            </div>
        </section>
    );
}
