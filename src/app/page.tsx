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
      <Banner />
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
