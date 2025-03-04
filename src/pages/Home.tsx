import CertificationsSection from '@components/home/CertificationsSection';
import DiscussionCarousel from '@components/home/DiscussionCarousel';
import ExpertiseSection from '@components/home/ExpertiseSection';
import Hero from '@components/home/Hero';
import KnowledgeCarousel from '@components/home/KnowledgeCarousel';
import ProjectsSection from '@components/home/ProjectsSection';
// import ProjectsSection from '@components/home/ProjectsSection';
import RolesCarousel from '@components/home/RolesCarousel';

export default function Home() {
  return (
    <div className="overflow-y-hidden bg-[var(--white)]">
      <Hero />
      <RolesCarousel />
      <ExpertiseSection />
      <KnowledgeCarousel />
      <ProjectsSection />
      <CertificationsSection />
      <DiscussionCarousel />
    </div>
  );
}
