"use client";
import { featuresData } from "@/constants/featuresData";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { PingDot } from "../ui/pingdot";
import { Button } from "../ui/button";

function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16 space-y-6">
          <Button
            variant="green"
            size="xl"
            className="rounded-full py-5 border bg-white/10 text-green-600 flex items-center gap-2"
          >
            <PingDot size={16} color="#10b981" pingColor="#6ee7b7" />
            Features
          </Button>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Banking Reimagined for the Future You
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl">
            Experience next-generation banking with cutting-edge technology and
            user-friendly features designed for modern life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuresData.map((f, i) => (
            <FeatureCard
              key={i}
              icon={f.icon}
              title={f.title}
              description={f.description}
              color={f.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
