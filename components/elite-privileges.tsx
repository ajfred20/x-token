import { Crown, Cpu, Gift } from "lucide-react";

export default function ElitePrivileges() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
          Elite Privileges
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Unprecedented access and exclusive opportunities
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 rounded-lg bg-gray-900/50 backdrop-blur border border-gray-800 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
            <Crown className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Premium Member Access
            </h3>
            <p className="text-gray-400">
              Invitation to exclusive investor and tech community events with
              keynote speakers and networking opportunities
            </p>
          </div>
          <div className="p-6 rounded-lg bg-gray-900/50 backdrop-blur border border-gray-800 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
            <Cpu className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">
              Tech Insider Benefits
            </h3>
            <p className="text-gray-400">
              Early access to new product features, beta testing opportunities,
              and direct feedback channels
            </p>
          </div>
          <div className="p-6 rounded-lg bg-gray-900/50 backdrop-blur border border-gray-800 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
            <Gift className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">VIP Perks</h3>
            <p className="text-gray-400">
              Discounts on partner products and services, priority support, and
              exclusive merchandise
            </p>
          </div>
        </div>

        <div className="p-6 rounded-lg bg-gray-900/50 backdrop-blur border border-gray-800 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
          <h3 className="text-xl font-semibold text-white mb-4">
            Exclusive Benefits
          </h3>
          <p className="text-gray-400 mb-6">
            Premium token holders (50,000+ tokens) unlock additional privileges:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Private Jet Access",
              "Luxury Car Test Drives",
              "AI Lab Tours",
              "Private Banking Services",
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
