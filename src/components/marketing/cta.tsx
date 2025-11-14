import { IMAGES_DATA } from "@/constants/ImageStackCta";
import { ArrowRight, Star } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

function Cta() {
  return (
    <section className="  text-white flex items-center justify-center">
      <div className="w-full max-w-7xl px-4 text-center bg-gradient-to-br from-[#0A2E2E] via-[#0D3D3D] to-[#1A4A3A] rounded-2xl p-10 mb-20">
        {/* Rating */}
        <div className="mb-8">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                className="text-yellow-400 fill-current mx-1"
                size={18}
              />
            ))}
          </div>

          <div className="flex justify-center -space-x-2 mb-4">
            {IMAGES_DATA.map((image) => (
              <img
                key={image.name}
                src={image.src}
                alt={image.alt || image.name}
                className="w-10 h-10 rounded-full border-4 border-[#0A2E2E] object-cover"
              />
            ))}
          </div>
          <p className="text-gray-300">
            Over 100k+ Entrepreneurs and Businesses Choose Us.
          </p>
        </div>

        {/* Content */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Empowering Your Financial Freedom
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-10">
          Join millions of users who trust us with their financial future. Start
          your journey today.
        </p>
        <div className="flex justify-center">
          <Link href="#" className="hidden lg:block">
            <Button
              variant="green"
              size="xl"
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 justify-center"
            >
              Create Account
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Cta;
