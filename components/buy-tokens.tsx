"use client";

import { useState } from "react";
import { Search, Grid2X2, List, ChevronLeft, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const cryptoOptions = [
  {
    id: "btc",
    name: "BTC",
    rate: "17259.74",
    icon: "₿",
    iconBg: "bg-[#F7931A]",
  },
  { id: "eth", name: "ETH", rate: "570.45", icon: "Ξ", iconBg: "bg-[#627EEA]" },
  { id: "xrp", name: "XRP", rate: "0.46", icon: "✕", iconBg: "bg-[#23292F]" },
  { id: "usdt", name: "USDT", rate: "0.18", icon: "₮", iconBg: "bg-[#26A17B]" },
  { id: "ton", name: "TON", rate: "0.97", icon: "◈", iconBg: "bg-[#0098EA]" },
  { id: "xlm", name: "XLM", rate: "0.08", icon: "*", iconBg: "bg-[#14B6E7]" },
  { id: "bch", name: "BCH", rate: "77.84", icon: "₿", iconBg: "bg-[#8DC351]" },
  { id: "bnb", name: "BNB", rate: "125.51", icon: "Ƀ", iconBg: "bg-[#F3BA2F]" },
  { id: "trx", name: "TRX", rate: "0.04", icon: "♦", iconBg: "bg-[#FF0013]" },
  { id: "usdc", name: "USDC", rate: "0.18", icon: "$", iconBg: "bg-[#2775CA]" },
  { id: "dash", name: "DASH", rate: "6.44", icon: "Đ", iconBg: "bg-[#008CE7]" },
  {
    id: "waves",
    name: "WAVES",
    rate: "0.33",
    icon: "~",
    iconBg: "bg-[#0155FF]",
  },
];

export default function BuyTokens() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredOptions = cryptoOptions.filter((option) =>
    option.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-white">Buy X Tokens</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Join the future of finance. Select your preferred currency and
          calculate your potential rewards.
        </p>
        <Link
          href="/how-to-buy"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm"
        >
          New to crypto? Learn how to get started →
        </Link>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-white">
          Select Payment Method
        </h2>
        <p className="text-gray-400 text-sm">
          Choose your preferred cryptocurrency for secure and instant
          transactions
        </p>

        <div className="flex items-center space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search cryptocurrency..."
              className="pl-10 bg-gray-900/50 border-gray-800 text-white"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-2 bg-gray-900/50 rounded-md p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded ${
                viewMode === "grid" ? "bg-gray-800" : ""
              }`}
            >
              <Grid2X2 className="h-4 w-4 text-gray-400" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded ${
                viewMode === "list" ? "bg-gray-800" : ""
              }`}
            >
              <List className="h-4 w-4 text-gray-400" />
            </button>
          </div>
        </div>

        <div
          className={`grid gap-4 ${
            viewMode === "grid" ? "grid-cols-1 md:grid-cols-4" : "grid-cols-1"
          }`}
        >
          {filteredOptions.map((option) => (
            <button
              key={option.id}
              className="p-4 rounded-lg bg-gray-900/50 backdrop-blur border border-gray-800 hover:border-gray-700 transition-colors flex items-center gap-4"
            >
              <div
                className={`w-10 h-10 rounded-full ${option.iconBg} flex items-center justify-center text-white font-bold`}
              >
                {option.icon}
              </div>
              <div className="flex-1 text-left">
                <div className="text-white font-semibold">{option.name}</div>
                <div className="text-sm text-gray-400">
                  1 {option.name} = {option.rate} X
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="flex items-center justify-center space-x-4 mt-6">
          <button className="p-2 rounded-lg bg-gray-900/50 border border-gray-800">
            <ChevronLeft className="h-4 w-4 text-gray-400" />
          </button>
          <div className="text-gray-400 text-sm">
            <span className="text-white">1</span> / 2
          </div>
          <button className="p-2 rounded-lg bg-gray-900/50 border border-gray-800">
            <ChevronRight className="h-4 w-4 text-gray-400" />
          </button>
        </div>

        <div className="text-center mt-6">
          <Link
            href="/support"
            className="text-gray-500 text-sm hover:text-gray-400"
          >
            Need help? Contact our support team 24/7
          </Link>
        </div>
      </div>
    </div>
  );
}
