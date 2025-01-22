import DashboardNav from "@/components/dashboard-nav";
import HowToBuy from "@/components/how-to-buy";

export default function HowToBuyPage() {
  return (
    <div className="min-h-screen bg-[#020617]">
      <DashboardNav />
      <main className="container mx-auto px-4 pt-24 pb-12 max-w-6xl">
        <HowToBuy />
      </main>
    </div>
  );
}
