import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function TokenSalesProgress() {
  return (
    <div className="p-6 rounded-lg bg-gray-900/50 backdrop-blur border border-gray-800 bg-black">
      <h3 className="text-xl font-bold text-white mb-6">
        Token Sales Progress
      </h3>
      <div className="space-y-6">
        <div className="flex justify-between text-sm text-gray-400">
          <span>Raised Amount: 5,317,985 X</span>
          <span>Total Token: 6,475,000 X</span>
        </div>
        <Progress
          value={82.13}
          className="h-2 bg-gray-700 [&>div]:bg-gradient-to-r [&>div]:from-blue-600 [&>div]:to-purple-600"
        />
        <div className="flex justify-between text-sm">
          <span className="text-blue-400">82.13% Complete</span>
        </div>
        <div className="flex justify-center">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 shimmer">
            Buy X Tokens Now →
          </Button>
        </div>
      </div>
    </div>
  );
}
