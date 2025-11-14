"use client";

import { ArrowRight, Banknote, Check } from "lucide-react";
import { Button } from "../ui/button";
import { PingDot } from "../ui/pingdot";
import Image from "next/image";
import { paymentButton, paymentFeatures } from "@/constants/paymentData";

function Payments() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="flex justify-center">
            <Image
              src="/images/ct.png"
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
              Our Payment System is Easy to Start Using.
            </h2>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Its easy setup ensures business can start using it effortlessly.
              Making financial management more straightforward and reliable.
            </p>

            <div className="space-y-4 mb-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {paymentFeatures.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-white/80 backdrop-blur-md rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="w-14 h-10 flex items-center justify-center bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl mr-4 duration-300 group-hover:scale-110">
                      <Check className="text-white" size={20} />
                    </div>

                    <p className="text-gray-700 font-medium group-hover:text-emerald-600 transition-colors duration-300">
                      {item.text}
                    </p>
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

export default Payments;
