export default function Roadmap() {
  const quarters = [
    {
      title: "Q1 2025",
      name: "Platform Launch",
      items: [
        "Initial Token Platform Launch",
        "Integration with Major Exchanges",
        "AI-Powered Trading Features",
        "Community Governance Implementation",
      ],
    },
    {
      title: "Q2 2025",
      name: "Ecosystem Expansion",
      items: [
        "Cross-Chain Bridge Development",
        "Smart Contract Upgrades",
        "Partnership Program Launch",
      ],
    },
    {
      title: "Q3 2025",
      name: "Innovation Phase",
      items: [
        "AI Neural Network Integration",
        "Decentralized Identity",
        "Advanced Trading Tools",
        "Global Marketing Campaign",
      ],
    },
    {
      title: "Q4 2025",
      name: "Global Scale",
      items: [
        "Metaverse Integration",
        "Enterprise Solutions Launch",
        "International Expansion",
        "Enhanced Security Features",
      ],
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-purple-400 mb-2">
          2025 Roadmap
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Our strategic vision for growth and innovation
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          {quarters.map((quarter) => (
            <div
              key={quarter.title}
              className="p-6 rounded-lg bg-gray-900/50 backdrop-blur border border-gray-800 gradient-glow"
            >
              <div className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                {quarter.title}
              </div>
              <h3 className="text-lg font-semibold text-white mb-4">
                {quarter.name}
              </h3>
              <ul className="space-y-2">
                {quarter.items.map((item) => (
                  <li
                    key={item}
                    className="text-gray-400 text-sm flex items-start"
                  >
                    <span className="mr-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      →
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
