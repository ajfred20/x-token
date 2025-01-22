import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, Star, Diamond } from "lucide-react"

const tiers = [
  {
    name: "Bronze Status",
    type: "TIER",
    range: "200 - 500 tokens",
    icon: <Diamond className="w-5 h-5 text-amber-600" />,
  },
  {
    name: "Silver Status",
    type: "TIER",
    range: "500 - 2,000 tokens",
    icon: <Diamond className="w-5 h-5 text-gray-400" />,
  },
  {
    name: "Gold Status",
    type: "TIER",
    range: "2,000 - 10,000 tokens",
    icon: <Diamond className="w-5 h-5 text-yellow-400" />,
  },
  {
    name: "Platinum Status",
    type: "TIER",
    range: "10,000 - 50,000 tokens",
    icon: <Diamond className="w-5 h-5 text-blue-400" />,
  },
  {
    name: "Diamond Status",
    type: "TIER",
    range: "50,000 - 100,000 tokens",
    icon: <Diamond className="w-5 h-5 text-purple-400" />,
  },
  {
    name: "Legendary Status",
    type: "TIER",
    range: "100,000+ tokens",
    icon: <Diamond className="w-5 h-5 text-red-400" />,
  },
]

export default function StatusTiers() {
  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-white">Status Tiers</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Explore our exclusive membership tiers and unlock premium benefits as you increase your token holdings.
        </p>
      </div>

      {/* Current Status Card */}
      <Card className="p-6 bg-gray-900/50 border-gray-800 shadow-lg">
        <div className="space-y-6">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <div className="text-sm text-gray-400">Current Balance</div>
              <div className="text-2xl font-bold text-white">0 X</div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-400">Current Tier</div>
              <div className="text-lg font-semibold text-blue-400">Basic Status</div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Progress to Bronze Status</span>
              <span className="text-gray-400">0%</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-xs text-gray-500">0 X</span>
              <Progress
                value={0}
                className="flex-1 h-2 bg-gray-800 [&>div]:bg-gradient-to-r [&>div]:from-blue-600 [&>div]:to-purple-600"
              />
              <span className="text-xs text-gray-500">200 X</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-blue-400">
              <Star className="w-4 h-4" />
              <span>200 X needed to reach Bronze Status</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Tier List */}
      <div className="space-y-4">
        {tiers.map((tier) => (
          <Card
            key={tier.name}
            className="p-6 bg-gray-900/50 border-gray-800 shadow-lg hover:bg-gray-900/70 transition-colors"
          >
            <div className="flex items-center gap-4">
              {tier.icon}
              <div>
                <h3 className="text-lg font-semibold text-white">{tier.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500 px-2 py-0.5 rounded-full border border-gray-800">
                    {tier.type}
                  </span>
                  <span className="text-sm text-gray-400">{tier.range}</span>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Important Note */}
      <Card className="p-6 bg-gray-900/50 border-gray-800 shadow-lg">
        <div className="flex items-start gap-4">
          <AlertTriangle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h3 className="font-semibold text-white">Important Note</h3>
            <p className="text-sm text-gray-400">
              Token holding requirements must be maintained to keep tier status and benefits. Benefits are subject to
              terms and conditions.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}

