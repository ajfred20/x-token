import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Wallet, DollarSign, Trophy } from "lucide-react";

export default function DashboardOverview() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white">Dashboard Overview</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Balance Card */}
        <div className="p-6 rounded-lg bg-gray-900/50 backdrop-blur border border-gray-800 bg-black relative overflow-hidden">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-gray-400 font-medium">Balance</h3>
            <div className="w-8 h-8 rounded-full bg-blue-400/10 flex items-center justify-center">
              <Wallet className="w-4 h-4 text-blue-400" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="text-4xl font-bold text-blue-400">0 X</div>
            <p className="text-sm text-gray-500">
              Your current X token balance
            </p>
            <Button
              variant="default"
              className="w-full text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shimmer"
            >
              How to Buy? →
            </Button>
          </div>
        </div>

        {/* USD Equivalent Card */}
        <div className="p-6 rounded-lg bg-gray-900/50 backdrop-blur border border-gray-800 bg-black relative overflow-hidden">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-gray-400 font-medium">USD Equivalent</h3>
            <div className="w-8 h-8 rounded-full bg-green-400/10 flex items-center justify-center">
              <DollarSign className="w-4 h-4 text-green-400" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="text-4xl font-bold text-green-400">$0.00</div>
            <p className="text-sm text-gray-500">1 X = $5.44</p>
          </div>
        </div>

        {/* Status Card */}
        <div className="p-6 rounded-lg bg-gray-900/50 backdrop-blur border border-gray-800 bg-black relative overflow-hidden">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-gray-400 font-medium">Status</h3>
            <div className="w-8 h-8 rounded-full bg-purple-400/10 flex items-center justify-center">
              <Trophy className="w-4 h-4 text-purple-400" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="text-4xl font-bold text-blue-400">Basic</div>
            <p className="text-sm text-gray-500">Based on your contribution</p>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Progress to Bronze</span>
              </div>
              <Progress
                value={30}
                className="h-2 bg-gray-700 [&>div]:bg-gradient-to-r [&>div]:from-blue-600 [&>div]:to-purple-600"
              />
            </div>
            <Button
              variant="default"
              className="w-full text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shimmer"
            >
              Buy X Tokens Now →
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
