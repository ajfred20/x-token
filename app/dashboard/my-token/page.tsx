import DashboardNav from "@/components/dashboard-nav";
import MyTokenOverview from "@/components/my-token-overview";

export default function MyTokenPage() {
  return (
    <div className="min-h-screen bg-black">
      <DashboardNav />
      <main className="container mx-auto px-4 pt-24 pb-12 max-w-6xl">
        <MyTokenOverview />
      </main>
    </div>
  );
}
