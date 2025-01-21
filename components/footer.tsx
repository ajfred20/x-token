import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "#features" },
    { name: "Tokenomics", href: "#tokenomics" },
    { name: "Roadmap", href: "#roadmap" },
    { name: "Rewards", href: "#rewards" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <footer className="bg-black pt-20 pb-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Join the Revolution */}
        <div className="mb-20">
          <div className="p-8 rounded-lg bg-gray-900/50 backdrop-blur border border-gray-800 gradient-glow text-center">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Join the Revolution
            </h2>
            <p className="text-gray-400 mb-6">
              Don't miss out on this opportunity to be part of the future of
              digital transactions.
            </p>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 shimmer">
              Buy Tokens Now →
            </Button>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                X Token
              </span>
            </Link>
            <p className="text-gray-400 text-sm">
              Building the future of digital transactions
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © 2024 X Token. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
