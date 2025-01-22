import { Progress } from "@/components/ui/progress";

export default function Tokenomics() {
  const distribution = [
    { name: "Public Sale", percentage: 40 },
    { name: "Development", percentage: 20 },
    { name: "Team & Advisors", percentage: 15 },
    { name: "Marketing", percentage: 15 },
    { name: "Reserve", percentage: 10 },
  ];

  const details = [
    { label: "Token Name", value: "X Token" },
    { label: "Token Symbol", value: "X" },
    { label: "Total Supply", value: "1,000,000,000 X" },
    { label: "Initial Price", value: "$5.44" },
    { label: "Soft Cap", value: "8,500,000 USD" },
    { label: "Hard Cap", value: "25,000,000 USD" },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-400 mb-2">
          Tokenomics
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Strategic token distribution for sustainable growth
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-lg bg-gray-900/50 backdrop-blur border border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">
              Token Distribution
            </h3>
            <div className="space-y-4">
              {distribution.map((item) => (
                <div key={item.name}>
                  <div className="flex justify-between text-sm text-gray-400 mb-1">
                    <span>{item.name}</span>
                    <span>{item.percentage}%</span>
                  </div>
                  <Progress
                    value={item.percentage}
                    className="h-2 bg-gray-700 [&>div]:bg-gradient-to-r [&>div]:from-blue-600 [&>div]:to-purple-600"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-lg bg-gray-900/50 backdrop-blur border border-gray-800 hover:gradient-glow">
            <h3 className="text-lg font-semibold text-white mb-4">
              Token Details
            </h3>
            <div className="space-y-4">
              {details.map((item) => (
                <div key={item.label} className="flex justify-between">
                  <span className="text-gray-400">{item.label}</span>
                  <span className="font-medium bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
