import AboutSection from "@/app/ui/client/home/aboutSection/aboutSection";
import VideoSection from "@/app/ui/client/home/videoSection/videoSection";
import HeroSection from "@/app/ui/client/home/heroSection/heroSection";
import GridSection from "@/app/ui/client/home/gridSection/gridSection";
import AboutOperationSection from "@/app/ui/client/home/aboutOperationSection/aboutOperationSection";
import ContactFormSection from "@/app/ui/client/home/contactFormSection/contactFormSection";
import LanguageSwitcher from "@/app/ui/components/languageSwitcher/languageSwitcher";
import { getDictionary } from "@/getDictionary";

export default async function Home({params}) {
  const lang = await getDictionary(params.lang);

  return (
    <>
      <LanguageSwitcher/>
      <HeroSection lang={lang}/>
      <AboutSection lang={lang}/>
      <VideoSection lang={lang}/>
      <GridSection lang={lang}/>
      <AboutOperationSection lang={lang}/>
      <ContactFormSection lang={lang}/>
    </>
  );
}
