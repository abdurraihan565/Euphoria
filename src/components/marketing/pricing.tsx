"use client";
import { Check } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { PingDot } from "../ui/pingdot";
import { currencyButton } from "@/constants/currencyData";
import { PLANS } from "@/constants/pricingData";

function Pricing() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  return (
    <section className="relative py-20 bg-gradient-to-br from-[#0A2E2E] via-[#0D3D3D] to-[#1A4A3A] text-white overflow-hidden mb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-center mb-5">
          <Button
            variant="green"
            size="xs"
            className="bg-white/10 backdrop-blur-sm text-white text-sx border border-white-20 py-4 px-5 rounded-full shadow-sm hover:shadow-md transition-all flex items-center gap-2"
          >
            <PingDot
              size={16}
              color={currencyButton.dotColor}
              pingColor={currencyButton.pingColor}
            />
            Pricing Plan
          </Button>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Select a plan that will empower your
            <br />
            business growth
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Each package includes personalized consultation and recommendations
            to
            <br />
            accelerate your project.
          </p>

          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-8 py-2.5 rounded-full font-medium transition-all duration-300 ${
                billingCycle === "monthly"
                  ? "bg-emerald-500 text-white shadow-lg"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-8 py-2.5 rounded-full font-medium transition-all duration-300 ${
                billingCycle === "yearly"
                  ? "bg-emerald-500 text-white shadow-lg"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {PLANS.map((plan, index) => {
            const price =
              billingCycle === "yearly" ? plan.yearlyPrice : plan.monthlyPrice;
            const savings =
              billingCycle === "yearly"
                ? plan.monthlyPrice * 12 - plan.yearlyPrice
                : 0;

            return (
              <div
                key={index}
                className={`relative bg-white/5 backdrop-blur-md rounded-3xl p-8 border-2 transition-all duration-500 hover:scale-105 ${
                  plan.popular
                    ? "border-emerald-500 shadow-2xl shadow-emerald-500/20 bg-white/10"
                    : "border-white/10 hover:border-white/30"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-emerald-400 to-emerald-600 text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-3">{plan.name}</h3>
                  <p className="text-sm text-gray-300 leading-relaxed min-h-[40px]">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline">
                    <span className="text-5xl font-bold">${price}</span>
                    <span className="text-gray-300 ml-2">
                      / per {billingCycle === "yearly" ? "year" : "month"}
                    </span>
                  </div>
                  {billingCycle === "yearly" && savings > 0 && (
                    <div className="mt-2 text-sm text-emerald-400 font-medium">
                      Save ${savings} per year
                    </div>
                  )}
                  {price === 0 && (
                    <div className="mt-2 text-sm text-gray-400">
                      Free forever
                    </div>
                  )}
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mr-3 mt-0.5">
                        <Check className="text-emerald-400" size={14} />
                      </div>
                      <span className="text-gray-200 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/40"
                      : "bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/40"
                  }`}
                >
                  Select This Plan
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
