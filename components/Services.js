'use client';

import styles from './Services.module.css';

export default function Services() {
    const services = [
        {
            title: "Consulting",
            description: "Helping you simplify and demystify automation tools like RPA, AI, and LCAP to design a clear, business-aligned roadmap.",
            icon: (
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 48C41.9411 48 50 39.9411 50 30C50 20.0589 41.9411 12 32 12C22.0589 12 14 20.0589 14 30C14 33.5 15 36.8 16.7 39.6L14 50L24.4 47.3C27.2 48.4 30.5 49 32 48Z" stroke="#2D9B9B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    <circle cx="24" cy="28" r="2" fill="#7B3FE4" />
                    <circle cx="32" cy="28" r="2" fill="#7B3FE4" />
                    <circle cx="40" cy="28" r="2" fill="#7B3FE4" />
                </svg>
            )
        },
        {
            title: "Implementation Services",
            description: "Building intelligent automation solutions across RPA, Agentic AI, and Low-Code Platforms — tailored to your environment.",
            icon: (
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="32" cy="32" r="16" stroke="#2D9B9B" strokeWidth="2.5" fill="none" />
                    <circle cx="32" cy="32" r="4" fill="#2D9B9B" />
                    <path d="M32 16V12M32 52V48M48 32H52M12 32H16" stroke="#2D9B9B" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M43.3 20.7L46.1 17.9M17.9 46.1L20.7 43.3M43.3 43.3L46.1 46.1M17.9 17.9L20.7 20.7" stroke="#2D9B9B" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
            )
        },
        {
            title: "Managed Services",
            description: "Manage your digital workforce with full lifecycle ownership — from orchestration to enhancement.",
            icon: (
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="3" fill="#7B3FE4" />
                    <circle cx="40" cy="24" r="3" fill="#7B3FE4" />
                    <circle cx="32" cy="40" r="3" fill="#7B3FE4" />
                    <line x1="24" y1="24" x2="32" y2="40" stroke="#2D9B9B" strokeWidth="2.5" />
                    <line x1="40" y1="24" x2="32" y2="40" stroke="#2D9B9B" strokeWidth="2.5" />
                    <rect x="18" y="14" width="4" height="20" rx="2" fill="#2D9B9B" />
                    <rect x="30" y="14" width="4" height="20" rx="2" fill="#2D9B9B" />
                    <rect x="42" y="14" width="4" height="20" rx="2" fill="#2D9B9B" />
                </svg>
            )
        }
    ];

    return (
        <section className={styles.services} id="services">
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>End-to-End Business Efficiency Services</h2>
                <p className={styles.sectionDescription}>
                    We provide comprehensive solutions across consulting, implementation, and managed services. Our platforms and frameworks eliminate subjectivity and ensure every automation delivers measurable impact.
                </p>

                <div className={styles.servicesGrid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.serviceCard}>
                            <div className={styles.serviceIcon}>
                                {service.icon}
                            </div>
                            <h3 className={styles.serviceTitle}>{service.title}</h3>
                            <p className={styles.serviceDescription}>{service.description}</p>
                            <a href="#" className={styles.serviceLink}>Learn More →</a>
                        </div>
                    ))}
                </div>

                <div className={styles.paginationDots}>
                    <span className={`${styles.dot} ${styles.active}`}></span>
                    <span className={styles.dot}></span>
                    <span className={styles.dot}></span>
                </div>
            </div>
        </section>
    );
}
