import { Hero } from '@/components/home/Hero';
import { ProjectsPreview } from '@/components/home/ProjectsPreview';
import { VisionMission } from '@/components/home/VisionMission';
import { ServicesPreview } from '@/components/home/ServicesPreview';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { Clients } from '@/components/home/Clients';
import { Testimonials } from '@/components/home/Testimonials';
import { CTA } from '@/components/home/CTA';

export default function HomePage() {
  return (
    <div className="space-y-16 px-4 sm:px-6 lg:px-12 md:space-y-24">
      <Hero />
      <ProjectsPreview />
      <VisionMission />
      <ServicesPreview />
      <WhyChooseUs />
      <Clients />
      <Testimonials />
      <CTA />
    </div>
  );
}
