"use client";

import { BRANDS_DATA } from "@/constants/brands";

function Brands() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-4xl font-semibold text-gray-900 uppercase tracking-wide mb-10">
          Our Recent Clients & Partners
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center opacity-90">
          {BRANDS_DATA.map((brand, index) => (
            <div
              key={index}
              className="flex items-center gap-2 justify-center text-gray-700 font-medium"
            >
              <brand.icon
                size={30}
                style={{ color: brand.color }}
                className="text-2xl"
              />
              <span className="text-2xl">{brand.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 text-gray-500 text-sm font-medium">
          Join <span className="text-emerald-600 font-semibold">40,000+</span>{" "}
          Companies Already Growing
        </div>
      </div>
    </section>
  );
}

export default Brands;
