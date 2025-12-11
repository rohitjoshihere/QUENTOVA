import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesHero from '@/components/ServicesHero';
import WhatWeDo from '@/components/WhatWeDo';
import HowWeDeliver from '@/components/HowWeDeliver';
import EngagementModels from '@/components/EngagementModels';
import SharedSuccess from '@/components/SharedSuccess';

export default function ServicesPage() {
    return (
        <>
            <Header />
            <main>
                <ServicesHero />
                <WhatWeDo />
                <HowWeDeliver />
                <EngagementModels />
                <SharedSuccess />
            </main>
            <Footer />
        </>
    );
}
