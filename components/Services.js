'use client';

import Image from 'next/image';
import styles from './Services.module.css';

export default function Services() {
    const services = [
        {
            title: "Consulting",
            description: "Helping you simplify and demystify automation tools like RPA, AI, and LCAP to design a clear, business-aligned roadmap.",
            icon: (
                <Image src="/Consulting.png" alt="Consulting" width={64} height={64} />
            )
        },
        {
            title: "Implementation Services",
            description: "Building intelligent automation solutions across RPA, Agentic AI, and Low-Code Platforms — tailored to your environment.",
            icon: (
                <Image src="/Implementation.png" alt="Implementation" width={64} height={64} />
            )
        },
        {
            title: "Managed Services",
            description: "Manage your digital workforce with full lifecycle ownership — from orchestration to enhancement.",
            icon: (
                <Image src="/Services.png" alt="Managed" width={64} height={64} />
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
                            <a href="#" className={styles.serviceLink}>
                                Learn More
                                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.5 8.5L8.5 0.5M8.5 0.5V6.68182M8.5 0.5H1.95455" stroke="#389989" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>

                <div className={styles.paginationDots}>
                    <span className={styles.dot}></span>
                    <span className={`${styles.dot} ${styles.active}`}></span>
                    <span className={styles.dot}></span>
                </div>
            </div>
        </section>
    );
}
