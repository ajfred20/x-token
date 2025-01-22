import DashboardNav from "@/components/dashboard-nav";
import DashboardOverview from "@/components/dashboard-overview";
import TokenAnnouncement from "@/components/token-announcement";
import TokenSalesProgress from "@/components/token-sales-progress";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-black">
      <DashboardNav />
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="space-y-8">
          <DashboardOverview />
          <TokenAnnouncement />
          <TokenSalesProgress />
        </div>
      </main>
    </div>
  );
}
