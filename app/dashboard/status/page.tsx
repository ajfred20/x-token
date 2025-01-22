import DashboardNav from "@/components/dashboard-nav";
import StatusTiers from "@/components/status-tiers";

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-black">
      <DashboardNav />
      <main className="container mx-auto px-4 pt-24 pb-12 max-w-6xl">
        <StatusTiers />
      </main>
    </div>
  );
}
