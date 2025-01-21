import Image from "next/image";

export default function Partners() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-blue-400 mb-2">
          Trusted By Industry Leaders
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Partnering with global technology innovators
        </p>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="p-4 rounded-lg bg-gray-900/50 backdrop-blur border border-gray-800 gradient-glow flex items-center justify-center"
            >
              <div className="w-24 h-12 bg-gray-800 rounded animate-pulse" />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="p-4 rounded-lg bg-gray-900/50 backdrop-blur border border-gray-800 gradient-glow flex items-center justify-center"
            >
              <div className="w-24 h-12 bg-gray-800 rounded animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
