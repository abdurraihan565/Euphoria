"use client";
import { GridOverlay } from "../ui/GridBackground";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

function Hero() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-[#0A2E2E] via-[#1e240f] to-[#0d221b]">
      <GridOverlay variant="green" opacity={0.4} size={80} />

      {/*main containner here */}

      <div className="relative z-20 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className=" items-center gap-12 lg:grid-cols-2">
          {/*This ie left side here  */}
          <div className="flex flex-col items-center justify-center space-y-8 text-center lg:text-center">
            <Button variant="green" size="xs" className="bg-white/10">
              <span className="mr-2 rounded-full bg-emerald-600 px-2 py-0.5 text-xs font-bold text-white">
                NEW
              </span>
              Payment Cards upgraded
            </Button>

            <h1 className="text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
              Cross-border payment
              <br />
              made easy.
            </h1>

            <p className="text-lg text-gray-300 md:text-xl">
              We help individuals or businesses to quickly send and receive
              <br className="hidden lg:block" />
              money globally, without the bank fees.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <Link href="#" className="hidden lg:block">
                <Button variant="green" size="xl">
                  Create Account
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>

              <Button
                variant="green"
                size="xl"
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-white text-gray-500 shadow-xl transition-all hover:scale-105 hover:shadow-2xl"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white">
                  <Play className="h-5 w-5" />
                </span>
                Watch Tutorial
              </Button>
            </div>
          </div>

          {/* Right Content here*/}
          <div className="relative">
            <Image
              src="/images/heroCard.png"
              alt="hero-payment"
              width={1020}
              height={1020}
              className="rounded-lg lg:rounded-[20px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
