"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "What is the purpose of the X Token?",
      answer:
        "The X Token is designed to power a global marketplace that enables secure and seamless transactions for goods, services, and ideas, leveraging cutting-edge AI technology for enhanced interactivity.",
    },
    {
      question: "How can I invest in the X Token?",
      answer:
        "To invest in X Token, sign up on our platform and participate in the private phase using supported cryptocurrencies.",
    },
    {
      question: "Are there any restrictions on investing?",
      answer:
        "Currently, there are no restrictions during the private phase. Anyone with a supported cryptocurrency wallet can participate.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept major cryptocurrencies, including Bitcoin (BTC), Ethereum (ETH), Dogecoin (DOGE), Tether (USDT), and USD Coin (USDC).",
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2">
          FAQ
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Common questions about X Token
        </p>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-gray-800 rounded-lg bg-gray-900/50 backdrop-blur px-6"
            >
              <AccordionTrigger className="text-white hover:text-purple-400">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
