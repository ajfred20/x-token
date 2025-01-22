import Image from "next/image";
import { Check } from "lucide-react";

export default function TokenAnnouncement() {
  return (
    <div className="p-6 rounded-lg bg-gray-900/50 backdrop-blur border border-gray-800  mt-8">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-white to-blue-500">
              <Image
                src="https://pbs.twimg.com/profile_images/1874558173962481664/8HSTqIlD_400x400.jpg"
                alt="Profile Image"
                layout="fill"
                className="object-cover"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl font-bold text-white">E</span>
            </div>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2">
            <span className="text-base font-bold text-white">Elon Musk</span>
            <div className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-400/10">
              <Check className="w-3.5 h-3.5 text-blue-400" />
            </div>
            <span className="text-sm text-gray-50">@elonmusk</span>
          </div>
          <div className="mt-4 space-y-4 text-sm text-gray-300 leading-relaxed">
            <p>
              We extend a warm welcome as you embark on a unique opportunity to
              be part of the future of blockchain technology and decentralized
              possibilities through X Coin. As we commence our presale stages,
              currently at Stage 3 with a price of $5.44, you have the exclusive
              chance to invest in X Coin before its value escalates in
              subsequent stages, culminating in the public sale at $27.50.
            </p>
            <p>
              Owning X Coin is more than a financial investment, it's an active
              endorsement of a visionary project propelling the progress of
              blockchain technology, laying the groundwork for a decentralized
              future.
            </p>
            <p>
              At X Coin, we prioritize top-tier security and unwavering
              transparency for every transaction, all conducted directly on our
              platform. Our dedicated live chat support team is available around
              the clock to address any inquiries or concerns you may have.
            </p>
            <p>
              Seize this unique opportunity to shape the future of blockchain
              technology. Invest in X Coin today and embark on an exciting
              journey with us!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
