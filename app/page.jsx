import AboutSection from "./ui/client/home/aboutSection/aboutSection";
import VideoSection from "./ui/client/home/videoSection/videoSection";
import HeroSection from "./ui/client/home/heroSection/heroSection";
import GridSection from "./ui/client/home/gridSection/gridSection";
export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <VideoSection />
      <GridSection />
    </>
  );
}
