import {
  Hero,
  Explore,
  Marquee,
  HowItWorks,
  CallToAction,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Hero />
      <Explore />
      <Marquee />
      <HowItWorks />
      <CallToAction />
      <Footer />
    </div>
  );
}
