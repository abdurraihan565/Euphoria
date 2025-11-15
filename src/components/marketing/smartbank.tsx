"use client";
import { paymentButton } from "@/constants/paymentData";
import { ArrowRight } from "lucide-react";
import { PingDot } from "../ui/pingdot";
import Image from "next/image";
import { Button } from "../ui/button";
import { Banking, BankingFeature } from "@/constants/bankingdata";
import { useState } from "react";

function Smartbank() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="flex justify-center">
            <Image
              src="/images/banking.png"
              alt="Multi-currency account"
              width={600}
              height={400}
              className="rounded-[20px] shadow-lg transition-shadow duration-500 w-full max-w-[500px]"
            />
          </div>

          <div>
            <div className="flex justify-start mb-6">
              <Button
                variant="green"
                size="xs"
                className="bg-white/70 backdrop-blur-md text-green-600 border border-emerald-100 py-3 px-5 rounded-full shadow-sm hover:shadow-md transition-all flex items-center gap-2"
              >
                <PingDot
                  size={16}
                  color={paymentButton.dotColor}
                  pingColor={paymentButton.pingColor}
                />
                {paymentButton.title}
              </Button>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Smart Banking For a Digigtal Worlds
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Our Fitech Banking Services revulatoinalizes the way you manage
              your money , offerijng seamles,secure and smart solutions for all
              your finalcials need.
            </p>

            <div className="space-y-4 mb-10">
              <div className="space-y-2">
                {Banking.map((item: BankingFeature, index: number) => (
                  <div
                    key={index}
                    className="bg-white/80 backdrop-blur-md rounded-xl shadow-sm transition-all duration-300"
                  >
                    <button
                      onClick={() => toggle(index)}
                      className="w-full flex items-center justify-between p-4 group"
                    >
                      <div className="flex items-center">
                        <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full mr-4 duration-300 group-hover:scale-110 text-white font-bold">
                          {index + 1}
                        </div>
                        <p className="text-gray-700 font-medium group-hover:text-emerald-600 transition-colors duration-300">
                          {item.text}
                        </p>
                      </div>
                      <span className="text-emerald-500 font-bold">
                        {openIndex === index ? "-" : "+"}
                      </span>
                    </button>

                    {openIndex === index && (
                      <div className="p-4 border-t border-gray-200 text-gray-600">
                        {item.description}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <Button
              variant="green"
              size="lg"
              className="rounded-full px-7 py-5 text-white bg-emerald-600 hover:bg-emerald-700 shadow-md hover:shadow-emerald-200 transition-all flex items-center gap-2 group"
            >
              Get Start Now
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Smartbank;
