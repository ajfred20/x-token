import { Shield, Sparkles, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

export default function Features() {
  return (
    <section className="py-10 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-purple-400 mb-2">
          Stage 3 is Active
        </h2>
        <p className="text-center text-gray-400 mb-8">
          Limited time opportunity to join early
        </p>

        <div className="mb-8">
          <div className="flex justify-between text-white mb-2">
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              1 X = $5.44 USD
            </span>
            <span>65%</span>
          </div>
          <Progress
            value={65}
            className="h-2 bg-gray-700 [&>div]:bg-gradient-to-r [&>div]:from-blue-600 [&>div]:to-purple-600"
          />
          <div className="flex justify-end mt-4">
            <Link href="/register">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shimmer text-white">
                Buy Now →
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg bg-gray-900/50 backdrop-blur border border-gray-800 gradient-glow">
            <Shield className="w-8 h-8 text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Secure Infrastructure
            </h3>
            <p className="text-gray-400">
              Military grade encryption and secure blockchain technology
            </p>
          </div>
          <div className="p-6 rounded-lg bg-gray-900/50 backdrop-blur border border-gray-800 gradient-glow">
            <Sparkles className="w-8 h-8 text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text" />
            <h3 className="text-lg font-semibold text-white mb-2">
              AI Integration
            </h3>
            <p className="text-gray-400">
              Advanced AI capabilities for smart transactions and analysis
            </p>
          </div>
          <div className="p-6 rounded-lg bg-gray-900/50 backdrop-blur border border-gray-800 gradient-glow">
            <Gift className="w-8 h-8 text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Exclusive Benefits
            </h3>
            <p className="text-gray-400">
              Special rewards and privileges for early participants
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
