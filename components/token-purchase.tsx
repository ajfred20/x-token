"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { ArrowLeftRight } from "lucide-react";

interface TokenPurchaseProps {
  onCloseAction: () => void;
}

const tiers = [
  { value: 200, label: "200", status: "Bronze" },
  { value: 500, label: "500", status: "Silver" },
  { value: 2000, label: "2,000", status: "Gold" },
  { value: 10000, label: "10,000", status: "Platinum" },
  { value: 50000, label: "50,000", status: "Diamond" },
  { value: 100000, label: "100,000", status: "Legendary" },
];

const calculateProgress = (value: number) => {
  const max = Math.max(...tiers.map((t) => t.value));
  return (value / max) * 100;
};

const getStatusLevel = (value: number) => {
  for (let i = tiers.length - 1; i >= 0; i--) {
    if (value >= tiers[i].value) return tiers[i].status;
  }
  return "Basic";
};

export default function TokenPurchase({ onCloseAction }: TokenPurchaseProps) {
  const [amount, setAmount] = useState("500");
  const ethRate = 0.001753; // ETH per X token
  const ethAmount = Number.parseFloat(amount) * ethRate;

  return (
    <div className="space-y-8">
      <div className="flex justify-end mb-4">
        <button
          onClick={onCloseAction}
          className="text-gray-400 hover:text-gray-300 text-sm"
        >
          ← Choose another currency
        </button>
      </div>
      <div className="p-6 rounded-lg bg-gray-900/50 backdrop-blur border border-gray-800">
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-32 bg-gray-900/50 border-gray-800 text-white text-xl"
            />
            <button className="p-2 rounded-lg bg-gray-800/50 border border-gray-700">
              <ArrowLeftRight className="w-4 h-4 text-gray-400" />
            </button>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-gray-400">
              <span>Progress to next tier</span>
              <span>{Number.parseFloat(amount).toLocaleString()} X</span>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-xs text-gray-500">
                <span>Min: 50 X</span>
                <span>
                  Max: {tiers[tiers.length - 1].value.toLocaleString()} X
                </span>
              </div>
              <Progress
                value={calculateProgress(Number.parseFloat(amount))}
                className="h-2 bg-gray-800 [&>div]:bg-gradient-to-r [&>div]:from-blue-600 [&>div]:to-purple-600"
              />
              <div className="flex justify-between text-xs text-gray-500">
                {tiers.map((tier) => (
                  <span key={tier.value}>{tier.value}</span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-1">
              <span className="text-sm text-gray-400">You Pay</span>
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold text-white">
                  {ethAmount.toFixed(4)}
                </span>
                <span className="text-gray-400">ETH</span>
              </div>
            </div>
            <div className="space-y-1">
              <span className="text-sm text-gray-400">You Receive</span>
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold text-white">
                  {Number.parseFloat(amount).toLocaleString()}
                </span>
                <span className="text-gray-400">X</span>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-gray-900/90 border border-gray-800">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">Status Level</span>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-blue-400">10% Bonus</span>
              </div>
            </div>
            <div className="text-lg font-semibold text-white">
              {getStatusLevel(Number.parseFloat(amount))}
            </div>
          </div>

          <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shimmer">
            Make a Manual Payment
          </Button>
        </div>
      </div>
    </div>
  );
}
