import DashboardNav from "@/components/dashboard-nav";
import BuyTokens from "@/components/buy-tokens";

export default function BuyTokenPage() {
  return (
    <div className="min-h-screen bg-black">
      <DashboardNav />
      <main className="container mx-auto px-4 pt-24 pb-12 max-w-6xl">
        <BuyTokens />
      </main>
    </div>
  );
}
