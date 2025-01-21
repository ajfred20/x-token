import Hero from "@/components/hero";
import Features from "@/components/features";
import Partners from "@/components/partners";
import Tokenomics from "@/components/tokenomics";
import Roadmap from "@/components/roadmap";
import Navbar from "@/components/navbar";
import ExclusiveRewards from "@/components/exclusive-rewards";
import ElitePrivileges from "@/components/elite-privileges";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617]">
      <Navbar />
      <Hero />
      <Features />
      <Partners />
      <Tokenomics />
      <Roadmap />
      <ExclusiveRewards />
      <ElitePrivileges />
      <FAQ />
      <Footer />
    </main>
  );
}
