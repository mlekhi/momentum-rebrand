import Image from "next/image";
import {
  Banner,
  Navbar,
  Hero,
  Explore,
  Community,
  HowItWorks,
  CallToAction,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* <Banner /> */}{/* alchemy 2025 - bring back next year */}
      <Navbar />
      <Hero />
      <Explore />
      <Community />
      <Image
        src="/divider.png"
        alt=""
        width={1920}
        height={1080}
        className="w-full h-auto"
      />
      <HowItWorks />
      <CallToAction />
      <Footer />
    </div>
  );
}
