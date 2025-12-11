'use client';

import styles from './EngagementModels.module.css';

export default function EngagementModels() {
    const models = [
        {
            title: "Fixed Scope Delivery",
            icon: (
                <img src="/engagement1.png" alt="Automation Program Ownership" />
            ),
            bestFor: "Best for: POCs, pilots, or departmental initiatives",
            points: [
                "Clearly defined deliverables within agreed time and budget",
                "Transparent accountability with milestone-based progress tracking",
                "ROI-focused engagements to prove value before scaling"
            ],
            ideal: "Ideal when you need tangible results fast — with full visibility and control."
        },
        {
            title: "Automation Program Ownership",
            icon: (
                <img src="/engagement2.png" alt="Automation Program Ownership" />
            ),
            bestFor: "Best for: Organizations scaling Intelligent Automation across functions",
            points: [
                "End-to-end managed Automation CoE — from pipeline discovery to governance",
                "Continuous delivery aligned with evolving business priorities",
                "Co-creation with client teams for sustainable adoption"
            ],
            ideal: "Ideal when you want a strategic partner to manage, scale, and future-proof your automation ecosystem."
        },
        {
            title: "Capacity Augmentation",
            icon: (
                <img src="/engagement3.png" alt="Automation Program Ownership" />
            ),
            bestFor: "Best for: IT or Automation teams needing certified experts on demand",
            points: [
                "Access to experienced RPA, AI, and low-code professionals",
                "Flexible scaling up or down with business needs",
                "Seamless integration with your existing delivery model"
            ],
            ideal: "Ideal when you want to retain control but strengthen your internal capabilities."
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>Our Engagement Models</h2>
                <p className={styles.sectionDescription}>
                    Whether you&apos;re starting small or managing enterprise-scale automation, Quentova offers flexible engagement models that fit your delivery goals, budgets, and maturity levels.
                </p>

                <div className={styles.grid}>
                    {models.map((model, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                {model.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{model.title}</h3>
                            <p className={styles.bestFor}>{model.bestFor}</p>
                            <ul className={styles.pointsList}>
                                {model.points.map((point, i) => (
                                    <li key={i}>{point}</li>
                                ))}
                                <p className={styles.idealText}>
                                    <strong>{model.ideal.split(' — ')[0]}</strong>
                                    {model.ideal.includes(' — ') ? ' — ' + model.ideal.split(' — ')[1] : ''}
                                </p>
                            </ul>
                            {/* <div className={styles.idealWrapper}>
                            </div> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
