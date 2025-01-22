import Link from "next/link";
import {
  LayoutDashboard,
  Wallet,
  User,
  Coins,
  HelpCircle,
  CrownIcon,
} from "lucide-react";

const navItems = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    href: "/dashboard",
    active: true,
  },
  { icon: Wallet, label: "Buy Token", href: "/dashboard/buy-token" },
  { icon: User, label: "Profile", href: "/profile" },
  { icon: Coins, label: "My X Token", href: "/dashboard/my-token" },
  { icon: CrownIcon, label: "Status", href: "/dashboard/status" },
  { icon: HelpCircle, label: "How to Buy", href: "/dashboard/how-to-buy" },
];

export default function DashboardNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/50 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex-shrink-0">
            <img src="/logo.svg" alt="X Token Logo" className="h-8 w-auto" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center space-x-2 text-sm ${
                  item.active
                    ? "text-blue-400"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
