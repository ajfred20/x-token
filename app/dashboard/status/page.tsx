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


// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import DashboardNav from "@/components/dashboard-nav";
// import StatusTiers from "@/components/status-tiers";

// export default function StatusPage() {
//   const router = useRouter();
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const token = localStorage.getItem("authToken"); 

//     if (!token) {
      
//       router.push("/login");
//     } else {
      
//       setIsLoading(false);
//     }
//   }, [router]);

//   if (isLoading) {
//     return <div className="min-h-screen bg-black text-white">Loading...</div>;
//   }

//   return (
//     <div className="min-h-screen bg-black">
//       <DashboardNav />
//       <main className="container mx-auto px-4 pt-24 pb-12 max-w-6xl">
//         <StatusTiers />
//       </main>
//     </div>
//   );
// }

