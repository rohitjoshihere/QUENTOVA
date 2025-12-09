'use client';

import Image from 'next/image';
import styles from './WhatWeDo.module.css';

export default function WhatWeDo() {
    const services = [
        {
            title: "Consulting- Simplify - Strategize - Scale",
            description: "Automation doesn't start with tools — it starts with your business. Our consulting services help organizations cut through complexity and build a clear roadmap for intelligent automation success.",
            subtext: "Future Ready Teams | Process Redesign | AI Rediness Assessment | Roadmap Design",
            image: "/what_we_do.jpg",
            link: "#"
        },
        {
            title: "Implementation- From Roadmap to Reality",
            description: "We implement intelligent automation solutions across leading platforms — RPA, Agentic AI, LCAP, and Conversational Interfaces — customized to your environment...",
            subtext: "RPA | Agentic AI | LCAP | Conversational Interfaces",
            image: "/what_we_do2.jpg",
            link: "#"
        },
        {
            title: "Managed Services- Beyond Support - Complete Ownership",
            description: "We don't just maintain your bots or automations — we take end-to-end ownership of your business SLA. Our RunOps platform brings continuous visibility, orchestration...",
            subtext: "RunOps Platform | Continuous Visibility | Orchestration",
            image: "/what_we_do3.jpg",
            link: "#"
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.sectionTitle}>What We Do</h2>
                <p className={styles.sectionDescription}>
                    Our platforms and frameworks eliminate subjectivity — ensuring that automation design, implementation, and support are consistent, governed, and outcomes-driven.
                </p>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className={styles.cardImage}
                                />
                                <div className={styles.imageOverlay}></div>
                            </div>
                            <div className={styles.content}>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <p className={styles.cardDescription}>{service.description}</p>
                                <div className={styles.subtextWrapper}>
                                    <p className={styles.cardSubtext}>{service.subtext}</p>
                                </div>
                                <a href={service.link} className={styles.cardLink}>
                                    Learn More
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 11L11 1M11 1V9M11 1H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
