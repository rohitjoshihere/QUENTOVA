import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import BusinessImpact from '@/components/BusinessImpact';
import Frameworks from '@/components/Frameworks';
import WhyQuestova from '@/components/WhyQuestova';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <BusinessImpact />
        <Frameworks />
        <WhyQuestova />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
