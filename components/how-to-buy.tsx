import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Wallet,
  CreditCard,
  Shield,
  ArrowRightLeft,
  Building2,
  DollarSign,
  Coins,
  ScrollText,
  CheckCircle2,
  Lock,
  Zap,
  Repeat,
  BadgeDollarSign,
} from "lucide-react"
import Link from "next/link"

const TimelineStep = ({
  number,
  icon: Icon,
  title,
  description,
}: {
  number: number
  icon: any
  title: string
  description: string
}) => (
  <div className="flex gap-4">
    <div className="flex flex-col items-center">
      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
        {number}
      </div>
      {number !== 4 && <div className="w-0.5 h-full bg-blue-500/20 mt-2" />}
    </div>
    <div className="pb-8">
      <Card className="p-4 bg-gray-900/50 border-gray-800">
        <div className="flex gap-3">
          <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
            <Icon className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <h3 className="font-semibold text-white">{title}</h3>
            <p className="text-sm text-gray-400">{description}</p>
          </div>
        </div>
      </Card>
    </div>
  </div>
)

const Feature = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <div className="flex flex-col items-center text-center space-y-2">
    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
      <Icon className="w-6 h-6 text-blue-400" />
    </div>
    <h3 className="font-semibold text-white">{title}</h3>
    <p className="text-sm text-gray-400">{description}</p>
  </div>
)

export default function HowToBuy() {
  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          How to Buy X Tokens
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Follow these simple steps to purchase X Tokens and join our growing community. New to crypto? Check out our
          guide for beginners below.
        </p>
      </div>

      {/* TrustWallet/MetaMask Section */}
      <Card className="p-6 bg-gray-900/50 border-gray-800">
        <h2 className="text-xl font-semibold text-white mb-6">Buy Crypto via TrustWallet or MetaMask</h2>
        <div className="space-y-2">
          <TimelineStep
            number={1}
            icon={Wallet}
            title="Install TrustWallet or MetaMask"
            description="Download TrustWallet or MetaMask from the App Store or Google Play. Ensure you download from official sources."
          />
          <TimelineStep
            number={2}
            icon={CreditCard}
            title="Use Your Credit/Debit Card"
            description="Within the app, choose 'Buy Crypto'. Select USDT, ETH, or BTC and pay securely with your credit or debit card."
          />
          <TimelineStep
            number={3}
            icon={Shield}
            title="Secure Your Wallet"
            description="Save your recovery phrase securely. Never share it with anyone."
          />
          <TimelineStep
            number={4}
            icon={ArrowRightLeft}
            title="Transfer Crypto to Address you got"
            description="Once you have purchased crypto, transfer it to the address provided on the Buy Token page."
          />
        </div>
      </Card>

      {/* Crypto Exchanges Section */}
      <Card className="p-6 bg-gray-900/50 border-gray-800">
        <h2 className="text-xl font-semibold text-white mb-6">Buy Crypto via Crypto Exchanges</h2>
        <div className="space-y-2">
          <TimelineStep
            number={1}
            icon={Building2}
            title="Create an Exchange Account"
            description="Sign up on Coinbase, Binance, or OKX. Verify your identity with basic documents to get started."
          />
          <TimelineStep
            number={2}
            icon={DollarSign}
            title="Buy USDT or ETH"
            description="Use your credit/debit card to purchase USDT (Tether) or ETH (Ethereum) on the exchange."
          />
          <TimelineStep
            number={3}
            icon={ArrowRightLeft}
            title="Withdraw to Address"
            description="Once you have purchased crypto, transfer it to the address provided on the Buy Token page."
          />
        </div>
        <Link href="#" className="text-sm text-blue-400 hover:text-blue-300 mt-4 inline-block">
          Learn how to withdraw from Binance →
        </Link>
      </Card>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Feature
          icon={Lock}
          title="Secure Transactions"
          description="Every transaction is protected with top tier encryption and security protocols"
        />
        <Feature
          icon={Zap}
          title="Instant Processing"
          description="Tokens are credited immediately after payment confirmation"
        />
        <Feature
          icon={Repeat}
          title="Multiple Currencies"
          description="Choose from BTC, ETH, USDT, and more to complete your purchase"
        />
        <Feature
          icon={BadgeDollarSign}
          title="Competitive Rates"
          description="Get the best rates with our highly competitive token pricing"
        />
      </div>

      {/* Step by Step Guide */}
      <Card className="p-6 bg-gray-900/50 border-gray-800">
        <h2 className="text-xl font-semibold text-white mb-6">Step-by-Step X Coin Purchase Guide</h2>
        <div className="space-y-2">
          <TimelineStep
            number={1}
            icon={Coins}
            title="Select Your Currency"
            description="Choose your preferred cryptocurrency from the available options in the Buy Token page."
          />
          <TimelineStep
            number={2}
            icon={DollarSign}
            title="Enter Amount"
            description="Input the amount you wish to invest. The system will calculate the X Tokens you'll receive."
          />
          <TimelineStep
            number={3}
            icon={ScrollText}
            title="Review Transaction"
            description="Carefully review the transaction details before proceeding."
          />
          <TimelineStep
            number={4}
            icon={Shield}
            title="Complete Payment"
            description="Send the exact amount to the provided wallet address. Verify the address to avoid errors."
          />
          <TimelineStep
            number={5}
            icon={CheckCircle2}
            title="Receive Tokens"
            description="Once your payment is confirmed, the X Tokens will be credited to your account."
          />
        </div>
      </Card>

      <div className="flex justify-center">
        <Button
          size="lg"
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 shimmer"
        >
          Buy X Tokens Now →
        </Button>
      </div>
    </div>
  )
}

