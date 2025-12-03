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
                            Because You Need More Than Automation — <span style={{ color: '#389989' }}>You Need Assurance. </span>
                            At Quentova, we believe in simplicity over complexity, delivering solutions that create measurable business impact. Guided by proven frameworks and SLA-driven ownership, we ensure accountability from design to delivery. With deep automation expertise and a globally experienced leadership team, we help enterprises scale intelligently and efficiently.                        </p>
                    </div>
                    <div className={styles.whyImage}>
                        {/* <div className={styles.whyImageWrapper}> */}
                        <img
                            src="/WhyQuentova.png"
                            alt="Business professionals discussing"
                            // className={styles.whyImage}
                        // width={600}
                        // height={600}
                        />
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}
