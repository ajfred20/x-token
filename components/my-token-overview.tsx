import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Wallet,
  DollarSign,
  Coins,
  Gift,
  CreditCard,
  ArrowUpRight,
  History,
  LinkIcon,
  Plus,
} from "lucide-react";
import Link from "next/link";

export default function MyTokenOverview() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          My X Token
        </h1>
        <div className="flex gap-4">
          <Button
            variant="default"
            className="bg-emerald-600 hover:bg-emerald-700 text-white"
          >
            <Plus className="w-4 h-4 mr-2" /> Buy More Token
          </Button>
          <Button
            variant="default"
            className="bg-orange-600 hover:bg-orange-700 text-white"
          >
            <ArrowUpRight className="w-4 h-4 mr-2" /> Withdraw Token
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Token Balance Card */}
        <Card className="p-6 bg-gray-900/50 border-gray-800 shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
              <Wallet className="w-5 h-5 text-blue-400" />
            </div>
            <div className="space-y-1">
              <p className="text-gray-400">Token Balance</p>
              <p className="text-3xl font-bold text-white">0 X</p>
            </div>
          </div>
        </Card>

        {/* USD Equivalent Card */}
        <Card className="p-6 bg-gray-900/50 border-gray-800 shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
              <DollarSign className="w-5 h-5 text-green-400" />
            </div>
            <div className="space-y-1">
              <p className="text-gray-400">Equivalent in USD</p>
              <p className="text-3xl font-bold text-white">$0.00</p>
              <p className="text-sm text-gray-500">1 X = $5.44</p>
            </div>
          </div>
        </Card>

        {/* Purchased Tokens Card */}
        <Card className="p-6 bg-gray-900/50 border-gray-800 shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center mb-4">
              <Coins className="w-5 h-5 text-purple-400" />
            </div>
            <div className="space-y-1">
              <p className="text-gray-400">Purchased Tokens</p>
              <p className="text-3xl font-bold text-white">0 X</p>
              <p className="text-sm text-gray-500">Total purchases</p>
            </div>
          </div>
        </Card>

        {/* Bonus Tokens Card */}
        <Card className="p-6 bg-gray-900/50 border-gray-800 shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-pink-500/10 flex items-center justify-center mb-4">
              <Gift className="w-5 h-5 text-pink-400" />
            </div>
            <div className="space-y-1">
              <p className="text-gray-400">Bonus Tokens</p>
              <p className="text-3xl font-bold text-white">0 X</p>
              <p className="text-sm text-gray-500">
                From referrals and loyalty
              </p>
            </div>
          </div>
        </Card>

        {/* Total Contributed Card */}
        <Card className="p-6 bg-gray-900/50 border-gray-800 shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mb-4">
              <CreditCard className="w-5 h-5 text-blue-400" />
            </div>
            <div className="space-y-1">
              <p className="text-gray-400">Total Contributed</p>
              <p className="text-3xl font-bold text-white">$0.00</p>
              <p className="text-sm text-gray-500">All time investment</p>
            </div>
          </div>
        </Card>

        {/* Quick Actions Card */}
        <Card className="p-6 bg-gray-900/50 border-gray-800 shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
          <div className="relative">
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Actions
            </h3>
            <div className="space-y-3">
              <Button
                variant="secondary"
                className="w-full bg-blue-500/10 hover:bg-blue-500/20 text-blue-400"
              >
                <History className="w-4 h-4 mr-2" />
                View Transaction History
              </Button>
              <Button
                variant="secondary"
                className="w-full bg-gray-800 hover:bg-gray-700 text-gray-300"
              >
                <LinkIcon className="w-4 h-4 mr-2" />
                Generate Referral Link
              </Button>
            </div>
          </div>
        </Card>
      </div>

      {/* Recent Activity Section */}
      <Card className="p-6 bg-gray-900/50 border-gray-800 shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
        <div className="relative">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-white">
              Recent Activity
            </h3>
            <Link
              href="/transactions"
              className="text-sm text-blue-400 hover:text-blue-300"
            >
              View All
            </Link>
          </div>
          <div className="text-center text-gray-500 py-8">
            No recent activity to show
          </div>
        </div>
      </Card>
    </div>
  );
}
