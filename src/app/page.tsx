import {
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
      <Navbar />
      <Hero />
      <Explore />
      <Community />
      <HowItWorks />
      <CallToAction />
      <Footer />
    </div>
  );
}
