"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import DashboardNav from "@/components/dashboard-nav";
import DashboardOverview from "@/components/dashboard-overview";
import TokenAnnouncement from "@/components/token-announcement";
import TokenSalesProgress from "@/components/token-sales-progress";

export default function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    // Check if the user is authenticated
    const token = localStorage.getItem("authToken"); // Example of using localStorage
    if (!token) {
      // If no token, redirect to login page
      router.push("/login");
    }
  }, [router]);

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
