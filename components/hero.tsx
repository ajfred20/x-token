import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center p-4 bg-[#020617] starry-bg">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-4">
          X Token Presale
        </h1>
        <p className="text-gray-400 mb-8">
          Join the future of digital finance with the official X token presale
          platform
        </p>

        <div className="grid grid-cols-3 gap-8 mb-8">
          <div className="p-4 rounded-lg bg-gray-900/50 backdrop-blur border border-gray-800 gradient-glow">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              $5.44
            </div>
            <div className="text-sm text-gray-400">Current Price</div>
          </div>
          <div className="p-4 rounded-lg bg-gray-900/50 backdrop-blur border border-gray-800 gradient-glow">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              8.2M+
            </div>
            <div className="text-sm text-gray-400">Tokens Sold</div>
          </div>
          <div className="p-4 rounded-lg bg-gray-900/50 backdrop-blur border border-gray-800 gradient-glow">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              $9.55
            </div>
            <div className="text-sm text-gray-400">Next Price</div>
          </div>
        </div>

        <div className="w-full max-w-lg mx-auto mb-8">
          <Progress
            value={65}
            className="h-2 bg-gray-700 [&>div]:bg-gradient-to-r [&>div]:from-blue-600 [&>div]:to-purple-600"
          />
          <div className="flex justify-between mt-2 text-sm text-gray-400">
            <span>0 X</span>
            <span>Stage 3</span>
          </div>
        </div>
        <Link href="/register">
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-2 rounded-full shimmer">
            Purchase Tokens →
          </Button>
        </Link>
      </div>
    </section>
  );
}
