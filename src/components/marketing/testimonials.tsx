"use client";

import { testimonialsData } from "@/constants/testimonialsData";

function Testimonials() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData.map((item, index) => {
            const isActive = index === 1;

            return (
              <div
                key={index}
                className={`
                  rounded-3xl p-8 min-h-[280px] sm:min-h-[320px] lg:min-h-[300px]
                  flex flex-col justify-center items-center text-center shadow-2xl 
                  duration-500 transition-all hover:scale-105 
                  
                  ${
                    isActive
                      ? "bg-emerald-500  text-white"
                      : "bg-gray-50   text-gray-800"
                  }
                `}
              >
                <h1
                  className={`text-4xl sm:text-5xl font-bold mb-4 
                    ${isActive ? "text-white" : "text-gray-900"}
                  `}
                >
                  {item.value}
                </h1>

                <p
                  className={`text-sm sm:text-base px-2 
                    ${isActive ? "text-gray-100" : "text-gray-600"}
                  `}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
