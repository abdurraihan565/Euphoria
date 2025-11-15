"use client";

import { Star } from "lucide-react";

import { Button } from "../ui/button";
import { PingDot } from "../ui/pingdot";
import Image from "next/image";
import { RatingData, RatingTestimonial } from "@/constants/ratingdata";

function Rating() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Button
              variant="green"
              size="xl"
              className="rounded-full py-5 border bg-white/10 text-green-600 flex items-center gap-2"
            >
              <PingDot size={16} color="#10b981" pingColor="#6ee7b7" />
              Testimonials
            </Button>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Real Feedback from Satisfied Customers
          </h2>
          <p className="text-xl text-gray-600">
            Discover what real clients have to say about how our services helped
            them achieve their goals and manage their finances effortlessly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {RatingData.map((item: RatingTestimonial, index: number) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border-2 border-gray-100 hover:border-emerald-500 hover:shadow-xl transition-all"
            >
              {/* image is here*/}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{item.name}</div>
                  <div className="text-sm text-gray-500">{item.role}</div>
                </div>
              </div>

              <p className="text-gray-700 mb-4">{item.text}</p>

              <div className="flex items-center">
                {[...Array(item.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-400 fill-current"
                    size={16}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Rating;
