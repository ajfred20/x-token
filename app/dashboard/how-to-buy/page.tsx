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


// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import DashboardNav from "@/components/dashboard-nav";
// import HowToBuy from "@/components/how-to-buy";

// export default function HowToBuyPage() {
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
//     <div className="min-h-screen bg-[#020617]">
//       <DashboardNav />
//       <main className="container mx-auto px-4 pt-24 pb-12 max-w-6xl">
//         <HowToBuy />
//       </main>
//     </div>
//   );
// }
