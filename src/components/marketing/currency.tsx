"use client";

import { ArrowRight, Check } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import { PingDot } from "../ui/pingdot";
import Image from "next/image";
import { currencyFeatures, currencyButton } from "@/constants/currencyData";

function Currency() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="flex justify-center lg:justify-start mb-6">
              <Button
                variant="green"
                size="xs"
                className="bg-white/70 backdrop-blur-md text-green-600 border border-emerald-100 py-4 px-5 rounded-full shadow-sm hover:shadow-md transition-all flex items-center gap-2"
              >
                <PingDot
                  size={16}
                  color={currencyButton.dotColor}
                  pingColor={currencyButton.pingColor}
                />
                {currencyButton.title}
              </Button>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              One account for 90+ currencies worldwide.
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our PLatform allows you Can to Send, Recives, Convert Currenciies
              Seamlessly In a Real Time . All While Saving on Fees .
            </p>

            <div className="space-y-4 mb-10">
              {currencyFeatures.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center group transition-all duration-300"
                >
                  <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                    <Check className="text-white" size={16} />
                  </div>
                  <span className="text-gray-700 group-hover:text-emerald-600 transition-colors">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            <Button
              variant="green"
              size="lg"
              className="rounded-full px-7 py-5 text-white bg-gradient-to-r from-emerald-500 to-emerald-600 hover:bg-emerald-700 shadow-md hover:shadow-emerald-600 transition-all flex items-center gap-2 group"
            >
              Learn More
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/country.png"
              alt="Multi-currency account"
              width={600}
              height={600}
              className="rounded-[20px] shadow-lg hover:shadow-gray-200 transition-shadow duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Currency;
