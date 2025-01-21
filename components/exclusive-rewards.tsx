import { Shield, Star, Zap } from "lucide-react";

export default function ExclusiveRewards() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
          Exclusive Rewards
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Unlock premium benefits as an early investor
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-lg bg-gray-900/50 backdrop-blur border border-gray-800 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
            <Shield className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Lifetime Free Transactions
            </h3>
            <p className="text-gray-400">
              Never pay transaction fees again when you hold 10,000+ tokens
            </p>
          </div>
          <div className="p-6 rounded-lg bg-gray-900/50 backdrop-blur border border-gray-800 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
            <Zap className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Priority Access
            </h3>
            <p className="text-gray-400">
              Get early access to new features and exclusive ICO opportunities
            </p>
          </div>
          <div className="p-6 rounded-lg bg-gray-900/50 backdrop-blur border border-gray-800 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
            <Star className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Special Rewards
            </h3>
            <p className="text-gray-400">
              Earn additional tokens through our staking and referral programs
            </p>
          </div>
        </div>

        <div className="p-6 rounded-lg bg-gray-900/50 backdrop-blur border border-gray-800 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
          <h3 className="text-xl font-semibold text-white mb-4">
            Special Prize Pool
          </h3>
          <p className="text-gray-400 mb-6">
            Investors who acquire 3,000+ X Tokens will be eligible to win
            exclusive rewards, including:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "VIP Access to Annual Investor Event",
              "Exclusive Merchandise Bundle",
              "One-on-One Consultation with Industry Experts",
              "Bonus Tokens for Future Transactions",
            ].map((benefit, index) => (
              <div
                key={index}
                className="p-4 rounded-md bg-purple-900/20 border border-purple-900/50"
              >
                <p className="text-sm text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
