'use client';

import Image from 'next/image';
import Button from './Button';
import styles from './Frameworks.module.css';

export default function Frameworks() {
    return (
        <section className={styles.frameworks}>
            <div className={styles.container}>
                <div className={styles.frameworksContent}>
                    <div className={styles.frameworksText}>
                        <h2 className={styles.sectionTitle}>Refined Frameworks. Reliable Outcomes.</h2>
                        <p className={styles.sectionDescription}>
                            Our proven methodologies combine industry best practices with cutting-edge innovation. Each framework is battle-tested across diverse industries and continuously refined based on real-world results.
                        </p>
                        <p className={styles.sectionDescription}>
                            From initial assessment to full-scale deployment, our structured approach ensures predictable timelines, transparent communication, and outcomes that exceed expectations. We don't just deliver projects—we build lasting partnerships.
                        </p>
                        <Button>View Our Approach</Button>
                    </div>
                    <div className={styles.frameworksImage}>
                        <div className={styles.frameworksImageWrapper}>
                            <Image
                                src="/frameworks-image.png"
                                alt="Team collaboration"
                                width={600}
                                height={600}
                            />
                        </div>
                        <div className={`${styles.blob} ${styles.blob4}`}></div>
                        <div className={`${styles.blob} ${styles.blob5}`}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
