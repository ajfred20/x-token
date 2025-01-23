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



// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import DashboardNav from "@/components/dashboard-nav";
// import BuyTokens from "@/components/buy-tokens";

// export default function BuyTokenPage() {
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
//         <BuyTokens />
//       </main>
//     </div>
//   );
// }
