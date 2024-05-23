import AboutSection from "./ui/client/home/aboutSection/aboutSection";
import BuildSection from "./ui/client/home/buildSection/buildSection";
import HeroSection from "./ui/client/home/heroSection/heroSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <BuildSection />
    </>
  );
}
