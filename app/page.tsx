import HeroSection from "./_components/home/HeroSection";
import AboutPreview from "./_components/home/AboutPreview";
import BusinessSectors from "./_components/home/BusinessSectors";
import StatsSection from "./_components/home/StatsSection";
import ProjectsSlider from "./_components/home/ProjectsSlider";
import WhyEKPSection from "./_components/home/WhyEKPSection";
import ClientsSection from "./_components/home/ClientsSection";
import NewsSection from "./_components/home/NewsSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <BusinessSectors />
      <StatsSection />
      <ProjectsSlider />
      <WhyEKPSection />
      <ClientsSection />
      <NewsSection />
    </>
  );
}
