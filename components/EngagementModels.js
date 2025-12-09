'use client';

import styles from './EngagementModels.module.css';

export default function EngagementModels() {
    const models = [
        {
            title: "Fixed Scope Delivery",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5M12 12H15M12 16H15M9 12H9.01M9 16H9.01" stroke="#2D9B9B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
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
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.75 17L9 20L8 21H16L15 20L14.25 17M3 13H21M5 17H19C20.1046 17 21 16.1046 21 15V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V15C3 16.1046 3.89543 17 5 17Z" stroke="#6B4CE6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
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
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 20H22V18C22 16.3431 20.6569 15 19 15C18.0444 15 17.191 15.4468 16.6483 16.142M12 20H12.01M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14ZM7 20H2V18C2 16.3431 3.34315 15 5 15C5.95561 15 6.80901 15.4468 7.3517 16.142M12 20V18C12 16.3431 13.3431 15 15 15" stroke="#FF6B9D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
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
                            </ul>
                            <div className={styles.idealWrapper}>
                                <p className={styles.idealText}>
                                    <strong>{model.ideal.split(' — ')[0]}</strong>
                                    {model.ideal.includes(' — ') ? ' — ' + model.ideal.split(' — ')[1] : ''}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
